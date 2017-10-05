class ApplicationController < ActionController::Base
  before_action :authenticate_manager!
  before_action :configure_permitted_parameters, if: :devise_controller?
  protect_from_forgery with: :exception

  protected

  def configure_permitted_parameters

    update_attrs = [
        :full_name,
        :home_phone,
        :mobile_phone,
        :birth_date,
        :cin
    ]
    devise_parameter_sanitizer.permit :account_update, keys: update_attrs

  end

end
