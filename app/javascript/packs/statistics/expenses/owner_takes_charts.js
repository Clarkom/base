import { chart, BG_COLORS, BORDER_COLORS, CURRENT_YEAR, CURRENT_MONTH } from '../../statistics/chart'

let ready;
ready = function() {

  const label_name = 'Dégât';

  /**
   *
   *
   * By Year
   *
   *
   *
   */
  const owner_takes_years_data  = { owner_take_year: CURRENT_YEAR };
  const year_ajax_url      = 'get_owner_takes_by_year';
  const year_chart_id      = 'OwnerTakesExpenses_years';

  chart.drawChart(year_chart_id);
  chart.drawChartAjax(year_chart_id, label_name, year_ajax_url, owner_takes_years_data, BG_COLORS.owner_takes, BORDER_COLORS.owner_takes);
  chart.getDataByClick('owner_take', 'by_year', year_chart_id, year_ajax_url, label_name, year_ajax_url, BG_COLORS.owner_takes, BORDER_COLORS.owner_takes);


  /**
   *
   *
   * By Year and Month
   *
   *
   *
   */
  const owner_takes_months_data = { owner_take_year: CURRENT_YEAR, owner_take_month: CURRENT_MONTH };
  const year_and_month_ajax_url = 'get_owner_takes_by_year_and_month';
  const year_and_month_chart_id = 'OwnerTakesExpenses_months';

  chart.drawChart(year_and_month_chart_id);
  chart.drawChartAjax(year_and_month_chart_id, label_name, year_and_month_ajax_url, owner_takes_months_data, BG_COLORS.owner_takes, BORDER_COLORS.owner_takes);
  chart.getDataByClick('owner_take', 'by_year_and_month', year_and_month_chart_id, year_and_month_ajax_url, label_name, year_and_month_ajax_url, BG_COLORS.owner_takes, BORDER_COLORS.owner_takes);


};
$(document).on('turbolinks:load', ready);
