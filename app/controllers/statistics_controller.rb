class StatisticsController < ApplicationController

  #
  #
  # Expenses
  def expenses
  end

  #
  #
  # Get Breaks By Year
  def get_breaks_by_year

    @break = Break.breaks_by_year(params[:break_year])

    respond_to do |format|
      format.json { render :json => @break }
      format.js
    end

  end

  #
  #
  # Revenus
  def revenus
  end

end