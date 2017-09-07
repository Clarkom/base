module StatisticsHelper

  def calculat_percent(expense, total_expenses)
    (expense.to_f / total_expenses.to_f) * 100
  end

end
