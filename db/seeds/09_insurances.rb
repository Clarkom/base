#
#
# Create Insurance
t1 = Time.parse("2015-03-16 14:40:34")
t2 = Time.parse("2015-12-20 16:20:23")
t3 = Time.parse("2016-08-16 14:40:34")
t4 = Time.parse("2020-10-20 16:20:23")
5.times do |n|
  Insurance.create!(
      expense_id: rand(1..5),
      insurer_id: rand(1..2),
      start_date: rand(t1..t2),
      expiration_date: rand(t3..t4)
  )
end
