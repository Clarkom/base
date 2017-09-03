Rails.application.routes.draw do
  resources :insurers
  resources :owner_takes
  resources :owners
  resources :damages
  resources :damage_types
  resources :drivers
  resources :breaks
  resources :insurances
  resources :expenses do
    collection do
      get 'insurance_fields'
      get 'break_fields'
      get 'damage_fields'
      get 'owner_take_fields'
    end
  end



end
