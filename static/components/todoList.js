import React, { Component, PropTypes } from 'react'
import Todo from './todo'
import Input from './core/inputCompoent'

export class TodoList extends Component {
   constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.initilze = true;
  };
  onSubmit(event){
      const input = event.target;
      const text = input.value;
      const enterPressed = (event.which == 13);
      const validText = text.length > 0;
      if(enterPressed && validText) {      
        this.props.addTodo(text);
        input.value = '';
      };
  };  
  updateTodo(event,id){
    const input = event.target;
    const text = input.value;
    const enterPressed = (event.which == 13);
    const validText = text.length > 0;
    if(enterPressed && validText) {      
      this.props.editTodo(id,text);
      input.value = '';
    };
  };
  componentWillMount(){
    if(this.props.todos.size === 0){
      this.initilze = false;
      this.props.fetchTodo();
    };  
  };
   componentWillReceiveProps(nextProps){
    if(nextProps.todos.size > 0){
      this.initilze = true;
    };
  }
   render(){
    const { todos, toggleTodo, addTodo,deleteTodo,enableEditTodo,editTodo} = this.props;
    return(<div className='row'>
              <Input classNameValue="form-control" placeHolderValue="Add New Todo" keyDownFunction={this.onSubmit}/>
              <ul className='list-group'>
                {todos.map(t => (
                  <li key={t.get('id')}
                      className='list-group-item'
                  >
                    <Todo todo={t.toJS()} togglefunction = {() => toggleTodo(t.get('id'))} deletefunction = {() => deleteTodo(t.get('id'))} enableEdit={() => enableEditTodo(t.get('id'))}  editTodofunction = {(event) => this.updateTodo(event,t.get('id'))}/>
                  </li>
                ))}
                 {(todos.size === 0 && this.initilze === true) ? <li className='list-group-item center-align-text'><span>No Todos to show</span></li>:null}               
              </ul>
              <div className={this.initilze == true ? 'hidden':'row center-align-text'}><i className="fa fa-3x fa-circle-o-notch fa-spin"/></div>
        </div>)   
  }
}

