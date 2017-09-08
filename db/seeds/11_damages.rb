#
#
# Create Expenses
last_id = 26
20.times do |n|
  Expense.create!(
      id: last_id + n ,
      amount: rand(100..4300)
  )
end

#
#
# Create Damages
t1 = Time.parse("2015-11-16 14:40:34")
t2 = Time.parse("2020-11-20 16:20:23")

20.times do |n|

  if n != 46
    Damage.create!(
        expense_id: last_id + n,
        damage_type_id: rand(1..15),
        driver_id: n < 5 ? rand(1..2) : nil,
        date: rand(t1..t2),
        kilometers: rand(2143..4556),
        labor: rand(20..60),
    )
  end

end
