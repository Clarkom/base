import { chart, BG_COLORS, BORDER_COLORS, CURRENT_YEAR, CURRENT_MONTH } from '../../statistics/chart'

$(document).ready(function(){

  const manager_takes_years_data        = { manager_take_year: CURRENT_YEAR };
  const manager_takes_takes_months_data = { manager_take_year: CURRENT_YEAR, manager_take_month: CURRENT_MONTH };
  const label_name                      = 'Recette';
  const year_ajax_url                   = 'get_manager_takes_by_year';
  const year_chart_id                   = 'ManagerTakesIncomes_years';

  //
  //
  // Breaks Chart By Years
  chart.drawChart('ManagerTakesIncomes_years');
  chart.drawChartAjax(
    year_chart_id,
    label_name,
    year_ajax_url,
    manager_takes_years_data,
    BG_COLORS.manager_takes,
    BORDER_COLORS.manager_takes
  );
  // Get Breaks Data By Year using Ajax
  chart.getDataByClick(
    'manager_take',
    year_chart_id,
    year_ajax_url,
    label_name,
    year_ajax_url,
    BG_COLORS.manager_takes,
    BORDER_COLORS.manager_takes
  );


  //
  //
  // Breaks Chart By Months
  chart.drawChart('ManagerTakesIncomes_months');
  chart.drawChartAjax(
    year_chart_id,
    label_name,
    'get_manager_takes_by_year_and_month',
    manager_takes_takes_months_data,
    BG_COLORS.manager_takes,
    BORDER_COLORS.manager_takes
  );

});
