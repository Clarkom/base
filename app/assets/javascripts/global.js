
var ready;
ready = function() {

    /*
    *
    *
    * Date Time Picker
    *
    *
    * */
    $('#breaks-years-and-months-date, #damages-years-and-months-date, #owner_takes-years-and-months-date').datetimepicker({
        viewMode: 'years',
        format: 'MM/YYYY',
        allowInputToggle: true,
        icons: {
            previous: 'fa fa-chevron-left',
            next: 'fa fa-chevron-right'
        }
    });
    $('#breaks-years-date, #damages-years-date, #owner_takes-years-date').datetimepicker({
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