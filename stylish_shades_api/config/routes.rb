Rails.application.routes.draw do
  resources :categories, only: [:index] do
    resources :sunglasses, only: [:index]
  end
  resources :sunglasses, only: [:update]
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
