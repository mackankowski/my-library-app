import React, { Component } from 'react';
import { messages } from '../../constants/messages';

export class CustomersContainer extends Component {
  state = { res: null };
  componentDidMount() {
    this.callApi('/sql/orders/orders/list').then(res =>
      this.setState({ res: res.recordset })
    );
  }
  callApi = async path => {
    const res = await fetch(path);
    return await res.json();
  };
  render() {
    const { res } = this.state;
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
            {res &&
              res.map(i => {
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
