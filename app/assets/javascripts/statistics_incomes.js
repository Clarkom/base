//
//
// Statistics Incomes
var ready;
ready = function() {

    //
    //
    // Incomes All
    var incomes_stats = document.getElementById("allIncomesStats");
    if (incomes_stats) {
        var ctx = incomes_stats.getContext('2d');
        var data = {
            datasets: [{
                label: '# of Votes',
                data: [
                    $('#incomes-managertakes-stats').text()
                ],
                backgroundColor: [
                    'rgba(13, 95, 107, 0.7)'
                ]
            }],

            labels: [
                'Manager Take'
            ],

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

};
$(document).on('turbolinks:load', ready );