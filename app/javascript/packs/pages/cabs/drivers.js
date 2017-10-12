/**
 *
 *
 * Drivers
 *
 *
 */
import {dataTable} from "../../global/data-table";

let ready;
ready = function() {

  if ($('#driver-data')) {
    dataTable.setOptions(true, false, [5], false, 0);
    dataTable.setTable('driver-data', 'search-driver');
  }

};
$(document).on('turbolinks:load', ready);