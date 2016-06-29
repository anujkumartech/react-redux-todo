import { connect } from 'react-redux';
import * as components from './todoList';
import { addTodo, toggleTodo,deleteTodo,enableEditTodo,editTodo ,fetchTodo} from '../redux/action';

export const TodoList = connect(
  function mapStateToProps(state) {    
    return { todos: filterTodos(state).get("todos") };
  },
  function mapDispatchToProps(dispatch) {
    return {
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id)),
      deleteTodo: id => dispatch(deleteTodo(id)),
      enableEditTodo: id => dispatch(enableEditTodo(id)),
      editTodo: (id,text) => dispatch(editTodo(id,text)),
      fetchTodo: () => dispatch(fetchTodo())
    };
  }
)(components.TodoList);


const filterTodos = (storeData) => {
  const filters = storeData.get('filterVal');
  let filterValue = '';
  filters.map(f =>{
     if(f.get('active') === true) {
       filterValue = f.get('val');
     }
  })
   switch (filterValue) {
    case 'All':
      return storeData;
    case 'Finished':
       return storeData.update('todos',todos => todos.filter(t => t.get('done')))
    case 'Pending':
      return storeData.update('todos',todos => todos.filter(t => !t.get('done')))
    default:
      return storeData;
  }
}