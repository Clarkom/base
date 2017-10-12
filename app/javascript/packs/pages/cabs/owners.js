/**
 *
 *
 * Owners
 *
 *
 */
import {dataTable} from "../../global/data-table";

let ready;
ready = function() {

  if ($('#owner-data')) {
    dataTable.setOptions(true, false, [3], false, 0);
    dataTable.setTable('owner-data', 'search-owner');
  }

};
$(document).on('turbolinks:load', ready);