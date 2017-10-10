import { chart, BG_COLORS, BORDER_COLORS, CURRENT_YEAR, CURRENT_MONTH } from '../../statistics/chart'

$(document).ready(function(){

  const label_name = 'Dégât';

  /**
   *
   *
   * By Year
   *
   *
   *
   */
  const damages_years_data  = { damage_year: CURRENT_YEAR };
  const year_ajax_url      = 'get_damages_by_year';
  const year_chart_id      = 'DamagesExpenses_years';

  chart.drawChart(year_chart_id);
  chart.drawChartAjax(year_chart_id, label_name, year_ajax_url, damages_years_data, BG_COLORS.damages, BORDER_COLORS.damages);
  chart.getDataByClick('damage', 'by_year', year_chart_id, year_ajax_url, label_name, year_ajax_url, BG_COLORS.damages, BORDER_COLORS.damages);


  /**
   *
   *
   * By Year and Month
   *
   *
   *
   */
  const damages_months_data = { damage_year: CURRENT_YEAR, damage_month: CURRENT_MONTH };
  const year_and_month_ajax_url = 'get_damages_by_year_and_month';
  const year_and_month_chart_id = 'DamagesExpenses_months';

  chart.drawChart(year_and_month_chart_id);
  chart.drawChartAjax(year_and_month_chart_id, label_name, year_and_month_ajax_url, damages_months_data, BG_COLORS.damages, BORDER_COLORS.damages);
  chart.getDataByClick('damage', 'by_year_and_month', year_and_month_chart_id, year_and_month_ajax_url, label_name, year_and_month_ajax_url, BG_COLORS.damages, BORDER_COLORS.damages);


});
