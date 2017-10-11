/**
 *
 *
 * Owners - All
 *
 *
 */
import {dataTable} from "../../global/data-table";

$(document).ready(function(){

  if ($('#owner-data')) {
    dataTable.setOptions(true, false, [3], false, 0);
    dataTable.setTable('owner-data', 'search-owner');
  }

});