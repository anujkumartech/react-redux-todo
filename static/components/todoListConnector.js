import { connect } from 'react-redux';
import * as components from './todoList';
import { addTodo, toggleTodo,deleteTodo,enableEditTodo,editTodo } from '../redux/action';

export const TodoList = connect(
  function mapStateToProps(state) {
    return { todos: state.get("todos") };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id)),
      deleteTodo: id => dispatch(deleteTodo(id)),
      enableEditTodo: id => dispatch(enableEditTodo(id)),
      editTodo: (id,text) => dispatch(editTodo(id,text))
    };
  }
)(components.TodoList);