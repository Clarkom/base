/**
 *
 *
 * Insurers
 *
 *
 */
import {dataTable} from "../../global/data-table";

let ready;
ready = function() {

  if ($('#insurer-data')) {
    dataTable.setOptions(true, false, [4], false, 0);
    dataTable.setTable('insurer-data', 'search-insurer');
  }

};
$(document).on('turbolinks:load', ready);