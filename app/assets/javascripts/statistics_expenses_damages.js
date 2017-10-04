//
//
// Expenses - Damages
var ready;
ready = function() {

  /*
  *
  *
  *
  *
  * Filter Damages By Year
  *
  *
  *
  *
  */

  //
  //
  // Draw Chart
  function drawChartByYear(damages_months, damages_data){

    // Remove Chart Canvas Before Redrawing It
    $('#DamagesExpensesStats').remove();
    $('#damage-stat-year').append('<canvas id="DamagesExpensesStats"></canvas>');

    var damages_stats_id = 'DamagesExpensesStats';
    var damages_stats = document.getElementById(damages_stats_id);
    var damages = damages_stats.getContext('2d');

    //
    // Draw Chart
    new Chart(damages, {
      type: 'bar',
      data: {
        labels: damages_months,
        datasets: [{
          data: damages_data,
          label: "Dégats",
          borderColor: "rgba(107, 41, 13, 0.7)",
          backgroundColor: "rgba(107, 41, 13, 0.3)",
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
      url: '/statistics/get_damages_by_year',
      type: 'GET',
      dataType: 'json',
      data: { damage_year: selected_year },
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
  // Get Damages By Year
  $('#get_damages_by_year').on('click', function(){

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
  * Filter Damages By Year and Month
  *
  *
  *
  *
  */

  //
  //
  // Draw Chart
  function drawChartByYearAndMonth(damages_start_and_end_date, damages_data){

    // Remove Chart Canvas Before Redrawing It
    $('#DamagesExpensesStats_2').remove();
    $('#damage-stat-year-and-month').append('<canvas id="DamagesExpensesStats_2"></canvas>');

    var damages_stats_id = 'DamagesExpensesStats_2';
    var damages_stats = document.getElementById(damages_stats_id);
    var damages = damages_stats.getContext('2d');

    //
    // Draw Chart
    new Chart(damages, {
      type: 'bar',
      data: {
        labels: damages_start_and_end_date,
        datasets: [{
          data: damages_data,
          label: "Arrêts",
          borderColor: "rgba(107, 41, 13, 0.7)",
          backgroundColor: "rgba(107, 41, 13, 0.3)",
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
      url: '/statistics/get_damages_by_year_and_month',
      type: 'GET',
      dataType: 'json',
      data: {
        damage_year: selected_year,
        damage_month: selected_month
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
  // Get Damages By Year and Month
  $('#get_damages_by_year_and_month').on('click', function(){

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