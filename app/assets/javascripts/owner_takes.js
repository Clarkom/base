//
//
// Breaks
var ready;
ready = function() {

    //
    //
    //
    var table = $('#owner-take-data').DataTable({
        "searching": true,
        "columnDefs": [ {
            "targets": [3],
            "orderable": false
        } ],
        "order": [[ 1, "desc" ]],
        "dom": 't'
    });

    //
    // Search Input
    $('#search-owner-take').on( 'keyup', function () {
        table.search( this.value ).draw();
    } );

}
$(document).on('turbolinks:load', ready);