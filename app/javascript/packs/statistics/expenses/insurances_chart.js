import { chart, BG_COLORS, BORDER_COLORS } from '../../statistics/chart'

let ready;
ready = function() {

  chart.drawLineChart(
    'InsurancesExpenses',
    'Insurances',
    BG_COLORS.insurance,
    BORDER_COLORS.insurance
  )

};
$(document).on('turbolinks:load', ready);
