
//
//
// Using $(document).ready() with turbo-links
// Damages

var ready;
ready = function() {

    //
    //
    // Show Accident If damage type is Accident
    var driver_list = $('#drivers-list')
    var damage_types = $('#expense_damage_attributes_damage_type_id')

    if (damage_types.find('option:selected').text() == 'Accident' || driver_list.find('select option:selected').val() != ''){
        driver_list.show()
    }
    else {
        driver_list.hide();
    }

    damage_types.on('change', function(){
        var damage_type = $(this).find('option:selected').text()
        if (damage_type == "Accident"){
            driver_list.show();
        }
        else {
            driver_list.hide();
        }
    })

}
$(document).on('turbolinks:load', ready);