module ApplicationHelper

  #
  #
  #
  def current_path(path)
    current_uri = request.env['PATH_INFO']
    current_uri.include? path
  end

  #
  #
  #
  def get_page_title

    if current_path('expenses/')
      render :inline => "#{fa_icon 'bank'} #{t :expenses} <b class='exp'>-#{Expense.sum(:amount)} DH</b>"

    elsif current_path('incomes/')
      render :inline => "#{fa_icon 'money'} #{t :incomes} <b class='inc'>+#{Income.sum(:amount)} DH</b>"

    elsif current_path('cabs')
      render :inline => "#{fa_icon 'taxi'} #{t :cab}"

    elsif current_path('statistics')
      render :inline => "#{fa_icon 'bar-chart'} #{t :statistics}"

    elsif current_path('/')
      render :inline => "#{fa_icon 'home'} #{t :home}"

    end

  end

  #
  #
  # Convert Full Date to month
  # Merge Similar Amount for the same month
  def similar_expenses_amounts_by_date(query_results)

    months_and_amounts = []
    result = {}

    #
    # Merge Dates By Months Instead of the full Date
    query_results.sort().each_with_index do |query_result, index|
      months_and_amounts[index] = localize(query_result[0], format: '%B'), query_result[1]
    end

    #
    # Group Result by Months
    not_filtered = months_and_amounts
                       .group_by {|a, b| a}
                       .map {|c, d| [c, d].flatten(2).uniq()}
                       .group_by {|e, f| e}

    not_filtered.each do |key, array|
      result["#{key}"] = array[0].drop(1).sum()
    end

    #
    # Final Result
    result

  end

  #
  #
  # Convert Full Date to Days
  def similar_expenses_amounts_by_year_and_month(query_results)

    days_and_amounts = []
    result = {}

    #
    # Merge Dates By Months Instead of the full Date
    query_results.sort().each_with_index do |query_result, index|
      start_date = localize(query_result[0], format: '%d')
      end_date = localize(query_result[1], format: '%d')
      amount = query_result[2]
      days_and_amounts[index] = start_date, end_date, amount
    end

    #
    # Group Result by Months
    not_filtered = days_and_amounts
                       .group_by {|a, b| "#{a}-#{b}"}
                       .map {|c, d| [c, d].flatten(1).uniq()}
                       .group_by {|f, g| f}

    not_filtered.each do |key, array|
      result["#{key}"] = array[0].drop(1)[0].drop(2).sum()
    end

    #
    # Final Result
    result


  end

  #
  #
  # Convert Full Date to Days
  def similar_expenses_amounts_by_year_and_month_v2(query_results)

    days_and_amounts = []
    result = {}

    #
    # Merge Dates By Months Instead of the full Date
    query_results.sort().each_with_index do |query_result, index|
      date = localize(query_result[0], format: '%d')
      amount = query_result[1]
      days_and_amounts[index] = date, amount
    end

    #
    # Group Result by Months
    not_filtered = days_and_amounts
                       .group_by {|a, b| "#{a}"}
                       .map {|c, d| [c, d].flatten(1).uniq()}
                       .group_by {|f, g| f}

    not_filtered.each do |key, array|
      result["#{key}"] = array[0].drop(1)[0].drop(1).sum()
    end

    #
    # Final Result
    result


  end

end
