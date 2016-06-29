import $ from  'jquery'
import { List, Map } from 'immutable';
const FETCH_TODO = 'FETCH_TODO'
const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const EDIT_TODO = 'EDIT_TODO'
const ENABLE_EDIT_TODO = 'ENABLE_EDIT_TODO'
const FILTER_TODO = 'FILTER_TODO'



export function fetchTodoAction(todoData) {
  return { type: FETCH_TODO,todoData}
}
export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function deleteTodo(id) {
  return { type: DELETE_TODO, id }
}

export function toggleTodo(id) {
  return { type: TOGGLE_TODO, id }
}

export function editTodo(id,text) {
  return { type: EDIT_TODO, id,text }
}
export function enableEditTodo(id) {
  return { type: ENABLE_EDIT_TODO, id }
}
export function filterTodo(val) {
  return { type: FILTER_TODO, val }
}

export function fetchTodo() {
    return dispatch => {
      $.get('api/todoList',function(data, status){
        dispatch(fetchTodoAction(data));
      });
  }; 
}