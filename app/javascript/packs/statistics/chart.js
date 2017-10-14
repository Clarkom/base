
/**
 *
 * Constants
 *
 */
const BG_COLORS = {
  'insurance': 'rgba(13, 95, 107, 0.3)',
  'breaks': 'rgba(184, 97, 22, 0.3)',
  'damages': 'rgba(107, 41, 13, 0.3)',
  'owner_takes': 'rgba(71, 71, 71, 0.3)',
  'manager_takes': 'rgba(13, 95, 107, 0.3)'
};

const BORDER_COLORS = {
  'insurance': 'rgba(13, 95, 107, 0.7)',
  'breaks': 'rgba(184, 97, 22, 0.7)',
  'damages': 'rgba(107, 41, 13, 0.7)',
  'owner_takes': 'rgba(71, 71, 71, 0.7)',
  'manager_takes': 'rgba(13, 95, 107, 0.7)'
};

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

    if (chart) {

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

          // If data is empty
          if (!Object.keys(data).length){

          }

        }
      });

    }

  }

  /**
   * Get Data By Click
   * @param type
   * @param chart_id
   * @param button_id
   * @param label_name
   * @param ajax_query_url
   * @param bgColor
   * @param borderColor
   */
  getDataByClick(page, type, chart_id, button_id, label_name, ajax_query_url, bgColor, borderColor){

    $(`#${button_id}`).on('click', function(){

      //
      //
      // By Year
      if (type === 'by_year'){
        let selected_year = $(this).parent().find('input[type="text"]').val();

        if (selected_year !== ''){
          let ajax_query_data = { [`${page}_year`]: selected_year };
          chart.drawChartAjax(
            chart_id,
            label_name,
            ajax_query_url,
            ajax_query_data,
            bgColor,
            borderColor
          );
        }
      }

      //
      //
      // By Year and Month
      if (type === 'by_year_and_month'){

        let selected_date = $(this).parent().find('input[type="text"]').val().split("/");
        let month = selected_date[0];
        let year = selected_date[1];

        if (selected_date !== ''){
          let ajax_query_data = {
            [`${page}_year`]: year,
            [`${page}_month`]: month
          };
          chart.drawChartAjax(
            chart_id,
            label_name,
            ajax_query_url,
            ajax_query_data,
            bgColor,
            borderColor
          );
        }
      }

      return false;

    });
  }

  /**
   * Draw Doughnut Chart
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

  /**
   * Draw Line Chart
   * @param canvas_id
   * @param label
   * @param bgColor
   * @param borderColor
   */
  drawLineChart(canvas_id, label, bgColor, borderColor){
    let chart = document.getElementById(canvas_id);
    if (chart) {
      let ctx = chart.getContext('2d');

      //
      // Get Data and Labels
      let dataSets = [];
      let data = [];
      $(`#${canvas_id} ul > li:first-child`).each(function(){
        dataSets.push($(this).text())
      });
      $(`#${canvas_id} ul > li:last-child`).each(function(){
        data.push($(this).text())
      });

      //
      // Draw Chart
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: dataSets,
          datasets: [{
            data: data,
            label: label,
            borderColor: borderColor,
            backgroundColor: bgColor,
            fill: 'origin'
          }
          ]},
        options: {
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
        }
      });
    }
  }

}

//
//
// Draw All Charts
let chart = new BarChart;
export { chart, BG_COLORS, BORDER_COLORS, CURRENT_YEAR, CURRENT_MONTH }
