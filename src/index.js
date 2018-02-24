import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route , BrowserRouter , Switch } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';
import ResourcesInstruction from './components/resources-instruction';
import Header from './components/header'
import requireAuth from './components/require_authentication';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
    <Switch>
      <Route path="/resources" component={requireAuth(App)} />
      <Route path="/" component={ResourcesInstruction} />
    </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
