import React, { Component } from 'react';
import { messages } from '../../constants/messages';

export class CustomersContainer extends Component {
  state = { customers: null };
  componentDidMount() {
    fetch('/sql/orders/orders/list')
      .then(res => res.json())
      .then(res => this.setState({ customers: res.recordset }));
  }
  render() {
    const { customers } = this.state;
    const { confirmText } = messages;
    return (
      <div>
        <h2>Customers</h2>
        <table>
          <tbody>
            <tr>
              <th>order_id</th>
              <th>customer_id</th>
              <th>customer_first_name</th>
              <th>customer_surname</th>
            </tr>
            {customers &&
              customers.map(i => {
                return (
                  <tr key={i.order_id}>
                    <td>{i.order_id}</td>
                    <td>{i.customer_id}</td>
                    <td />
                    <td />
                  </tr>
                );
              })}
          </tbody>
        </table>
        <p>
          Switch customer: <input type="number" placeholder="#customer_id" />
          <button>{confirmText}</button>
        </p>
        <p>
          Create new order: <input type="number" placeholder="#storage_id" />
          <button>{confirmText}</button>
        </p>
        <p>
          Check order status: <input type="number" placeholder="#order_id" />
          <button>{confirmText}</button>
        </p>
        <p>
          Change status: <input type="number" placeholder="#order_id" />
          <input type="text" placeholder="#status_message" />
          <button>{confirmText}</button>
        </p>
      </div>
    );
  }
}
