/**
 *
 *
 * Data Table Class
 *
 *
 */
class DataTable {

  constructor(){
    this.options = {}
  }

  /**
   * Set Data Table Options
   * @param searching
   * @param paginate
   * @param targets
   * @param orderable
   * @param order
   */
  setOptions(searching, paginate, targets, orderable, order){
    this.options = {
      "searching": searching,
      "paginate": paginate,
      "columnDefs": [ {
        "targets": targets ? targets : [],
        "orderable": orderable
      } ],
      "order": [[ order, "desc" ]],
      "dom": 't'
    }
  }

  /**
   * Set Table
   * @param table_id
   * @param search_id
   */
  setTable(table_id, search_id) {
    let table = $(`#${table_id}`).DataTable(this.options);

    if (this.options.searching){
      $(`#${search_id}`).on('keyup', function () {
        table.search(this.value).draw();
      });
    }

  }


}

let dataTable = new DataTable();
export { dataTable };