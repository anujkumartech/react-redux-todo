import React from 'react';
import { render } from 'react-dom';
import { createStore,applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducers';
import { TodoList } from './components/todoListConnector';
import { FilterLink } from './components/filterLinkConnector'
import  Immutable   from 'immutable';
import thunkMiddleware from 'redux-thunk'



// const initalData = Immutable.Map({
//   todos:Immutable.List([
//     Immutable.Map({ id: 0, done: true,  text: 'TODO 1',editMode:false }),
//     Immutable.Map({ id: 1, done: false, text: 'TODO 2',editMode:false }),
//     Immutable.Map({ id: 2, done: false, text: 'TODO 3',editMode:false }),
//     Immutable.Map({ id: 3, done: false, text: 'TODO 45',editMode:false })    
//   ]),
//   filterVal:Immutable.List([
//      Immutable.Map({ id: 0,active: true,  val: 'All'}),
//      Immutable.Map({ id: 1,active: false,  val: 'Finished'}),
//      Immutable.Map({ id: 2,active: false,  val: 'Pending'})
//   ])
// });

const initalData = Immutable.Map({
  todos:Immutable.List([]),
  filterVal:Immutable.List([
     Immutable.Map({ id: 0,active: true,  val: 'All'}),
     Immutable.Map({ id: 1,active: false,  val: 'Finished'}),
     Immutable.Map({ id: 2,active: false,  val: 'Pending'})
  ])
});

//const initalData = Immutable.Map({});
const store = createStore(reducer,initalData,applyMiddleware(thunkMiddleware));

render(
  <Provider store={store}>
    <div>
      <FilterLink />
      <TodoList />
    </div>
  </Provider>,
  document.getElementById('app')
);