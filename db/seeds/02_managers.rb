#
#
# Managers
managers = [
    [
      {
        :full_name => 'Arbaoui Abdenabi',
        :home_phone => '0544257421',
        :mobile_phone => '0645877962',
        :birth_date => '12-09-1976',
        :cin => 'BK413542',
      }
    ]

]

managers.count.times do |n|

  managers[n].each do |cab|
    Manager.create!(
        full_name: cab[:full_name],
        home_phone: cab[:home_phone],
        mobile_phone: cab[:mobile_phone],
        birth_date: cab[:birth_date],
        cin: cab[:cin],
    )
  end

end