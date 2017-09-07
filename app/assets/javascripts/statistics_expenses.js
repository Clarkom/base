//
//
// Statistics Expenses
var ready;
ready = function() {

    //
    //
    // Expenses
    var ctx = document.getElementById("allExpensesStats").getContext('2d');
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

    //
    //
    // Breaks
    var breaks = document.getElementById("BreaksExpensesStats").getContext('2d');
    new Chart(breaks, {
        type: 'line',
        data: {
            labels: [
                'Janvier',
                'Fevrier',
                'Mars',
                'Avril',
                'Mai',
                'Juin',
                'Juillet',
                'Aout',
                'Septembre',
                'Novembre',
                'Octobre',
                'Decembre'
            ],
            datasets: [{
                data: [
                    86,
                    114,
                    106,
                    333,
                    107,
                    68,
                    133,
                    22,
                    52,
                    456,
                    124,
                    44
                ],
                label: "Breaks",
                borderColor: "rgba(184, 97, 22, 1)",
                backgroundColor: "rgba(184, 97, 22, 0.3)",
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


};
$(document).on('turbolinks:load', ready);