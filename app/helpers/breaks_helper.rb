module BreaksHelper

  #
  #
  # Convert Full Date to month
  # Merge Similar Amount for the same mounth
  def similar_expenses_amounts_by_month(query_results)

    months_and_amounts = []
    b = []

    #
    # Merge Dates By Months Instead of the full Date
    query_results.each_with_index do |query_result, index|
      months_and_amounts[index] = [query_result[0].strftime('%B'), query_result[1]]
    end

    #
    # Group Result by Months
    months_and_amounts.group_by { |month, amount|

      if month == 'January'
        'Janvier'

        elsif month == 'February'
          'Février'

        elsif month == 'March'
          'Mars'

        elsif month == 'April'
          'Avril'

      end

    }

=begin
    months_and_amounts.sort.each_with_index do |m, index|
      if m[0] == 'February'
        b[index] = m[1]
      end
    end
=end

  end

end
