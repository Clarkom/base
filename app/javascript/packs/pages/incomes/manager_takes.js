/**
 *
 *
 * Manager takes
 *
 *
 */
import {dataTable} from "../../global/data-table";

$(document).ready(function(){

  if ($('#manager-take-data')) {
    dataTable.setOptions(true, true, [2], false, 0);
    dataTable.setTable('manager-take-data', 'search-manager-take');
  }

});