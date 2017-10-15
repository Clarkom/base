/**
 *
 * Constants
 *
 */

class DatePicker {

  /**
   * Calendar Settings
   * @param class_name
   */
  makeCalendar(class_name, date_type){

    if ($(class_name)){
      $(class_name).datetimepicker({
        viewMode: 'years',
        format: date_type,
        allowInputToggle: true,
        icons: {
          previous: 'fa fa-chevron-left',
          next: 'fa fa-chevron-right'
        },
        locale: 'fr'
      });
    }

  }

}

let date_picker = new DatePicker();

let ready;
ready = function() {
  date_picker.makeCalendar('.years_only', 'YYYY');
  date_picker.makeCalendar('.years_and_months', 'MM/YYYY');
  date_picker.makeCalendar('.global_date', 'DD/MM/YYYY');
};
$(document).on('turbolinks:load', ready);