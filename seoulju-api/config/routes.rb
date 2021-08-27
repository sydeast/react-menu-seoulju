Rails.application.routes.draw do
  get '/auth/:provider/callback' => 'sessions#omniauth'
  namespace :api do
    namespace :v1 do
      resources :menus
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
