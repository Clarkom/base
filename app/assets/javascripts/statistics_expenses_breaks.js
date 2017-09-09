//
//
// Expenses - Breaks
var ready;
ready = function() {

    //
    //
    // Breaks
    var breaks_stats_id = 'BreaksExpensesStats';
    var breaks_stats = document.getElementById(breaks_stats_id);
    if (breaks_stats) {
        var breaks = breaks_stats.getContext('2d');

        //
        // Draw Chart
        new Chart(breaks, {
            type: 'line',
            data: {
                labels: [
                    'Janvier',
                    'Février',
                    'Mars',
                    'Avril',
                    'Mai',
                    'Juin',
                    'Juillet',
                    'Aout',
                    'Septembre',
                    'Octobre',
                    'Novembre',
                    'Décembre',
                ],
                datasets: [{
                    data: [
                        14,
                        12,
                        12,
                        17,
                        42,
                    ],
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
    // Get Breaks By Year
    $('#get_breaks_by_year').on('click', function(){

        var selected_year = $(this).parent().find('input[type="text"]').val();

        if (selected_year !== ''){
            $.ajax({
                url: '/statistics/get_breaks_by_year',
                type: 'GET',
                dataType: 'json',
                data: { break_year: selected_year },
                success: function(data){
                    console.log(data)
                }
            });
        }

        return false;

    });

};
$(document).on('turbolinks:load', ready);