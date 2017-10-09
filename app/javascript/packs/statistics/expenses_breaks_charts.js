import { chart, BG_COLORS, BORDER_COLORS, CURRENT_YEAR, CURRENT_MONTH } from './chart'


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
    BG_COLORS.breaks,
    BORDER_COLORS.breaks
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
    BG_COLORS.breaks,
    BORDER_COLORS.breaks
  );

});
