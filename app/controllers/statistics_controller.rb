class StatisticsController < ApplicationController

  # ##################
  #                  #
  #     Expenses     #
  #                  #
  # ##################
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
  # Get Breaks By Year and Month
  def get_breaks_by_year_and_month

    @break = Break.breaks_by_year_and_month(
        params[:break_year],
        params[:break_month]
    )

    respond_to do |format|
      format.json { render :json => @break }
      format.js
    end

  end

  #
  #
  # Get Damages By Year
  def get_damages_by_year

    @damage = Damage.damages_by_year(params[:damage_year])

    respond_to do |format|
      format.json { render :json => @damage }
      format.js
    end

  end

  #
  #
  # Get Damages By Year and Month
  def get_damages_by_year_and_month

    @damage = Damage.damages_by_year_and_month(
        params[:damage_year],
        params[:damage_month]
    )

    respond_to do |format|
      format.json { render :json => @damage }
      format.js
    end

  end

  #
  #
  # Get Owner Takes By Year
  def get_owner_takes_by_year

    @owner_take = OwnerTake.owner_takes_by_year(params[:owner_take_year])

    respond_to do |format|
      format.json { render :json => @owner_take }
      format.js
    end

  end

  #
  #
  # Get Owner Takes By Year and Month
  def get_owner_takes_by_year_and_month

    @owner_take = OwnerTake.owner_takes_by_year_and_month(
        params[:owner_take_year],
        params[:owner_take_month]
    )

    respond_to do |format|
      format.json { render :json => @owner_take }
      format.js
    end

  end


  # #################
  #                 #
  #     Incomes     #
  #                 #
  # #################
  def incomes
  end

end