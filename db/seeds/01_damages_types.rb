#
#
# Damage Types
damage_types = [
    [
        {
            :name => 'Plaquette frein'
        }
    ],
    [
        {
            :name => 'Amortisseur'
        }
    ],
    [
        {
            :name => 'Kit de Chaîne de distribution'
        }
    ],
    [
        {
            :name => 'Démarreur'
        }
    ],
    [
        {
            :name => 'Alternateur'
        }
    ],
    [
        {
            :name => 'Courroie d’alternateur'
        }
    ],
    [
        {
            :name => 'Culasse'
        }
    ],
    [
        {
            :name => 'Huile moteur'
        }
    ],
    [
        {
            :name => 'Filtre à air'
        }
    ],
    [
        {
            :name => 'Filtre Gasoil'
        }
    ],
    [
        {
            :name => 'Filtre à huile'
        }
    ],
    [
        {
            :name => 'Parallélisme'
        }
    ],
    [
        {
            :name => 'Batterie'
        }
    ],
    [
        {
            :name => 'Injecteurs'
        }
    ],
    [
        {
            :name => 'Dégât'
        }
    ]

]

damage_types.count.times do |n|

  damage_types[n].each do |damage_type|
    DamageType.create!(
        name: damage_type[:name]
    )
  end

end