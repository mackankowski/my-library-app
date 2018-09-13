import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import './App.css';
import { CustomersContainer } from './containers/CustomersContainer';
import { OrdersContainer } from './containers/OrdersContainer';
import { StorageContainer } from './containers/StorageContainer';

class App extends PureComponent {
  componentDidMount() {
    this.sqlConnect();
    this.serviceBusConnect();
  }
  sqlConnect = () => {
    fetch('/azure/sql/connect');
  };

  serviceBusConnect = () => {
    fetch('/azure/servicebus/connect');
  };

  render() {
    return (
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
    );
  }
}

export default App;
