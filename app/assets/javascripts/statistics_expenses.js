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

    //
    //
    // Breaks
    var breaks_stats = document.getElementById("BreaksExpensesStats");
    if (breaks_stats) {
        var breaks = breaks_stats.getContext('2d');
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
    }

    //
    //
    $('#insurances_years').on('change', function(){

        var selected_option = $(this).find('option:selected').val();

        $.ajax({
            url: '/statistics/get_insurance_by_year',
            type: 'GET',
            dataType: 'json',
            data: { insurance_year: selected_option },
            success: function(data){
                console.log(data)
            }
        });

    })

};
$(document).on('turbolinks:load', ready);