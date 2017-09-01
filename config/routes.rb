Rails.application.routes.draw do
  resources :breaks
  resources :inssurances
  resources :expenses do
    collection do
      get 'insurance_fields'
    end
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
