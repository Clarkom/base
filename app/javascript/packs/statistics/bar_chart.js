
/**
 *
 * Constants
 *
 */

const CURRENT_YEAR = moment().year();
const CURRENT_MONTH = moment().month() + 1;

/**
 *
 *
 * Charts
 *
 *
 */
class BarChart {

  /**
   * Constructor
   */
  constructor() {
    this.option = {};
    this.charts = [];
    this.labels = [];
    this.data = [];
  }

  /**
   * Chart Options
   * @param chart_type
   */
  chartOptions(chart_type){

    if (chart_type === 'bar') {
      this.option = {
        elements: {
          line: {
            tension: 0.000001
          }
        },
        plugins: {
          filler: {
            propagate: true
          }
        }
      };
    }

  }

  /**
   * Draw Charts
   */
  drawChart(chart_id){

    let canvas_object = document.getElementById(chart_id);

    if (canvas_object) {
      this.charts[chart_id] = new Chart(canvas_object.getContext('2d'), {
        type: 'bar',
        options: this.chartOptions('bar')
      });

    }

  }

  /**
   * Draw Chart Ajax
   * @param canvas_id
   * @param label_name
   * @param filter
   * @param ajax_query_url
   * @param ajax_query_data
   */
  drawChartAjax(canvas_id, label_name, ajax_query_url, ajax_query_data, bg_color, border_color){

    let chart = this.charts[canvas_id];
    let chart_labels = [];
    let chart_data = [];

    //
    //
    // Ajax Query to Get The New Data
    $.ajax({
      url: `/statistics/${ajax_query_url}`,
      type: 'GET',
      dataType: 'json',
      data: ajax_query_data,
      success: function(data){

        if (data) {

          //
          //
          // By Year
          for (let chart_label in data){
            chart_labels.push(chart_label);
            chart_data.push(data[chart_label]);
          }

          //
          //
          // Update Chart with the New Data
          if(chart){
            chart.reset();
            chart.data = {
              labels: chart_labels,
              datasets: [{
                data: chart_data,
                label: label_name,
                borderColor: border_color,
                backgroundColor: bg_color,
                borderWidth: 2,
                fill: 'origin'
              }]
            };
            chart.update();
          }
        }

      }
    });

  }

}

//
//
// Draw All Charts
let chart = new BarChart;
export { chart, CURRENT_YEAR, CURRENT_MONTH }
