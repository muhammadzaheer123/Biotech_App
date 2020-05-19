import { combineReducers } from 'redux'
import todos from './todos';
import login from '../Login/reducers';
//import expense from '../ExpensesDetails/reducer';
import ledger from '../PattyCashLedger/Preducer';
//import visibilityFilter from './visibilityFilter'
import addExpenses from '../AddExpense/addExpenseReducer';
export default combineReducers({
  login,
  addExpenses,
  //expense,
  ledger
})