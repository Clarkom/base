require 'test_helper'

class BreakCausesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @break_cause = break_causes(:one)
  end

  test "should get index" do
    get break_causes_url
    assert_response :success
  end

  test "should get new" do
    get new_break_cause_url
    assert_response :success
  end

  test "should create break_cause" do
    assert_difference('BreakCause.count') do
      post break_causes_url, params: { break_cause: { name: @break_cause.name } }
    end

    assert_redirected_to break_cause_url(BreakCause.last)
  end

  test "should show break_cause" do
    get break_cause_url(@break_cause)
    assert_response :success
  end

  test "should get edit" do
    get edit_break_cause_url(@break_cause)
    assert_response :success
  end

  test "should update break_cause" do
    patch break_cause_url(@break_cause), params: { break_cause: { name: @break_cause.name } }
    assert_redirected_to break_cause_url(@break_cause)
  end

  test "should destroy break_cause" do
    assert_difference('BreakCause.count', -1) do
      delete break_cause_url(@break_cause)
    end

    assert_redirected_to break_causes_url
  end
end
