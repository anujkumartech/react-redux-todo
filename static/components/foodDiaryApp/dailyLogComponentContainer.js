import { connect } from 'react-redux';
import { DailyLog } from './dailyLogComponent';
import { addLog,updateCurrentDate } from '../../redux/action';

export const DailyLogComponent = connect(
  function mapStateToProps(state) {
    return { logEntries: state.get("logEntries"),selectedDate:state.get("selectedDate") };
  },
  function mapDispatchToProps(dispatch) {
    return {        
        addLog : (date,entry) => dispatch(addLog(date,entry)),
        updateCurrentDate : (date) => dispatch(updateCurrentDate(date))
    };
  }
)(DailyLog);