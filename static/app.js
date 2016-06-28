import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducers';
import { TodoList } from './components/todoListConnector';
import { FilterLink } from './components/filterLinkConnector'
import { List, Map } from 'immutable';


const initalData = Map({
  todos:List([
    Map({ id: 0, done: true,  text: 'TODO 1',editMode:false }),
    Map({ id: 1, done: false, text: 'TODO 2',editMode:false }),
    Map({ id: 2, done: false, text: 'TODO 3',editMode:false }),
    Map({ id: 3, done: false, text: 'TODO 45',editMode:false })    
  ]),
  filterVal:List([
     Map({ id: 0,active: true,  val: 'All'}),
     Map({ id: 1,active: false,  val: 'Finished'}),
     Map({ id: 2,active: false,  val: 'Pending'})
  ])
});
const store = createStore(reducer,initalData);

render(
  <Provider store={store}>
    <div>
      <FilterLink />
      <TodoList />
    </div>
  </Provider>,
  document.getElementById('app')
);