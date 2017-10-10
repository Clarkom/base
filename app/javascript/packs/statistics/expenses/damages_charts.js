import { chart, BG_COLORS, BORDER_COLORS, CURRENT_YEAR, CURRENT_MONTH } from '../../statistics/chart'

$(document).ready(function(){

  let damages_years_data = { damage_year: CURRENT_YEAR };
  let damages_months_data = { damage_year: CURRENT_YEAR, damage_month: CURRENT_MONTH };

  //
  //
  // Breaks Chart By Years
  chart.drawChart('DamagesExpenses_years');
  chart.drawChartAjax(
    'DamagesExpenses_years',
    'Dégats',
    'get_damages_by_year',
    damages_years_data,
    BG_COLORS.damages,
    BORDER_COLORS.damages
  );

  //
  //
  // Breaks Chart By Months
  chart.drawChart('DamagesExpenses_months');
  chart.drawChartAjax(
    'DamagesExpenses_months',
    'Dégats',
    'get_damages_by_year_and_month',
    damages_months_data,
    BG_COLORS.damages,
    BORDER_COLORS.damages
  );

});
