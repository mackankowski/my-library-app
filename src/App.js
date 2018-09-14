import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';
import './App.css';
import { CustomersContainer } from './containers/CustomersContainer';
import { OrdersContainer } from './containers/OrdersContainer';
import { StorageContainer } from './containers/StorageContainer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagas.forEach(sagaMiddleware.run);

class App extends PureComponent {
  state = {
    sql: null,
    bus: null
  };
  componentDidMount() {
    fetch('/sql/connect');
    fetch('/bus/connect');
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <h1>My Library app</h1>
            <ul>
              <li>
                <Link to="/customers">Customers</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
              <li>
                <Link to="/storage">Storage</Link>
              </li>
            </ul>
            <hr />
            <Redirect from="/" to="customers" />
            <Route path="/customers" component={CustomersContainer} />
            <Route path="/orders" component={OrdersContainer} />
            <Route path="/storage" component={StorageContainer} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
