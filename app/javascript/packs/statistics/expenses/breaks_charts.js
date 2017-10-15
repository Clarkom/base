import { chart, BG_COLORS, BORDER_COLORS, CURRENT_YEAR, CURRENT_MONTH } from '../../statistics/chart'


let ready;
ready = function() {

  const label_name = I18n.t('breaks');

  /**
   *
   *
   * By Year
   *
   *
   *
   */
  const breaks_years_data  = { break_year: CURRENT_YEAR };
  const year_ajax_url      = 'get_breaks_by_year';
  const year_chart_id      = 'BreaksExpenses_years';

  chart.drawChart(year_chart_id);
  chart.drawChartAjax(year_chart_id, label_name, year_ajax_url, breaks_years_data, BG_COLORS.breaks, BORDER_COLORS.breaks);
  chart.getDataByClick('break', 'by_year', year_chart_id, year_ajax_url, label_name, year_ajax_url, BG_COLORS.breaks, BORDER_COLORS.breaks);


  /**
   *
   *
   * By Year and Month
   *
   *
   *
   */
  const breaks_months_data = { break_year: CURRENT_YEAR, break_month: CURRENT_MONTH };
  const year_and_month_ajax_url = 'get_breaks_by_year_and_month';
  const year_and_month_chart_id = 'BreaksExpenses_months';

  chart.drawChart(year_and_month_chart_id);
  chart.drawChartAjax(year_and_month_chart_id, label_name, year_and_month_ajax_url, breaks_months_data, BG_COLORS.breaks, BORDER_COLORS.breaks);
  chart.getDataByClick('break', 'by_year_and_month', year_and_month_chart_id, year_and_month_ajax_url, label_name, year_and_month_ajax_url, BG_COLORS.breaks, BORDER_COLORS.breaks);

};
$(document).on('turbolinks:load', ready);