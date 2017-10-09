import { chart, CURRENT_YEAR, CURRENT_MONTH } from './bar_chart'

const MANAGER_TAKES_BG_COLOR = 'rgba(13, 95, 107, 0.3)';
const MANAGER_TAKES_BORDER_COLOR = 'rgba(13, 95, 107, 0.7)';

$(document).ready(function(){

  let manager_takes_years_data = { manager_take_year: CURRENT_YEAR };
  let manager_takes_takes_months_data = { manager_take_year: CURRENT_YEAR, manager_take_month: CURRENT_MONTH };

  //
  //
  // Breaks Chart By Years
  chart.drawChart('ManagerTakesIncomes_years');
  chart.drawChartAjax(
    'ManagerTakesIncomes_years',
    'Recette',
    'get_manager_takes_by_year',
    manager_takes_years_data,
    MANAGER_TAKES_BG_COLOR,
    MANAGER_TAKES_BORDER_COLOR
  );

  //
  //
  // Breaks Chart By Months
  chart.drawChart('ManagerTakesIncomes_months');
  chart.drawChartAjax(
    'ManagerTakesIncomes_months',
    'Recette',
    'get_manager_takes_by_year_and_month',
    manager_takes_takes_months_data,
    MANAGER_TAKES_BG_COLOR,
    MANAGER_TAKES_BORDER_COLOR
  );

});
