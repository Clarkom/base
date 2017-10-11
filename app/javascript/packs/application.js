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
// Cabs
import './pages/cabs/cabs_all'
import './pages/cabs/owners'

/**
 *
 *
 *
 * Statistics
 *
 *
 *
 */
import './statistics/chart'
// Expenses
import './statistics/expenses/expenses_all_charts'
import './statistics/expenses/insurances_chart'
import './statistics/expenses/breaks_charts'
import './statistics/expenses/damages_charts'
import './statistics/expenses/owner_takes_charts'
// Incomes
import './statistics/incomes/incomes_all_charts'
import './statistics/incomes/manager_takes_charts'