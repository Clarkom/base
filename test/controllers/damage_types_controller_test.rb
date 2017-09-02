require 'test_helper'

class DamageTypesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @damage_type = damage_types(:one)
  end

  test "should get index" do
    get damage_types_url
    assert_response :success
  end

  test "should get new" do
    get new_damage_type_url
    assert_response :success
  end

  test "should create damage_type" do
    assert_difference('DamageType.count') do
      post damage_types_url, params: { damage_type: { name: @damage_type.name } }
    end

    assert_redirected_to damage_type_url(DamageType.last)
  end

  test "should show damage_type" do
    get damage_type_url(@damage_type)
    assert_response :success
  end

  test "should get edit" do
    get edit_damage_type_url(@damage_type)
    assert_response :success
  end

  test "should update damage_type" do
    patch damage_type_url(@damage_type), params: { damage_type: { name: @damage_type.name } }
    assert_redirected_to damage_type_url(@damage_type)
  end

  test "should destroy damage_type" do
    assert_difference('DamageType.count', -1) do
      delete damage_type_url(@damage_type)
    end

    assert_redirected_to damage_types_url
  end
end
