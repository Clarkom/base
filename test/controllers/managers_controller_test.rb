require 'test_helper'

class ManagersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @manager = managers(:one)
  end

  test "should get index" do
    get managers_url
    assert_response :success
  end

  test "should get new" do
    get new_manager_url
    assert_response :success
  end

  test "should create manager" do
    assert_difference('Manager.count') do
      post managers_url, params: { manager: { birth_date: @manager.birth_date, cin: @manager.cin, full_name: @manager.full_name, home_phone: @manager.home_phone, mobile_phone: @manager.mobile_phone } }
    end

    assert_redirected_to manager_url(Manager.last)
  end

  test "should show manager" do
    get manager_url(@manager)
    assert_response :success
  end

  test "should get edit" do
    get edit_manager_url(@manager)
    assert_response :success
  end

  test "should update manager" do
    patch manager_url(@manager), params: { manager: { birth_date: @manager.birth_date, cin: @manager.cin, full_name: @manager.full_name, home_phone: @manager.home_phone, mobile_phone: @manager.mobile_phone } }
    assert_redirected_to manager_url(@manager)
  end

  test "should destroy manager" do
    assert_difference('Manager.count', -1) do
      delete manager_url(@manager)
    end

    assert_redirected_to managers_url
  end
end
