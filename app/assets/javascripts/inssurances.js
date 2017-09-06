

var ready;
ready = function() {


    /*
    *
    * DataTables
    *
    * */
    var table = $('#insurance-data').DataTable({
        "searching": true,
        "columnDefs": [ {
            "targets": [3, 6],
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

};

$(document).on('turbolinks:load', ready);