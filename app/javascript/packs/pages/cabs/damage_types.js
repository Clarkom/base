/**
 *
 *
 * Damage Types
 *
 *
 */
import {dataTable} from "../../global/data-table";

let ready;
ready = function() {

  if ($('#damage-type-data')) {
    dataTable.setOptions(true, false, [1], false, 0);
    dataTable.setTable('damage-type-data', 'search-damage-type');
  }

};
$(document).on('turbolinks:load', ready);