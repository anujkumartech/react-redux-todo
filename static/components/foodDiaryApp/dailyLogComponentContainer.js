import { connect } from 'react-redux';
import { DailyLog } from './dailyLogComponent';
import { addLog } from '../../redux/action';

export const DailyLogComponent = connect(
  function mapStateToProps(state) {
    return { logEntries: state.get("logEntries") };
  },
  function mapDispatchToProps(dispatch) {
      console.log("add log");
    return {
        
        addLog : (date,entry) => dispatch(addLog(date,entry))
    };
  }
)(DailyLog);