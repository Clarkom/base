#
#
# Create Damages
t1 = Time.parse("2015-11-16 14:40:34")
t2 = Time.parse("2020-11-20 16:20:23")
20.times do |n|
  Damage.create!(
      expense_id: rand(31..50),
      damage_type_id: rand(1..3),
      driver_id: rand(1..2),
      date: rand(t1..t2),
      kilometers: rand(2143..4556),
      labor: rand(20..60),
  )
end
