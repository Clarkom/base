//
//
// Expenses - Breaks
var ready;
ready = function() {

  /*
  *
  *
  *
  *
  * Filter Breaks By Year
  *
  *
  *
  *
  */

  //
  //
  // Draw Chart
  function drawChartByYear(breaks_months, breaks_data){

    // Remove Chart Canvas Before Redrawing It
    $('#BreaksExpensesStats').remove();
    $('#filter-by-year').append('<canvas id="BreaksExpensesStats"></canvas>');

    var breaks_stats_id = 'BreaksExpensesStats';
    var breaks_stats = document.getElementById(breaks_stats_id);
    var breaks = breaks_stats.getContext('2d');

    //
    // Draw Chart
    new Chart(breaks, {
      type: 'bar',
      data: {
        labels: breaks_months,
        datasets: [{
          data: breaks_data,
          label: "Arrêts",
          borderColor: "rgba(184, 97, 22, 0.7)",
          backgroundColor: "rgba(184, 97, 22, 0.3)",
          borderWidth: 2,
          fill: 'origin'
        }]
      },
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

  //
  //
  // Getting Data with Ajax and Draw the Chart
  function drawChartAjaxByYear(selected_year){
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
          drawChartByYear(chart_months, chart_data);
        }

      }
    });
  }

  //
  //
  // Draw a Chart for the Current Year
  var current_year = moment().year();
  drawChartAjaxByYear(current_year);

  //
  //
  // Get Breaks By Year
  $('#get_breaks_by_year').on('click', function(){

    var selected_year = $(this).parent().find('input[type="text"]').val();

    if (selected_year !== ''){

      drawChartAjaxByYear(selected_year);

    }

    return false;

  });


  /*
  *
  *
  *
  *
  * Filter Breaks By Year and Month
  *
  *
  *
  *
  */

  //
  //
  // Draw Chart
  function drawChartByYearAndMonth(breaks_start_and_end_date, breaks_data){

    // Remove Chart Canvas Before Redrawing It
    $('#BreaksExpensesStats_2').remove();
    $('#filter-by-year-and-month').append('<canvas id="BreaksExpensesStats_2"></canvas>');

    var breaks_stats_id = 'BreaksExpensesStats_2';
    var breaks_stats = document.getElementById(breaks_stats_id);
    var breaks = breaks_stats.getContext('2d');

    //
    // Draw Chart
    var chart_year = new Chart(breaks, {
      type: 'bar',
      data: {
        labels: breaks_start_and_end_date,
        datasets: [{
          data: breaks_data,
          label: "Arrêts",
          borderColor: "rgba(184, 97, 22, 0.7)",
          backgroundColor: "rgba(184, 97, 22, 0.3)",
          borderWidth: 2,
          fill: 'origin'
        }]
      },
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

  //
  //
  // Getting Data with Ajax and Draw the Chart
  function drawChartAjaxByYearAndMonth(selected_year, selected_month){
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
            chart_days.push(days)
            chart_data.push(data[days])
          }
          drawChartByYearAndMonth(chart_days, chart_data);
        }

      }
    });
  }

  //
  //
  // Draw a Chart for the Current Year
  var current_year = moment().year();
  var current_month = moment().month() + 1;
  drawChartAjaxByYearAndMonth(current_year, current_month);

  //
  //
  // Get Breaks By Year and Month
  $('#get_breaks_by_year_and_month').on('click', function(){

    var selected_date = $(this).parent().find('input[type="text"]').val().split("/");
    var month = selected_date[0];
    var year = selected_date[1];

    if (selected_date !== ''){
      drawChartAjaxByYearAndMonth(year, month);
    }

    return false;

  });

};
$(document).on('turbolinks:load', ready);