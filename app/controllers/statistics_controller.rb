class StatisticsController < ApplicationController

  #
  #
  # Expenses
  def expenses

    #
    # Expenses
    @total_expenses  = Expense.pluck(:amount).sum
    @breaks_sum      = Break.includes(:expense).pluck(:amount).sum
    @insurances_sum  = Insurance.includes(:expense).pluck(:amount).sum
    @damages_sum     = Damage.includes(:expense).pluck(:amount).sum
    @owner_takes_sum = OwnerTake.includes(:expense).pluck(:amount).sum

    #
    # Percentages
    @breaks_percent  = calculat_percent(@breaks_sum,@total_expenses)
    @insurances_percent  = calculat_percent(@insurances_sum,@total_expenses)
    @damages_percent  = calculat_percent(@damages_sum,@total_expenses)
    @owner_takes_percent  = calculat_percent(@owner_takes_sum,@total_expenses)

  end

  #
  #
  # Revenus
  def revenus

  end

  private

  def calculat_percent(expense, total_expenses)
    (expense.to_f / total_expenses.to_f) * 100
  end

end