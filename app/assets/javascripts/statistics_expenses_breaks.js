//
//
// Expenses - Breaks
var ready;
ready = function() {

  //
  //
  // Add Message for No Data

  //
  //
  // Global Variables
  var canvas_ids = ['BreaksExpensesStats', 'BreaksExpensesStats_2'];
  var charts = [];
  var current_year = moment().year();
  var current_month = moment().month() + 1;

  //
  //
  // Functions
  function drawChart(chart_ids){

    var options = {
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

    for (var chart_id in chart_ids) {

        var breaks_stats = document.getElementById(chart_ids[chart_id]);

        if (breaks_stats) {
          var breaks = breaks_stats.getContext('2d');

          charts[chart_id] = new Chart(breaks, {
            type: 'bar',
            options: options
          });

        }
      }

  }
  function updateChart(option, labels, data){

    if (charts[0] && option === 'by_year'){
      charts[0].reset();
      charts[0].data = {
        labels: labels,
        datasets: [{
          data: data,
          label: "Arrêts",
          borderColor: "rgba(184, 97, 22, 0.7)",
          backgroundColor: "rgba(184, 97, 22, 0.3)",
          borderWidth: 2,
          fill: 'origin'
        }]
      };
      charts[0].update();
    }

    if (charts[1] && option === 'by_year_and_month'){
      console.log(labels)
      charts[1].data = {
        labels: labels,
        datasets: [{
          data: data,
          label: "Arrêts",
          borderColor: "rgba(184, 97, 22, 0.7)",
          backgroundColor: "rgba(184, 97, 22, 0.3)",
          borderWidth: 2,
          fill: 'origin'
        }]
      };
      charts[1].update();
    }

  }
  function drawChartAjax(option, selected_year, selected_month){

    if (option === 'by_year'){
      console.log('by_year');
      $.ajax({
        url: '/statistics/get_breaks_by_year',
        type: 'GET',
        dataType: 'json',
        data: { break_year: selected_year },
        success: function(data){

          var chart_months = [];
          var chart_data = [];

          if (data) {
            for (var months in data){
              chart_months.push(months)
              chart_data.push(data[months])
            }
            updateChart('by_year', chart_months, chart_data)
          }

        }
      });
    }
    else if (option === 'by_year_and_month') {
      console.log('by_year_and_month');
      $.ajax({
        url: '/statistics/get_breaks_by_year_and_month',
        type: 'GET',
        dataType: 'json',
        data: {
          break_year: selected_year,
          break_month: selected_month
        },
        success: function(data){
          var chart_days = [];
          var chart_data = [];

          if (data) {
            for (var days in data){
              chart_days.push(days);
              chart_data.push(data[days]);
            }
            updateChart('by_year_and_month', chart_days, chart_data);
          }

        }
      });
    }

  }

  //
  //
  // Draw charts
  drawChart(canvas_ids);

  //
  //
  // Draw Charts With the Current Date
  drawChartAjax('by_year', current_year);
  drawChartAjax('by_year_and_month', current_year, current_month);

  //
  //
  // Clicks
  $('#get_breaks_by_year').on('click', function(){

    var selected_year = $(this).parent().find('input[type="text"]').val();

    if (selected_year !== ''){
      drawChartAjax('by_year', selected_year);
    }

    return false;

  });
  $('#get_breaks_by_year_and_month').on('click', function(){

    var selected_date = $(this).parent().find('input[type="text"]').val().split("/");
    var month = selected_date[0];
    var year = selected_date[1];

    if (selected_date !== '' && month){
      drawChartAjax('by_year_and_month', year, month);
    }

    return false;

  });

};
$(document).on('turbolinks:load', ready);