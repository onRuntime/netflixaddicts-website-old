package entity

import "gorm.io/gorm"

func Migrate(db *gorm.DB) error {
	err := db.AutoMigrate(&Sheet{})
	if err != nil {
		return err
	}

	return nil
}
