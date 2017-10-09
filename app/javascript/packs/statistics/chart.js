
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
   * @param ajax_query_url
   * @param ajax_query_data
   * @param bg_color
   * @param border_color
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

  /**
   *
   * @param canvas_id
   * @param dataSets
   * @param label
   * @param bgColors
   * @param labels
   */
  drawDoughnutChart(canvas_id, dataSets, label, labels, bgColors){
    let chart = document.getElementById(canvas_id);
    if (chart) {
      let ctx = chart.getContext('2d');
      let data = {
        datasets: [{
          label: label,
          data: dataSets,
          backgroundColor: bgColors
        }],
        labels: labels,
        borderWidth: 1
      };
      new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
          legend: {
            display: true,
            position: 'top'
          }
        }
      });
    }
  }

}

//
//
// Draw All Charts
let chart = new BarChart;
export { chart, CURRENT_YEAR, CURRENT_MONTH }
