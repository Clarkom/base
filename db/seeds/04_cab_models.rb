#
#
# Cab Models
cab_models = [
    [
      {
        :name => 'Logan',
        :description => 'Nice Car',
        :manufacture_year => '10-04-2013',
        :fuel_type_id => 2,
        :sheet_metal => 'C.1',
        :power_hp => 1,
        :number_places => 4
      }
    ]

]

cab_models.count.times do |n|

  cab_models[n].each do |cab_model|
    CabModel.create!(
        name: cab_model[:name],
        description: cab_model[:description],
        manufacture_year: cab_model[:manufacture_year],
        fuel_type_id: cab_model[:fuel_type_id],
        sheet_metal: cab_model[:sheet_metal],
        power_hp: cab_model[:power_hp],
        number_places: cab_model[:number_places],
    )
  end

end