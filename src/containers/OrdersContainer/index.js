import React, { PureComponent } from 'react';
import { messages } from '../../constants/messages';

export class OrdersContainer extends PureComponent {
  state = { response: null };
  componentDidMount() {
    this.callApi().then(res => this.setState({ response: res.recordset }));
  }
  callApi = async () => {
    const response = await fetch('/azure/sql/getOrders');
    const body = await response.json();
    return body;
  };
  render() {
    const { confirmText } = messages;
    return (
      <div>
        <h2>Orders</h2>
        <div>
          {this.state.response &&
            this.state.response.map(i => {
              return (
                <p key={i.order_id}>
                  status_id: {i.status_id}
                  ,storage_ids: {i.storage_ids}
                </p>
              );
            })}
        </div>
        <p>
          Change status: <input type="number" placeholder="#order_id" />
          <input type="text" placeholder="#status_message" />
          <button>{confirmText}</button>
        </p>
      </div>
    );
  }
}
