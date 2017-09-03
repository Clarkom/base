
//
//
//
// Damages
var ready;
ready = function() {

    //
    //
    // Show Accident If damage type is Accident
    var driver_list = $('#drivers-list')
    if (driver_list.find('select')){
        driver_list.show()
    }
    else {
        driver_list.hide();
    }
    $('#expense_damage_attributes_damage_type_id').on('change', function(){
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