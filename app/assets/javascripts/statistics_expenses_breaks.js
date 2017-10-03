//
//
// Expenses - Breaks
var ready;
ready = function() {

  //
  //
  // Draw Chart
  function drawChart(breaks_months, breaks_data){
    var breaks_stats_id = 'BreaksExpensesStats';
    var breaks_stats = document.getElementById(breaks_stats_id);
    var breaks = breaks_stats.getContext('2d');

    //
    // Draw Chart
    new Chart(breaks, {
      type: 'line',
      data: {
        labels: breaks_months,
        datasets: [{
          data: breaks_data,
          label: "Assurances",
          borderColor: "rgba(13, 95, 107, 0.7)",
          backgroundColor: "rgba(13, 95, 107, 0.3)",
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
  function drawChartAjax(selected_year){
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
          drawChart(chart_months, chart_data);
        }

      }
    });
  }

  //
  //
  // Draw a Chart for the Current Year
  var current_year = moment().year();
  drawChartAjax(current_year);

  //
  //
  // Get Breaks By Year
  $('#get_breaks_by_year').on('click', function(){

    var selected_year = $(this).parent().find('input[type="text"]').val();

    if (selected_year !== ''){

      drawChartAjax(selected_year);

    }

    return false;

  });

};
$(document).on('turbolinks:load', ready);