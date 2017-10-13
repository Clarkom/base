/**
 *
 *
 * Insurances
 *
 *
 */
import {dataTable} from "../../global/data-table";

let ready;
ready = function() {

  if ($('#insurance-data')) {
    dataTable.setOptions(true, true, [4], false, 2);
    dataTable.setTable('insurance-data', 'search-insurance');
  }

};
$(document).on('turbolinks:load', ready);