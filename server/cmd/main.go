package main

import (
	"github.com/gin-gonic/gin"
	"github.com/netflixaddicts-website/internal/entity"
	"github.com/netflixaddicts-website/internal/sheet"
	"github.com/tylerstillwater/graceful"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"net/http"
	"os"
	"time"
)

var Version = "1.0.0"

func main() {
	db, err := gorm.Open(mysql.Open(os.Getenv("DB_PSN")), &gorm.Config{})
	if err != nil {
		panic(err)
	}

	// Migrations
	if err := entity.Migrate(db); err != nil {
		panic(err)
	}

	address := os.Getenv("MW_ADDR")
	server := &graceful.Server{
		Timeout: 10 * time.Second,
		Server: &http.Server{
			Addr:    address,
			Handler: buildHandler(db),
		},
	}

	_ = server.ListenAndServe()
}

func buildHandler(db *gorm.DB) http.Handler {
	router := gin.Default()

	router.Use(gin.Logger())

	api := router.Group("/api", gin.BasicAuth(gin.Accounts{}))
	apiV1 := api.Group("/v1")

	sheet.RegisterHandlers(
		apiV1.Group(""),
		sheet.NewService(sheet.NewRepository(db)))

	return router
}
