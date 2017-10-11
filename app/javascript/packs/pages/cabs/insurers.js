/**
 *
 *
 * Insurers
 *
 *
 */
import {dataTable} from "../../global/data-table";

$(document).ready(function(){

  if ($('#insurer-data')) {
    dataTable.setOptions(true, false, [4], false, 0);
    dataTable.setTable('insurer-data', 'search-insurer');
  }

});