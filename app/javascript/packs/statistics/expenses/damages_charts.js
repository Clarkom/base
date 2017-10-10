import { chart, BG_COLORS, BORDER_COLORS, CURRENT_YEAR, CURRENT_MONTH } from '../../statistics/chart'

$(document).ready(function(){

  const damages_years_data  = { damage_year: CURRENT_YEAR };
  const damages_months_data = { damage_year: CURRENT_YEAR, damage_month: CURRENT_MONTH };
  const label_name          = 'Dégâts';
  const year_ajax_url       = 'get_damages_by_year';
  const year_chart_id       = 'DamagesExpenses_years';

  //
  //
  // Breaks Chart By Years
  chart.drawChart(year_chart_id);
  chart.drawChartAjax(
    year_chart_id,
    label_name,
    year_ajax_url,
    damages_years_data,
    BG_COLORS.damages,
    BORDER_COLORS.damages
  );
  // Get Breaks Data By Year using Ajax
  chart.getDataByClick(
    'damage',
    year_chart_id,
    year_ajax_url,
    label_name,
    year_ajax_url,
    BG_COLORS.damages,
    BORDER_COLORS.damages
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
    BG_COLORS.damages,
    BORDER_COLORS.damages
  );

});
