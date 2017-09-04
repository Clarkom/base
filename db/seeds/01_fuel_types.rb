#
#
# Fuel types
fuel_types = [
    [
      {
        :name => 'Essence',
      }
    ],
    [
      {
        :name => 'Diesel',
      }
    ]

]

fuel_types.count.times do |n|

  fuel_types[n].each do |fuel_type|
    FuelType.create!(
        name: fuel_type[:name],
    )
  end

end