/**
 *
 *
 * Damage Types
 *
 *
 */
import {dataTable} from "../../global/data-table";

$(document).ready(function(){

  if ($('#damage-type-data')) {
    dataTable.setOptions(true, false, [1], false, 0);
    dataTable.setTable('damage-type-data', 'search-damage-type');
  }

});