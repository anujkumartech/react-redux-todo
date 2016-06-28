import { connect } from 'react-redux';
import { FilterLinks } from './filterLink';
import { filterTodo } from '../redux/action';

export const FilterLink = connect(
  function mapStateToProps(state) {
    return { filterVal: state.get("filterVal") };
  },
  function mapDispatchToProps(dispatch) {
    return {
        filterTodo : val => dispatch(filterTodo(val))
    };
  }
)(FilterLinks);