import { chart, BG_COLORS, BORDER_COLORS, CURRENT_YEAR, CURRENT_MONTH } from '../../statistics/chart'

$(document).ready(function(){

  let ownertakes_years_data = { owner_take_year: CURRENT_YEAR };
  let owner_takes_months_data = { owner_take_year: CURRENT_YEAR, owner_take_month: CURRENT_MONTH };
  const label_name            = 'Recette';
  const year_ajax_url         = 'get_owner_takes_by_year';
  const year_chart_id         = 'OwnerTakesExpenses_years';

  //
  //
  // Breaks Chart By Years
  chart.drawChart(year_chart_id);
  chart.drawChartAjax(
    year_chart_id,
    label_name,
    year_ajax_url,
    ownertakes_years_data,
    BG_COLORS.owner_takes,
    BORDER_COLORS.owner_takes
  );
  // Get Breaks Data By Year using Ajax
  chart.getDataByClick(
    'owner_take',
    year_chart_id,
    year_ajax_url,
    label_name,
    year_ajax_url,
    BG_COLORS.owner_takes,
    BORDER_COLORS.owner_takes
  );

  //
  //
  // Breaks Chart By Months
  chart.drawChart('OwnerTakesExpenses_months');
  chart.drawChartAjax(
    'OwnerTakesExpenses_months',
    label_name,
    'get_owner_takes_by_year_and_month',
    owner_takes_months_data,
    BG_COLORS.owner_takes,
    BORDER_COLORS.owner_takes
  );

});
