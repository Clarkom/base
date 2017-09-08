#
#
# Create Expenses
last_id = 46
20.times do |n|
  Expense.create!(
      id: last_id + n ,
      amount: 2500
  )
end

#
#
# Create Owner Takes
start_date = '2015-12-13'.to_date

20.times do |n|

  date = (start_date + n.month + rand(1..15)).to_s

  OwnerTake.create!(
      expense_id: rand(46..65),
      owner_id: rand(1..3),
      date: date,
  )
end


