/**
 *
 *
 * Cabs - All
 *
 *
 */
import {dataTable} from "../../global/data-table";

$(document).ready(function(){

  if ($('#cab-data')) {
    dataTable.setOptions(true, false, [4], false, 0);
    dataTable.setTable('cab-data', 'search-cab');
  }

});