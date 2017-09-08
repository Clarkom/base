#
#
# Create Owners
full_names = [
    'Arbaoui Latifa',
    'Arbaoui Fatima',
    'Arbaoui Rachida'
]

3.times do
  Owner.create!(
      full_name: full_names[rand(0..2)]
  )
end
