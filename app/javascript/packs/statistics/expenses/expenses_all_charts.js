import { chart, BORDER_COLORS } from '../../statistics/chart'

let ready;
ready = function() {

  /**
   *
   * Constants
   *
   */
  const DATA_SETS = [
    $('#expenses-insurances-stats').text(),
    $('#expenses-breaks-stats').text(),
    $('#expenses-damages-stats').text(),
    $('#expenses-ownertakes-stats').text()
  ];

  const BACKGROUND_COLORS = [
    BORDER_COLORS.insurance,
    BORDER_COLORS.breaks,
    BORDER_COLORS.damages,
    BORDER_COLORS.owner_takes
  ];

  const LABEL = '# of Votes';

  const LABELS = [
    'Insurances',
    'Breaks',
    'Damages',
    'Owner Takes'
  ];

  chart.drawDoughnutChart('AllExpenses', DATA_SETS, LABEL, LABELS, BACKGROUND_COLORS);


};

$(document).on('turbolinks:load', ready);