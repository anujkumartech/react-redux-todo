import React, { Component, PropTypes } from 'react'
import Todo from './todo'

/*export function TodoList(props) {
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
    const input = event.target;
    const text = input.value;
    const enterPressed = (event.which == 13);
    const validText = text.length > 0;
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
            <Todo todo={t.toJS()} togglefunction = {()   const onSubmit = (event) => {
    const input = event.target;
    const text = input.value;
    const enterPressed = (event.which == 13);
    const validText = text.length > 0;

    if(enterPressed && validText) {      
      addTodo(text);
      input.value = '';
    }
  };  => toggleTodo(t.get('id'))} deletefunction = {() => deleteTodo(t.get('id'))} enableEdit={() => enableEditTodo(t.get('id'))}  editTodofunction = {(event) => updateTodo(event,t.get('id'))}/>
          </li>
        ))}
      </ul>
    </div>
  );
}*/

export class TodoList extends Component {
  //const { todos, toggleTodo, addTodo,deleteTodo,enableEditTodo,editTodo} = props;
   constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }
  onSubmit(event){
      const input = event.target;
      const text = input.value;
      const enterPressed = (event.which == 13);
      const validText = text.length > 0;
      if(enterPressed && validText) {      
        this.props.addTodo(text);
        input.value = '';
      }
  };  
  updateTodo(event,id){
    const input = event.target;
    const text = input.value;
    const enterPressed = (event.which == 13);
    const validText = text.length > 0;
    if(enterPressed && validText) {      
      this.props.editTodo(id,text);
      input.value = '';
    }
  };
  componentWillMount(){
    console.log("component will mount render done");
    console.log(this.props.todos.size);
    if(this.props.todos.size === 0){
      this.props.fetchTodo();
    }
    
  };
   render(){
    const { todos, toggleTodo, addTodo,deleteTodo,enableEditTodo,editTodo} = this.props;
    return(<div className='row'>
              <input type='text'
                    className='form-control'
                    placeholder='Add New Todo'
                    onKeyDown={this.onSubmit} />
              <ul className='list-group'>
                {todos.map(t => (
                  <li key={t.get('id')}
                      className='list-group-item'
                  >
                    <Todo todo={t.toJS()} togglefunction = {() => toggleTodo(t.get('id'))} deletefunction = {() => deleteTodo(t.get('id'))} enableEdit={() => enableEditTodo(t.get('id'))}  editTodofunction = {(event) => this.updateTodo(event,t.get('id'))}/>
                  </li>
                ))}                
              </ul>
              <div className={todos.size > 0 ? 'hidden':'row center-align-text'}><i className="fa fa-3x fa-circle-o-notch fa-spin"/></div>
        </div>)   
  }
}

