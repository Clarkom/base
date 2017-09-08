

var ready;
ready = function() {

    /*
    *
    * DataTables
    *
    * */
    var insurance_date =  $('#insurance-data');

    if (insurance_date.length > 0) {
        var table = $('#insurance-data').DataTable({
            "searching": true,
            "columnDefs": [ {
                "targets": [4],
                "orderable": false
            } ],
            "order": [[ 1, "desc" ]],
            "dom": 't'
        });
        //
        // Search Input
        $('#search-insurance').on( 'keyup', function () {
            table.search( this.value ).draw();
        } );

    }
};

$(document).on('turbolinks:load', ready);