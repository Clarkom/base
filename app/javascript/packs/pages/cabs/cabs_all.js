/**
 *
 *
 * Cabs - All
 *
 *
 */
import {dataTable} from "../../global/data-table";

let ready;
ready = function() {

  if ($('#cab-data')) {
    dataTable.setOptions(true, false, [4], false, 0);
    dataTable.setTable('cab-data', 'search-cab');
  }

};
$(document).on('turbolinks:load', ready);