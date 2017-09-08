
#
#
# Create Expense

65.times do

  Expense.create!(
      amount: rand(120..1000)
  )

end