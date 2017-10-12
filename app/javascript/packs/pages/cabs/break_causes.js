/**
 *
 *
 * Break Causes
 *
 *
 */
import {dataTable} from "../../global/data-table";

$(document).ready(function(){

  if ($('#break-cause-data')) {
    dataTable.setOptions(true, false, [1], false, 0);
    dataTable.setTable('break-cause-data', 'search-break-cause');
  }

});