#
#
# Cabs
cabs = [
    [
      {
        :cab_model_id => 1,
        :license_plate => '77174-D -05',
        :agreement_number => 'SIAT/68502',
        :total_mileage => 125636
      }
    ]

]

cabs.count.times do |n|

  cabs[n].each do |cab|
    Cab.create!(
        cab_model_id: cab[:cab_model_id],
        license_plate: cab[:license_plate],
        agreement_number: cab[:agreement_number],
        total_mileage: cab[:total_mileage],
    )
  end

end