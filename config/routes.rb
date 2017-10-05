Rails.application.routes.draw do

  devise_for :managers
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
  # Incomes
  resources :incomes do
    collection do
      resources :manager_takes

      get 'all', to: 'incomes#index'
      get 'income_fields'
      get 'manager_take_fields'
    end
  end

  #
  #
  # Statistics
  scope '/statistics' do

    #
    #
    #
    # Expenses
    get 'expenses', to: 'statistics#expenses'

    #
    # Breaks Filters
    get 'get_breaks_by_year', to: 'statistics#get_breaks_by_year'
    get 'get_breaks_by_year_and_month', to: 'statistics#get_breaks_by_year_and_month'

    #
    # Damages Filters
    get 'get_damages_by_year', to: 'statistics#get_damages_by_year'
    get 'get_damages_by_year_and_month', to: 'statistics#get_damages_by_year_and_month'

    #
    # Owner Takes Filters
    get 'get_owner_takes_by_year', to: 'statistics#get_owner_takes_by_year'
    get 'get_owner_takes_by_year_and_month', to: 'statistics#get_owner_takes_by_year_and_month'

    #
    #
    #
    # Incomes
    get 'incomes', to: 'statistics#incomes'

    #
    # Manager Takes Filters
    get 'get_manager_takes_by_year', to: 'statistics#get_manager_takes_by_year'
    get 'get_manager_takes_by_year_and_month', to: 'statistics#get_manager_takes_by_year_and_month'

  end


end
