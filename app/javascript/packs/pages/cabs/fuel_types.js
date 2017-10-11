/**
 *
 *
 * Fuel Types
 *
 *
 */
import {dataTable} from "../../global/data-table";

$(document).ready(function(){

  if ($('#fuel-type-data')) {
    dataTable.setOptions(true, false, [1], false, 0);
    dataTable.setTable('fuel-type-data', 'search-fuel-type');
  }

});