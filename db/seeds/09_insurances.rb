#
#
# Create Expense
id = 1
5.times do |n|
  Expense.create!(
      id: id + n,
      amount: rand(6000..9800)
  )
end

#
#
# Create Insurance
counter = 1
5.times do |n|

  random_year = ['2013','2014','2015','2016','2017','2018']
  random_day = rand(01..30)
  random_month = rand(01..12)

  start_date = "#{random_day}-#{random_month}-#{random_year[n]}"
  end_date = ((start_date.to_date + 1.year).to_s).to_date.strftime('%d-%m-%Y')

  Insurance.create!(
      expense_id: counter+n,
      insurer_id: rand(1..2),
      start_date: start_date,
      expiration_date: end_date,
  )
end

