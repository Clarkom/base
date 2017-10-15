/**
 *
 *
 * Data Table Class
 *
 *
 */
class DataTable {

  constructor() {
    this.options = {};
    this.language_url = '';

  }
  /**
   * Set Data Table Language
   * @param lang
   */
  setLanguage(lang) {
    if (lang === 'fr') {
      this.language_url = "//cdn.datatables.net/plug-ins/1.10.16/i18n/French.json";
    }
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
      "pagingType": "full_numbers",
      "columnDefs": [ {
        "targets": targets ? targets : [],
        "orderable": orderable
      } ],
      "language": {
        "url": ''
      },
      "order": [[ order, "desc" ]]
    };

    if (I18n.currentLocale() === 'fr') {
      this.setLanguage('fr');
      this.options.language.url = this.language_url;
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