#
#
# Create Insurance
t1 = Time.parse("2015-03-16 14:40:34")
t2 = Time.parse("2020-12-20 16:20:23")
20.times do |n|
  Break.create!(
      expense_id: rand(6..30),
      start_date: rand(t1..t2),
      end_date: rand(t1..t2),
      break_cause_id: rand(1..2)
  )
end
