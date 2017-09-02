require 'test_helper'

class InsurersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @insurer = insurers(:one)
  end

  test "should get index" do
    get insurers_url
    assert_response :success
  end

  test "should get new" do
    get new_insurer_url
    assert_response :success
  end

  test "should create insurer" do
    assert_difference('Insurer.count') do
      post insurers_url, params: { insurer: { address: @insurer.address, name: @insurer.name, phone: @insurer.phone, picture: @insurer.picture } }
    end

    assert_redirected_to insurer_url(Insurer.last)
  end

  test "should show insurer" do
    get insurer_url(@insurer)
    assert_response :success
  end

  test "should get edit" do
    get edit_insurer_url(@insurer)
    assert_response :success
  end

  test "should update insurer" do
    patch insurer_url(@insurer), params: { insurer: { address: @insurer.address, name: @insurer.name, phone: @insurer.phone, picture: @insurer.picture } }
    assert_redirected_to insurer_url(@insurer)
  end

  test "should destroy insurer" do
    assert_difference('Insurer.count', -1) do
      delete insurer_url(@insurer)
    end

    assert_redirected_to insurers_url
  end
end
