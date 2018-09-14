import React, { Component } from 'react';
import { messages } from '../../constants/messages';

export class CustomersContainer extends Component {
  state = {
    customers: null,
    customer_id: null,
    storage_id: null
  };
  componentDidMount() {
    fetch('/sql/orders/orders/list')
      .then(res => res.json())
      .then(res => this.setState({ customers: res.recordset }));
  }
  createOrderEvent() {}
  render() {
    const { customers, customer_id, storage_id } = this.state;
    const { confirmText } = messages;
    return (
      <div>
        <h2>Customers</h2>
        {customer_id && <p>customer_id: {customer_id}</p>}
        {storage_id && <p>storage_id: {storage_id}</p>}
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
        <p style={{ color: 'green' }}>
          Set customer:{' '}
          <input
            onChange={e => this.setState({ customer_id: e.target.value })}
            type="number"
            placeholder="#customer_id"
          />
        </p>
        <p style={{ color: 'green' }}>
          Create new order:{' '}
          <input
            onChange={e => this.setState({ storage_id: e.target.value })}
            type="number"
            placeholder="#storage_id"
          />
          <button onClick={this.createOrderEvent}>{confirmText}</button>
        </p>
        <p style={{ color: 'red' }}>
          Check order status:{' '}
          <input disabled type="number" placeholder="#order_id" />
          <button>{confirmText}</button>
        </p>
        <p style={{ color: 'red' }}>
          Change status:{' '}
          <input disabled type="number" placeholder="#order_id" />
          <input disabled type="text" placeholder="#status_message" />
          <button>{confirmText}</button>
        </p>
      </div>
    );
  }
}
