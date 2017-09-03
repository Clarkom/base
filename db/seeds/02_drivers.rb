#
#
# Drivers
drivers = [
    [
      {
        :full_name => 'Ibrahim Boukili',
        :birth_date => '10-04-1976',
        :mobile_phone => '678236528',
        :home_phone => '52233526843',
        :driving_license_number => '01/078785',
        :home_address => 'Hay Hassani Derb Amal no 34',
      }
    ],
    [
      {
        :full_name => 'Said Rahmani',
        :birth_date => '12-11-1968',
        :mobile_phone => '638248973',
        :home_phone => '538536543',
        :driving_license_number => '01/078785',
        :home_address => 'Hay Hassani Derb Widade rue 54 no 78',
      }
    ]

]

drivers.count.times do |n|

  drivers[n].each do |damage_type|
    Driver.create!(
        full_name: damage_type[:full_name],
        birth_date: damage_type[:birth_date],
        mobile_phone: damage_type[:mobile_phone],
        home_phone: damage_type[:home_phone],
        driving_license_number: damage_type[:driving_license_number],
        home_address: damage_type[:home_address],
    )
  end

end