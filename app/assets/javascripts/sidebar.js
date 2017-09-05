



var ready;
ready = function() {

    /*
    *
    *
    * Bootstrap Collapse
    *
    * */
    $('.nav-item > ul').on('shown.bs.collapse', function () {
        $(this).parent().addClass('active-list')
    });
    $('.nav-item > ul').on('hidden.bs.collapse', function () {
        $(this).parent().removeClass('active-list')
    });

};

$(document).on('turbolinks:load', ready);