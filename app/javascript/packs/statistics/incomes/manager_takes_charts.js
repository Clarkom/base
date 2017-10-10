import { chart, BG_COLORS, BORDER_COLORS, CURRENT_YEAR, CURRENT_MONTH } from '../../statistics/chart'

$(document).ready(function(){

  const label_name = 'Manager Take';

  /**
   *
   *
   * By Year
   *
   *
   *
   */
  const manager_takes_years_data  = { manager_take_year: CURRENT_YEAR };
  const year_ajax_url      = 'get_manager_takes_by_year';
  const year_chart_id      = 'ManagerTakesIncomes_years';

  chart.drawChart(year_chart_id);
  chart.drawChartAjax(year_chart_id, label_name, year_ajax_url, manager_takes_years_data, BG_COLORS.manager_takes, BORDER_COLORS.manager_takes);
  chart.getDataByClick('manager_take', 'by_year', year_chart_id, year_ajax_url, label_name, year_ajax_url, BG_COLORS.manager_takes, BORDER_COLORS.manager_takes);


  /**
   *
   *
   * By Year and Month
   *
   *
   *
   */
  const manager_takes_months_data = { manager_take_year: CURRENT_YEAR, manager_take_month: CURRENT_MONTH };
  const year_and_month_ajax_url = 'get_manager_takes_by_year_and_month';
  const year_and_month_chart_id = 'ManagerTakesIncomes_months';

  chart.drawChart(year_and_month_chart_id);
  chart.drawChartAjax(year_and_month_chart_id, label_name, year_and_month_ajax_url, manager_takes_months_data, BG_COLORS.manager_takes, BORDER_COLORS.manager_takes);
  chart.getDataByClick('manager_take', 'by_year_and_month', year_and_month_chart_id, year_and_month_ajax_url, label_name, year_and_month_ajax_url, BG_COLORS.manager_takes, BORDER_COLORS.manager_takes);


});
