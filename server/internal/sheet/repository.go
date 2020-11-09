package sheet

import (
	"context"
	"gorm.io/gorm"
)

type Repository interface {
	Get(ctx context.Context, id string) (Sheet, error)
}

/**
			DATA REQUESTS
 */

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) Service {
	return repository{db}
}

func (r repository) Get(ctx context.Context, id string) (Sheet, error) {
	panic("implement me")
}