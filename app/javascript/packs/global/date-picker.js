$(document).ready(function(){

  const YEARS_AND_MONTHS_CLASS = '.years_and_months';
  const YEARS_CLASS = '.years_only';

  class DatePicker {

    /**
     * Calendar Settings
     * @param class_name
     */
    calendarSettings(class_name){

      $(class_name).datetimepicker({
        viewMode: 'years',
        format: class_name === 'years_only' ? 'YYYY' : 'MM/YYYY',
        allowInputToggle: true,
        icons: {
          previous: 'fa fa-chevron-left',
          next: 'fa fa-chevron-right'
        }
      });

    }

    /**
     * Create Calendar
     * @param date_type
     */
    createCalendar(date_type){

      //
      //
      // Years Only
      if (date_type === 'years_only') {
        this.calendarSettings(YEARS_CLASS);
      }

      //
      //
      // Years and Months
      if (date_type === 'years_and_months') {
        this.calendarSettings(YEARS_AND_MONTHS_CLASS);
      }
    }

  }

  //
  //
  //
  let date_picker = new DatePicker();
  date_picker.createCalendar('years_only');
  date_picker.createCalendar('years_and_months');


});