import { chart, BG_COLORS, BORDER_COLORS, CURRENT_YEAR, CURRENT_MONTH } from '../../statistics/chart'


$(document).ready(function(){

  const breaks_years_data  = { break_year: CURRENT_YEAR };
  const breaks_months_data = { break_year: CURRENT_YEAR, break_month: CURRENT_MONTH };
  const label_name         = 'Arrêts';
  const year_ajax_url      = 'get_breaks_by_year';
  const year_chart_id      = 'BreaksExpenses_years';

  //
  //
  // Breaks Chart By Year
  chart.drawChart(year_chart_id);
  chart.drawChartAjax(
    year_chart_id,
    label_name,
    year_ajax_url,
    breaks_years_data,
    BG_COLORS.breaks,
    BORDER_COLORS.breaks
  );
  // Get Breaks Data By Year using Ajax
  chart.getDataByClick(
    'break',
    year_chart_id,
    year_ajax_url,
    label_name,
    year_ajax_url,
    BG_COLORS.breaks,
    BORDER_COLORS.breaks
  );


  //
  //
  // Breaks Chart By Months
  chart.drawChart('BreaksExpenses_months');
  chart.drawChartAjax(
    'BreaksExpenses_months',
    label_name,
    'get_breaks_by_year_and_month',
    breaks_months_data,
    BG_COLORS.breaks,
    BORDER_COLORS.breaks
  );

});
