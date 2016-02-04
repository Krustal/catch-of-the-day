import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, Navigation } from 'react-router'
import App from './components/app';
import StorePicker from './components/store_picker';
import NotFound from './components/not_found';
import createBrowserHistory from 'history/lib/createBrowserHistory';

// Routes
var routes = (
  <Router history={createBrowserHistory()} >
    <Route path="/" component={StorePicker} />
    <Route path="/store/:storeId" component={App} />
    <Route path="*" component={NotFound} />
  </Router>
)

ReactDOM.render(routes, document.getElementById('main'));

if(module.hot) {
  module.hot.accept();
}
