Rails.application.routes.draw do
  resources :breaks
  resources :inssurances
  resources :expenses do
    collection do
      get 'new_insurance'
    end
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
