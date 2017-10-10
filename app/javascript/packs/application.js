/**
 *
 *
 *
 * CSS
 *
 *
 *
 *
 */
//
//
// Libraries
import '../../assets/stylesheets/fonts.scss'
import 'font-awesome/scss/font-awesome.scss'
import 'bootstrap/scss/bootstrap.scss'
import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker'
import '../../assets/stylesheets/datatables.scss'

//
//
// Layouts
import '../../assets/stylesheets/login.scss'
import '../../assets/stylesheets/header.scss'
import '../../assets/stylesheets/sidebar.scss'
import '../../assets/stylesheets/statistics.scss'
import '../../assets/stylesheets/scaffolds.scss'

/**
 *
 *
 *
 * Javascript
 *
 *
 *
 *
 */
//
//
// libraries
import 'bootstrap'
import 'chart.js'
import 'datatables'
import 'eonasdan-bootstrap-datetimepicker'

//
//
// Layout
import './layout/sidebar'

//
//
// Global
import './global/date-picker'
import './global/data-table'

/**
 *
 *
 *
 * Pages
 *
 *
 *
 */
// Expenses
import './pages/expenses/insurances'
import './pages/expenses/breaks'
import './pages/expenses/damages'
import './pages/expenses/owner_takes'
// Incomes
import './pages/incomes/manager_takes'

//
//
// Statistics
import './statistics/chart'
// Expenses
import './statistics/expenses_all_chart'
import './statistics/expenses_insurances_chart'
import './statistics/expenses_breaks_charts'
import './statistics/expenses_damages_charts'
import './statistics/expenses_owner_takes_charts'
// Incomes
import './statistics/incomes_all_chart'
import './statistics/incomes_manager_takes_charts'