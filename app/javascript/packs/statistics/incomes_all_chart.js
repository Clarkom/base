import { chart } from './chart'

$(document).ready(function(){

  /**
   *
   * Constants
   *
   */
  const DATA_SETS = [
    $('#incomes-managertakes-stats').text()
  ];

  const BG_COLORS = [
    'rgba(13, 95, 107, 0.7)'
  ];

  const LABEL = '# of Votes';

  const LABELS = [
    'Manager Take'
  ];

  chart.drawDoughnutChart('AllIncomes', DATA_SETS, LABEL, LABELS, BG_COLORS);


});