//
//
// Breaks
var ready;
ready = function() {

    //
    //
    // Chained Select
    // Show Damages If Break cause is Dégat
    var damage_list = $('#damages-list');
    var break_causes = $('#expense_break_attributes_break_cause_id');
    var damage_select = $('#expense_break_attributes_damage_id')
    if (break_causes.find('option:selected').text() === 'Dégât' || damage_list.find('select option:selected').val() != ''){
        damage_list.show()
    }
    else {
        damage_list.hide();
        damage_select.val('');
    }
    break_causes.on('change', function(){
        var break_cause = $(this).find('option:selected').text()
        if (break_cause == 'Dégât'){
            damage_list.show();
        }
        else {
            damage_list.hide();
            damage_select.val('');
        }
    })

    //
    //
    //
    var table = $('#break-data').DataTable({
        "searching": true,
        "paging": false,
        "columnDefs": [ {
            "targets": [5],
            "orderable": false
        } ],
        "order": [[ 1, "desc" ]],
        "dom": 't'
    });

    //
    // Search Input
    $('#search-break').on( 'keyup', function () {
        table.search( this.value ).draw();
    } );

}
$(document).on('turbolinks:load', ready);