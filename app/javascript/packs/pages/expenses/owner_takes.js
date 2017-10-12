/**
 *
 *
 * Owner takes
 *
 *
 */
import {dataTable} from "../../global/data-table";

let ready;
ready = function() {

  if ($('#owner-take-data')) {
    dataTable.setOptions(true, true, [3], false, 1);
    dataTable.setTable('owner-take-data', 'search-owner-take');
  }

};
$(document).on('turbolinks:load', ready);