Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root 'static#index'

  namespace :v1, defaults: { format: 'json' } do
    get 'greeting', to: 'greetings#index'
  end

  # Defines the root path route ("/")
  # root "articles#index"
end
