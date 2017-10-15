class ApplicationController < ActionController::Base
  before_action :authenticate_manager!, :set_locale
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

  private

  def set_locale
    I18n.locale = extract_locale || I18n.default_locale
  end

  def extract_locale
    parsed_locale = params[:locale]
    I18n.available_locales.map(&:to_s).include?(parsed_locale) ? parsed_locale : nil
  end

end
