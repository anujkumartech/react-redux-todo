import { connect } from 'react-redux';
import { DailyLog } from './dailyLogComponent';
import { filterTodo } from '../../redux/action';

export const DailyLogComponent = connect(
//   function mapStateToProps(state) {
//     return { filterVal: state.get("filterVal") };
//   },
//   function mapDispatchToProps(dispatch) {
//     return {
//         filterTodo : val => dispatch(filterTodo(val))
//     };
//   }
)(DailyLog);