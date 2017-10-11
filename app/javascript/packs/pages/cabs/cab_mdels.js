/**
 *
 *
 * Cabs Models
 *
 *
 */
import {dataTable} from "../../global/data-table";

$(document).ready(function(){

  if ($('#cab-model-data')) {
    dataTable.setOptions(true, false, [7], false, 2);
    dataTable.setTable('cab-model-data', 'search-cab-model');
  }

});