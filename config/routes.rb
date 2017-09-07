Rails.application.routes.draw do

  devise_for :users
  root to: 'home#index'

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
      resources :owners
      resources :drivers
      resources :break_causes
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

  #
  #
  # Statistics
  scope '/statistics' do
    get 'expenses', to: 'statistics#expenses'
    get 'revenus', to: 'statistics#revenus'
  end


end
