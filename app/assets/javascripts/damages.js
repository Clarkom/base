
//
//
// Damages
var ready;
ready = function() {

    //
    //
    // Show Accident If damage type is Accident
    var driver_list = $('#drivers-list');
    var damage_types = $('#expense_damage_attributes_damage_type_id');
    var driver_select = $('#expense_damage_attributes_driver_id')
    if (damage_types.find('option:selected').text() === 'Accident' || driver_list.find('select option:selected').val() != ''){
        driver_list.show()
    }
    else {
        driver_list.hide();
        driver_select.val('')
    }
    damage_types.on('change', function(){
        var damage_type = $(this).find('option:selected').text()
        if (damage_type === 'Accident'){
            driver_list.show();
        }
        else {
            driver_list.hide();
            driver_select.val('');
        }
    })

    /*
    *
    * DataTables
    *
    * */
    var table = $('#damage-data').DataTable({
        "searching": true,
        "paginate": false,
        "columnDefs": [ {
            "targets": [6],
            "orderable": false
        } ],
        "order": [[ 2, "desc" ]],
        "dom": 't'
    });

    //
    // Search Input
    $('#search-damage').on( 'keyup', function () {
        table.search( this.value ).draw();
    } );

};
$(document).on('turbolinks:load', ready);