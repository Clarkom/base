#
#
# Create Damages
t1 = Time.parse("2015-11-16 14:40:34")
t2 = Time.parse("2020-11-20 16:20:23")
20.times do |n|
  OwnerTake.create!(
      expense_id: rand(31..50),
      owner_id: rand(1..3),
      date: rand(t1..t2),
  )
end
