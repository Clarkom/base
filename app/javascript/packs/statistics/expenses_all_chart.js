import { chart } from './chart'

$(document).ready(function(){

  /**
   *
   * Constants
   *
   */
  const DATA_SETS = [
    $('#expenses-assurances-stats').text(),
    $('#expenses-breaks-stats').text(),
    $('#expenses-damages-stats').text(),
    $('#expenses-ownertakes-stats').text()
  ];

  const BG_COLORS = [
    'rgba(13, 95, 107, 0.7)',
    'rgba(184, 97, 22, 0.7)',
    'rgba(107, 41, 13, 0.7)',
    'rgba(71, 71, 71, 0.7)'
  ];

  const LABEL = '# of Votes';

  const LABELS = [
    'Assurances',
    'Arrêts',
    'Dégâts',
    'Recettes'
  ];

  chart.drawDoughnutChart('AllExpenses', DATA_SETS, LABEL, LABELS, BG_COLORS);


});