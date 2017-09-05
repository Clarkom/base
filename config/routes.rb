Rails.application.routes.draw do

  devise_for :users
  root to: 'home#index'

  resources :break_causes
  resources :owners
  resources :drivers

  #
  #
  # Cabs
  resources :cabs do
    collection do
      get 'all', to: 'cabs#index'
      resources :cab_models
      resources :fuel_types
      resources :damage_types
      resources :insurers
    end
  end

  #
  #
  # Expenses
  resources :expenses do
    collection do
      resources :insurances
      resources :breaks
      resources :damages
      resources :owner_takes

      get 'all', to: 'expenses#index'
      get 'insurance_fields'
      get 'break_fields'
      get 'damage_fields'
      get 'owner_take_fields'
    end
  end



end
