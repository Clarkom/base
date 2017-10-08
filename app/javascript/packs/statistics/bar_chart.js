$(document).ready(function(){

  /**
   * Constants
   * @type {[string,string,string,string,string,string,string]}
   */
  const CANVAS_IDS = [
    'BreaksExpenses_years',
    'DamagesExpenses_years',
    'OwnerTakesExpenses_years',
    'BreaksExpenses_months',
    'DamagesExpenses_months',
    'OwnerTakesExpenses_months',
    'InsurancesExpenses',
  ];

  const BREAKS_BG_COLOR = 'rgba(184, 97, 22, 0.3)';
  const BREAKS_BORDER_COLOR = 'rgba(184, 97, 22, 0.7)';
  const DAMAGES_BG_COLOR = 'rgba(107, 41, 13, 0.3)';
  const DAMAGES_BORDER_COLOR = 'rgba(107, 41, 13, 0.7)';
  const OWNER_TAKES_BG_COLOR = 'rgba(71, 71, 71, 0.3)';
  const OWNER_TAKES_BORDER_COLOR = 'rgba(71, 71, 71, 0.7)';

  //
  //
  // Current Date
  let current_year = moment().year();
  let current_month = moment().month() + 1;

  /*
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
    drawAllCharts(){

      for (let chart_id in CANVAS_IDS) {

        let canvas_id = CANVAS_IDS[chart_id];
        let canvas_object = document.getElementById(CANVAS_IDS[chart_id]);

        if (canvas_object) {
          this.charts[canvas_id] = new Chart(canvas_object.getContext('2d'), {
            type: 'bar',
            options: this.chartOptions('bar')
          });

        }
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
      });

    }

  }

  //
  //
  // Draw All Charts
  let chart = new BarChart;
  chart.drawAllCharts();

  //
  //
  //
  // Draw Breaks Chart
  let breaks_years_data = { break_year: current_year };
  let breaks_months_data = { break_year: current_year, break_month: current_month };
  chart.drawChartAjax(
    'BreaksExpenses_years',
    'Arrêts',
    'get_breaks_by_year',
    breaks_years_data,
    BREAKS_BG_COLOR,
    BREAKS_BORDER_COLOR
  );
  chart.drawChartAjax(
    'BreaksExpenses_months',
    'Arrêts',
    'get_breaks_by_year_and_month',
    breaks_months_data,
    BREAKS_BG_COLOR,
    BREAKS_BORDER_COLOR
  );

  //
  //
  //
  // Draw Damages Chart
  let damages_years_data = { damage_year: current_year };
  let damages_months_data = { damage_year: current_year, damage_month: current_month };
  chart.drawChartAjax(
    'DamagesExpenses_years',
    'Dégats',
    'get_damages_by_year',
    damages_years_data,
    DAMAGES_BG_COLOR,
    DAMAGES_BORDER_COLOR
  );
  chart.drawChartAjax(
    'DamagesExpenses_months',
    'Dégats',
    'get_damages_by_year_and_month',
    damages_months_data,
    DAMAGES_BG_COLOR,
    DAMAGES_BORDER_COLOR
  );

  //
  //
  //
  // Draw Owner Takes Chart
  let ownertakes_years_data = { owner_take_year: current_year };
  let owner_takes_months_data = { owner_take_year: current_year, owner_take_month: current_month };
  chart.drawChartAjax(
    'OwnerTakesExpenses_years',
    'Recette',
    'get_owner_takes_by_year',
    ownertakes_years_data,
    OWNER_TAKES_BG_COLOR,
    OWNER_TAKES_BORDER_COLOR
  );
  chart.drawChartAjax(
    'OwnerTakesExpenses_months',
    'Recette',
    'get_owner_takes_by_year_and_month',
    owner_takes_months_data,
    OWNER_TAKES_BG_COLOR,
    OWNER_TAKES_BORDER_COLOR
  );

});

