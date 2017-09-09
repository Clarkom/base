
//
//
// Expenses - Insurances
var ready;
ready = function() {

    //
    //
    // Insurances
    var insurances_stats_id = 'InsurancesExpensesStats';
    var insurances_stats = document.getElementById(insurances_stats_id);
    if (insurances_stats) {
        var insurances = insurances_stats.getContext('2d');

        //
        // Get Data and Labels
        var insurances_stats_dates = [];
        var insurances_stats_amouts = [];
        $('#'+insurances_stats_id+' ul > li:first-child').each(function(){
            insurances_stats_dates.push($(this).text())
        });
        $('#'+insurances_stats_id+' ul > li:last-child').each(function(){
            insurances_stats_amouts.push($(this).text())
        });

        //
        // Draw Chart
        new Chart(insurances, {
            type: 'line',
            data: {
                labels: insurances_stats_dates,
                datasets: [{
                    data: insurances_stats_amouts,
                    label: "Assurances",
                    borderColor: "rgba(13, 95, 107, 0.7)",
                    backgroundColor: "rgba(13, 95, 107, 0.3)",
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


};
$(document).on('turbolinks:load', ready );