import { chart, CURRENT_YEAR, CURRENT_MONTH } from './bar_chart'

const DAMAGES_BG_COLOR = 'rgba(107, 41, 13, 0.3)';
const DAMAGES_BORDER_COLOR = 'rgba(107, 41, 13, 0.7)';

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
    DAMAGES_BG_COLOR,
    DAMAGES_BORDER_COLOR
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
    DAMAGES_BG_COLOR,
    DAMAGES_BORDER_COLOR
  );

});
