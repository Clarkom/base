import { chart, BG_COLORS, BORDER_COLORS } from '../../statistics/chart'

$(document).ready(function(){

  chart.drawLineChart(
    'InsurancesExpenses',
    'Assurances',
    BG_COLORS.insurance,
    BORDER_COLORS.insurance
  )

});
