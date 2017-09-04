#
#
# Break Causes
break_causes = [
    [
      {
        :name => 'Jour Férié',
      }
    ],
    [
      {
        :name => 'Accident',
      }
    ]

]

break_causes.count.times do |n|

  break_causes[n].each do |break_cause|
    BreakCause.create!(
        name: break_cause[:name],
    )
  end

end