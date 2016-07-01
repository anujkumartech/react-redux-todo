import React from 'react';
import { render } from 'react-dom';
import { createStore,combineReducers,applyMiddleware,compose  } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducers';
import  Immutable   from 'immutable';
import thunkMiddleware from 'redux-thunk'
import { Router, Route, IndexRoute, browserHistory,hashHistory} from 'react-router'
import { ReduxRouter } from 'redux-router'
import { syncHistoryWithStore, routerReducer, selectLocationState} from 'react-router-redux'
import { TodoApp } from './components/todoappComponent';
import  { FoodDairyApp }  from './components/foodDairyAppComponent';
import { Header } from './components/headerComponent'

const initalStore = Immutable.fromJS({});
const store = createStore(reducer,initalStore,compose(applyMiddleware(thunkMiddleware),window.devToolsExtension ? window.devToolsExtension():undefined));


const createSelectLocationState = () => {
  let prevRoutingState, prevRoutingStateJS;
  return (state) => {
    const routingState = state.get('routing'); // or state.routing
    if (typeof prevRoutingState === 'undefined' || prevRoutingState !== routingState) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }
    return prevRoutingStateJS;
  };
};

const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState: createSelectLocationState()
});





render(
  <Provider store={store}>
  <div>
    <Router history={history}>
      <Route path="/" component={Header}/>
      <Route path="todos" component={TodoApp}/>
      <Route path="food" component={FoodDairyApp}/>
    </Router>
    </div>
  </Provider>,
  document.getElementById('app')
);
