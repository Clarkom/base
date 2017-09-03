require 'test_helper'

class CabModelsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @cab_model = cab_models(:one)
  end

  test "should get index" do
    get cab_models_url
    assert_response :success
  end

  test "should get new" do
    get new_cab_model_url
    assert_response :success
  end

  test "should create cab_model" do
    assert_difference('CabModel.count') do
      post cab_models_url, params: { cab_model: { description: @cab_model.description, fuel_type_id: @cab_model.fuel_type_id, manufacture_year: @cab_model.manufacture_year, name: @cab_model.name, number_places: @cab_model.number_places, power_hp: @cab_model.power_hp, sheet_metal: @cab_model.sheet_metal } }
    end

    assert_redirected_to cab_model_url(CabModel.last)
  end

  test "should show cab_model" do
    get cab_model_url(@cab_model)
    assert_response :success
  end

  test "should get edit" do
    get edit_cab_model_url(@cab_model)
    assert_response :success
  end

  test "should update cab_model" do
    patch cab_model_url(@cab_model), params: { cab_model: { description: @cab_model.description, fuel_type_id: @cab_model.fuel_type_id, manufacture_year: @cab_model.manufacture_year, name: @cab_model.name, number_places: @cab_model.number_places, power_hp: @cab_model.power_hp, sheet_metal: @cab_model.sheet_metal } }
    assert_redirected_to cab_model_url(@cab_model)
  end

  test "should destroy cab_model" do
    assert_difference('CabModel.count', -1) do
      delete cab_model_url(@cab_model)
    end

    assert_redirected_to cab_models_url
  end
end
