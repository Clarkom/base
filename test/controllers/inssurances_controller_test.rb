require 'test_helper'

class InssurancesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @inssurance = inssurances(:one)
  end

  test "should get index" do
    get inssurances_url
    assert_response :success
  end

  test "should get new" do
    get new_inssurance_url
    assert_response :success
  end

  test "should create inssurance" do
    assert_difference('Inssurance.count') do
      post inssurances_url, params: { inssurance: { end_date: @inssurance.end_date, expense_id: @inssurance.expense_id, start_date: @inssurance.start_date } }
    end

    assert_redirected_to inssurance_url(Inssurance.last)
  end

  test "should show inssurance" do
    get inssurance_url(@inssurance)
    assert_response :success
  end

  test "should get edit" do
    get edit_inssurance_url(@inssurance)
    assert_response :success
  end

  test "should update inssurance" do
    patch inssurance_url(@inssurance), params: { inssurance: { end_date: @inssurance.end_date, expense_id: @inssurance.expense_id, start_date: @inssurance.start_date } }
    assert_redirected_to inssurance_url(@inssurance)
  end

  test "should destroy inssurance" do
    assert_difference('Inssurance.count', -1) do
      delete inssurance_url(@inssurance)
    end

    assert_redirected_to inssurances_url
  end
end
