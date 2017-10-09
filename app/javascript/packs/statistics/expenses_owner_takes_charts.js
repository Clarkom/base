import { chart, CURRENT_YEAR, CURRENT_MONTH } from './chart'

const OWNER_TAKES_BG_COLOR = 'rgba(71, 71, 71, 0.3)';
const OWNER_TAKES_BORDER_COLOR = 'rgba(71, 71, 71, 0.7)';

$(document).ready(function(){

  let ownertakes_years_data = { owner_take_year: CURRENT_YEAR };
  let owner_takes_months_data = { owner_take_year: CURRENT_YEAR, owner_take_month: CURRENT_MONTH };

  //
  //
  // Breaks Chart By Years
  chart.drawChart('OwnerTakesExpenses_years');
  chart.drawChartAjax(
    'OwnerTakesExpenses_years',
    'Recette',
    'get_owner_takes_by_year',
    ownertakes_years_data,
    OWNER_TAKES_BG_COLOR,
    OWNER_TAKES_BORDER_COLOR
  );

  //
  //
  // Breaks Chart By Months
  chart.drawChart('OwnerTakesExpenses_months');
  chart.drawChartAjax(
    'OwnerTakesExpenses_months',
    'Recette',
    'get_owner_takes_by_year_and_month',
    owner_takes_months_data,
    OWNER_TAKES_BG_COLOR,
    OWNER_TAKES_BORDER_COLOR
  );

});
