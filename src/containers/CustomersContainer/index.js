import React, { Component } from 'react';
import { messages } from '../../constants/messages';

export class CustomersContainer extends Component {
  render() {
    const { confirmText } = messages;
    return (
      <div>
        <h2>Customers</h2>
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
