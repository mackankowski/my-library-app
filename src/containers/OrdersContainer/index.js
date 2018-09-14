import React, { PureComponent } from 'react';
import { messages } from '../../constants/messages';

export class OrdersContainer extends PureComponent {
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
        <h2>Orders</h2>
        <table>
          <tbody>
            <tr>
              <th>order_id</th>
              <th>status_id</th>
              <th>status_message</th>
              <th>storages_id</th>
            </tr>
            {res &&
              res.map(i => {
                return (
                  <tr key={i.order_id}>
                    <td>{i.order_id}</td>
                    <td>{i.status_id}</td>
                    <td />
                    <td>{i.storage_ids}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <p>
          Change status: <input type="number" placeholder="#order_id" />
          <input type="text" placeholder="#status_message" />
          <button>{confirmText}</button>
        </p>
      </div>
    );
  }
}
