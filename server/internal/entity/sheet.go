package entity

import "gorm.io/gorm"

type Sheet struct {
	gorm.Model
	Name string `json:"name"`
}
