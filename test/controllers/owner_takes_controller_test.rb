require 'test_helper'

class OwnerTakesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @owner_take = owner_takes(:one)
  end

  test "should get index" do
    get owner_takes_url
    assert_response :success
  end

  test "should get new" do
    get new_owner_take_url
    assert_response :success
  end

  test "should create owner_take" do
    assert_difference('OwnerTake.count') do
      post owner_takes_url, params: { owner_take: { expense_id: @owner_take.expense_id, owner_id: @owner_take.owner_id } }
    end

    assert_redirected_to owner_take_url(OwnerTake.last)
  end

  test "should show owner_take" do
    get owner_take_url(@owner_take)
    assert_response :success
  end

  test "should get edit" do
    get edit_owner_take_url(@owner_take)
    assert_response :success
  end

  test "should update owner_take" do
    patch owner_take_url(@owner_take), params: { owner_take: { expense_id: @owner_take.expense_id, owner_id: @owner_take.owner_id } }
    assert_redirected_to owner_take_url(@owner_take)
  end

  test "should destroy owner_take" do
    assert_difference('OwnerTake.count', -1) do
      delete owner_take_url(@owner_take)
    end

    assert_redirected_to owner_takes_url
  end
end
