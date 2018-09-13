import React, { Component } from 'react';
import { messages } from '../../constants/messages';

export class OrdersContainer extends Component {
  render() {
    const { confirmText } = messages;
    return (
      <div>
        <h2>Orders</h2>
        <p>(empty list)</p>
        <p>
          Change status: <input type="number" placeholder="#order_id" />
          <input type="text" placeholder="#status_message" />
          <button>{confirmText}</button>
        </p>
      </div>
    );
  }
}
