import { chart, BG_COLORS, BORDER_COLORS, CURRENT_YEAR, CURRENT_MONTH } from './chart'

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
    BG_COLORS.owner_takes,
    BORDER_COLORS.owner_takes
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
    BG_COLORS.owner_takes,
    BORDER_COLORS.owner_takes
  );

});
