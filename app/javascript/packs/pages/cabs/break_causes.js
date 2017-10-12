/**
 *
 *
 * Break Causes
 *
 *
 */
import {dataTable} from "../../global/data-table";

let ready;
ready = function() {

  if ($('#break-cause-data')) {
    dataTable.setOptions(true, false, [1], false, 0);
    dataTable.setTable('break-cause-data', 'search-break-cause');
  }

};
$(document).on('turbolinks:load', ready);