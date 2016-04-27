Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :edit, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :images
  end
end
