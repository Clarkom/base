module BreaksHelper

  #
  #
  # Convert Full Date to month
  # Merge Similar Amount for the same mounth
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
        .group_by { |a, b| a }
        .map { |c, d| [c, d].flatten(2).uniq() }
        .group_by{ |e,f| e }

    not_filtered.each do |key, array|
      result["#{key}"] = array[0].drop(1).sum()
    end

    #
    # Final Result
    result

  end

end
