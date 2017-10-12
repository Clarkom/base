import { chart, BORDER_COLORS } from '../../statistics/chart'

let ready;
ready = function() {

  /**
   *
   * Constants
   *
   */
  const DATA_SETS = [
    $('#incomes-managertakes-stats').text()
  ];

  const BACKGROUND_COLORS = [
    BORDER_COLORS.manager_takes
  ];

  const LABEL = '# of Votes';

  const LABELS = [
    'Manager Take'
  ];

  chart.drawDoughnutChart('AllIncomes', DATA_SETS, LABEL, LABELS, BACKGROUND_COLORS);


};
$(document).on('turbolinks:load', ready);