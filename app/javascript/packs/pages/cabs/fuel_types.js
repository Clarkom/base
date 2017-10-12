/**
 *
 *
 * Fuel Types
 *
 *
 */
import {dataTable} from "../../global/data-table";

let ready;
ready = function() {

  if ($('#fuel-type-data')) {
    dataTable.setOptions(true, false, [1], false, 0);
    dataTable.setTable('fuel-type-data', 'search-fuel-type');
  }

};
$(document).on('turbolinks:load', ready);