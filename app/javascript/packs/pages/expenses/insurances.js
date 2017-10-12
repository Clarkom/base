/**
 *
 *
 * Insurances
 *
 *
 */
import {dataTable} from "../../global/data-table";

$(document).ready(function(){

  if ($('#insurance-data')) {
    dataTable.setOptions(true, true, [4], false, 1);
    dataTable.setTable('insurance-data', 'search-insurance');
  }

});