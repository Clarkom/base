/**
 *
 *
 * Damages
 *
 *
 */
import {dataTable} from "../../global/data-table";

let ready;
ready = function() {

  if ($('#damage-data')) {
    dataTable.setOptions(true, true, [6], false, 2);
    dataTable.setTable('damage-data', 'search-damage');
  }

};
$(document).on('turbolinks:load', ready);