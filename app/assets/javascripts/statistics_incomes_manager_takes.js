//
//
// Incomes - ManagerTakes
var ready;
ready = function() {

  /*
  *
  *
  *
  *
  * Filter ManagerTakes By Year
  *
  *
  *
  *
  */

  //
  //
  // Draw Chart
  function drawChartByYear(manager_takes_months, manager_takes_data){

    var manager_takes_stats_id = 'ManagerTakesIncomesStats';
    var manager_takes_stats = document.getElementById(manager_takes_stats_id);

    if (manager_takes_stats){

      var manager_takes = manager_takes_stats.getContext('2d');

      //
      // Draw Chart
      new Chart(manager_takes, {
        type: 'bar',
        data: {
          labels: manager_takes_months,
          datasets: [{
            data: manager_takes_data,
            label: "Dégats",
            borderColor: "rgba(71, 71, 71, 0.7)",
            backgroundColor: "rgba(71, 71, 71, 0.3)",
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

  }

  //
  //
  // Getting Data with Ajax and Draw the Chart
  function drawChartAjaxByYear(selected_year){
    $.ajax({
      url: '/statistics/get_manager_takes_by_year',
      type: 'GET',
      dataType: 'json',
      data: { manager_take_year: selected_year },
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
  // Get ManagerTakes By Year
  $('#get_manager_takes_by_year').on('click', function(){

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
  * Filter ManagerTakes By Year and Month
  *
  *
  *
  *
  */

  //
  //
  // Draw Chart
  function drawChartByYearAndMonth(manager_takes_date, manager_takes_data){

    var manager_takes_stats_id = 'ManagerTakesIncomesStats_2';
    var manager_takes_stats = document.getElementById(manager_takes_stats_id);

    if (manager_takes_stats){

      var manager_takes = manager_takes_stats.getContext('2d');

      //
      // Draw Chart
      new Chart(manager_takes, {
        type: 'bar',
        data: {
          labels: manager_takes_date,
          datasets: [{
            data: manager_takes_data,
            label: "Arrêts",
            borderColor: "rgba(71, 71, 71, 0.7)",
            backgroundColor: "rgba(71, 71, 71, 0.3)",
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

  }

  //
  //
  // Getting Data with Ajax and Draw the Chart
  function drawChartAjaxByYearAndMonth(selected_year, selected_month){
    $.ajax({
      url: '/statistics/get_manager_takes_by_year_and_month',
      type: 'GET',
      dataType: 'json',
      data: {
        manager_take_year: selected_year,
        manager_take_month: selected_month
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
  // Get ManagerTakes By Year and Month
  $('#get_manager_takes_by_year_and_month').on('click', function(){

    var selected_date = $(this).parent().find('input[type="text"]').val().split("/");
    var month = parseInt(selected_date[0], 10); // remove leading zero
    var year = selected_date[1];


    if (selected_date !== ''){
      drawChartAjaxByYearAndMonth(year, month);
    }

    return false;

  });

};
$(document).on('turbolinks:load', ready);