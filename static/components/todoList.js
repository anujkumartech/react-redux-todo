import React from 'react';
import Todo from './todo'

export function TodoList(props) {
  const { todos, toggleTodo, addTodo,deleteTodo,enableEditTodo,editTodo} = props;

  const onSubmit = (event) => {
    const input = event.target;
    const text = input.value;
    const enterPressed = (event.which == 13);
    const validText = text.length > 0;

    if(enterPressed && validText) {      
      addTodo(text);
      input.value = '';
    }
  };    
  
 const updateTodo = (event,id) => {
    console.log(event);
    const input = event.target;
    const text = input.value;
    const enterPressed = (event.which == 13);
    const validText = text.length > 0;
    console.log(text);

    if(enterPressed && validText) {      
      editTodo(id,text);
      input.value = '';
    }
  };
  console.log(todos);

  return (
    <div className='row'>
      <input type='text'
             className='form-control'
             placeholder='Add New Todo'
             onKeyDown={onSubmit} />
      <ul className='list-group'>
        {todos.map(t => (
          <li key={t.get('id')}
              className='list-group-item'
           >
            <Todo todo={t.toJS()} togglefunction = {() => toggleTodo(t.get('id'))} deletefunction = {() => deleteTodo(t.get('id'))} enableEdit={() => enableEditTodo(t.get('id'))}  editTodofunction = {(event) => updateTodo(event,t.get('id'))}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
