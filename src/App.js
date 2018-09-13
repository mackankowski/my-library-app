import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import './App.css';
import { CustomersComponent } from './components/CustomersComponent';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <h1>My Library app</h1>
          <ul>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
          </ul>

          <hr />
          <Redirect from="/" to="customers" />
          <Route path="/customers" component={CustomersComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
