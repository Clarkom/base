#
#
# Users
users = [
    [
      {
        :email => 'arbaoui.abdenabi@gmail.com',
        :password => '123456',
        :full_name => 'Arbaoui Abdenabi',
        :home_phone => '0544257421',
        :mobile_phone => '0645877962',
        :birth_date => '12-09-1976',
        :cin => 'BK413542',
      }
    ]

]

users.count.times do |n|

  users[n].each do |user|
    User.create!(
        email: user[:email],
        password: user[:password],
        full_name: user[:full_name],
        home_phone: user[:home_phone],
        mobile_phone: user[:mobile_phone],
        birth_date: user[:birth_date],
        cin: user[:cin],
    )
  end

end