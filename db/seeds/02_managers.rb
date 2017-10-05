#
#
# Managers
managers = [
    [
      {
        :email => 'arbaoui.abdenabi@gmail.com',
        :password => '123456',
        :full_name => 'Arbaoui Abdenabi',
        :picture => '',
        :home_phone => '0544257421',
        :mobile_phone => '0645877962',
        :birth_date => '12-09-1976',
        :cin => 'BK413542',
      }
    ]

]

managers.count.times do |n|

  managers[n].each do |manager|
    Manager.create!(
        email: manager[:email],
        password: manager[:password],
        full_name: manager[:full_name],
        picture: manager[:picture],
        home_phone: manager[:home_phone],
        mobile_phone: manager[:mobile_phone],
        birth_date: manager[:birth_date],
        cin: manager[:cin],
    )
  end

end