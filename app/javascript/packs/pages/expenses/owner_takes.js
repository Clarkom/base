/**
 *
 *
 * Owner takes
 *
 *
 */
import {dataTable} from "../../global/data-table";

$(document).ready(function(){

  if ($('#owner-take-data')) {
    dataTable.setOptions(true, false, [3], false, 1);
    dataTable.setTable('owner-take-data', 'search-owner-take');
  }

});