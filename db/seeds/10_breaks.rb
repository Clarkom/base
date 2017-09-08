#
#
# Create Expenses
last_id = 6
20.times do |n|
  Expense.create!(
      id: last_id + n ,
      amount: 270
  )
end

#
#
# Create Breaks
starting_date = '2015-12-13'.to_date
20.times do |n|

  start_date = starting_date + rand(1..3).year + rand(1..4).month + rand(1..23).day
  end_date = start_date.to_date + rand(1..3).day

  if n != 26
    Break.create!(
        expense_id: last_id + n ,
        start_date: start_date,
        end_date: end_date,
        break_cause_id: rand(1..2)
    )
  end

end

Break.all.each do |b|
  start_date = b.start_date
  end_date = b.end_date
  amount = ((end_date - start_date).to_i) * 270

  Break.find(b.id).expense.update(amount: amount)
end




