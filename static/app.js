import React from 'react';
import { render } from 'react-dom';
import { createStore,combineReducers,applyMiddleware,compose  } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducers';
import { TodoList } from './components/todoListConnector';
import { FilterLink } from './components/filterLinkConnector'
import  Immutable   from 'immutable';
import thunkMiddleware from 'redux-thunk'
import { Router, Route,browserHistory  } from 'react-router'
import { ReduxRouter } from 'redux-router'
import { syncHistoryWithStore, routerReducer, selectLocationState} from 'react-router-redux'

const initalStore = Immutable.fromJS({});
const store = createStore(reducer,initalStore,compose(applyMiddleware(thunkMiddleware),

window.devToolsExtension ? window.devToolsExtension():undefined));
const history = syncHistoryWithStore(browserHistory, store,{
  selectLocationState: state => state.get('routing')
});

render(
  <Provider store={store}>
      <div>
        <FilterLink />
        <TodoList />
      </div>
  </Provider>,
  document.getElementById('app')
);