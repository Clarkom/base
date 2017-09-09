
var ready;
ready = function() {

    /*
    *
    *
    * Date Time Picker
    *
    *
    * */
    $('#years-and-months-only').datetimepicker({
        viewMode: 'years',
        format: 'MM/YYYY',
        allowInputToggle: true,
        icons: {
            previous: 'fa fa-chevron-left',
            next: 'fa fa-chevron-right'
        }
    });
    $('#years-only').datetimepicker({
        viewMode: 'years',
        format: 'YYYY',
        allowInputToggle: true,
        icons: {
            previous: 'fa fa-chevron-left',
            next: 'fa fa-chevron-right'
        }
    });

};
$(document).on('turbolinks:load', ready);