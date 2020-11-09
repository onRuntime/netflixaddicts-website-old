package sheet

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func RegisterHandlers(router *gin.RouterGroup, service Service) {
	res := resource{service}

	router.GET("/sheets/:id", res.get)
}

/**
			ROUTES
*/

type resource struct {
	service Service
}

func (res resource) get(ctx *gin.Context) {
	sheet, err := res.service.Get(ctx.Request.Context(), ctx.Param("id"))
	if err != nil {
		panic(err)
	}

	ctx.JSON(http.StatusOK, sheet)
}
