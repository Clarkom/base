//
//
// Statistics Expenses
var ready;
ready = function() {

    //
    //
    // Expenses All
    var expenses_stats = document.getElementById("allExpensesStats");
    if (expenses_stats) {
        var ctx = expenses_stats.getContext('2d');
        var data = {
            datasets: [{
                label: '# of Votes',
                data: [
                    $('#expenses-assurances-stats').text(),
                    $('#expenses-breaks-stats').text(),
                    $('#expenses-damages-stats').text(),
                    $('#expenses-ownertakes-stats').text()
                ],
                backgroundColor: [
                    'rgba(13, 95, 107, 0.7)',
                    'rgba(184, 97, 22, 0.7)',
                    'rgba(107, 41, 13, 0.7)',
                    'rgba(71, 71, 71, 0.7)'
                ]
            }],

            labels: [
                'Assurances',
                'Arrêts',
                'Dégâts',
                'Recettes'
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