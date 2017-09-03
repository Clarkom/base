#
#
# Insurers
insurers = [
    [
        {
            :name => 'Wafa Assurance',
            :picture => '',
            :address => '',
            :phone => '0522906543',
        }
    ],
    [
        {
            :name => 'RMA Watania',
            :picture => '',
            :address => '',
            :phone => '0522458629',
        }
    ]

]

insurers.count.times do |n|

  insurers[n].each do |damage_type|
    Insurer.create!(
        name: damage_type[:name],
        picture: damage_type[:picture],
        address: damage_type[:address],
        phone: damage_type[:phone],
    )
  end

end