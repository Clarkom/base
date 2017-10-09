import { chart, CURRENT_YEAR, CURRENT_MONTH } from './chart'

const BREAKS_BG_COLOR = 'rgba(184, 97, 22, 0.3)';
const BREAKS_BORDER_COLOR = 'rgba(184, 97, 22, 0.7)';

$(document).ready(function(){

  let breaks_years_data = { break_year: CURRENT_YEAR };
  let breaks_months_data = { break_year: CURRENT_YEAR, break_month: CURRENT_MONTH };

  //
  //
  // Breaks Chart By Year
  chart.drawChart('BreaksExpenses_years');
  chart.drawChartAjax(
    'BreaksExpenses_years',
    'Arrêts',
    'get_breaks_by_year',
    breaks_years_data,
    BREAKS_BG_COLOR,
    BREAKS_BORDER_COLOR
  );

  //
  //
  // Breaks Chart By Months
  chart.drawChart('BreaksExpenses_months');
  chart.drawChartAjax(
    'BreaksExpenses_months',
    'Arrêts',
    'get_breaks_by_year_and_month',
    breaks_months_data,
    BREAKS_BG_COLOR,
    BREAKS_BORDER_COLOR
  );

});
