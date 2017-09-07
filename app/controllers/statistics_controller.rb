class StatisticsController < ApplicationController

  #
  #
  # Expenses
  def expenses
  end

  #
  #
  # Insurance
  def get_insurance_by_year

    @insurance = Insurance.insurances_by_year(params[:insurance_year])

    respond_to do |format|
      format.json { render :json => @insurance }
      format.js
    end

  end

  #
  #
  # Revenus
  def revenus
  end

end