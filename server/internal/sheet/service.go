package sheet

import (
	"context"
	"github.com/netflixaddicts-website/internal/entity"
)

type Sheet struct {
	entity.Sheet
}

type Service interface {
	Get(ctx context.Context, id string) (Sheet, error)
}

/**
			VALIDATION
*/

/**
type CreateSheetRequest struct {
	Name string `json:"name"`
}

func (req CreateSheetRequest) Validate() error {
	return validation.ValidateStruct(&req, validation.Field(&req.Name, validation.Required, validation.Length(0, 128)))
}
 */

/**
			SERVICE'S METHODS
*/

type service struct {
	repo Repository
}

func NewService(repo Repository) Service {
	return service{repo}
}

func (s service) Get(ctx context.Context, id string) (Sheet, error) {
	sheet, err := s.repo.Get(ctx, id)
	if err != nil {
		return Sheet{}, err
	}
	return sheet, nil
}
