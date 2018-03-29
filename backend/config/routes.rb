Rails.application.routes.draw do
  resources :hackathons
  resources :events
  resources :restaurants
  resources :whiteboards
  resources :foods
  resources :community_fridges
  resources :mealpals
  resources :users
  resources :jobs
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
