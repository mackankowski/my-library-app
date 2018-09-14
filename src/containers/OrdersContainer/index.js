import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { messages } from '../../constants/messages';

export class OrdersContainer extends PureComponent {
  state = {
    orders: null,
    order_id: null,
    status_id: null
  };
  componentDidMount() {
    //this.props.getOrdersList();
    fetch('/sql/orders/orders/list')
      .then(res => res.json())
      .then(res => this.setState({ orders: res.recordset }));
  }
  render() {
    //const { orders } = this.props;
    const { orders, order_id, status_id } = this.state;
    const { confirmText } = messages;
    return (
      <div>
        <h2>Orders</h2>
        {order_id && <p>order_id: {order_id}</p>}
        {status_id && <p>status_id: {status_id}</p>}
        <table>
          <tbody>
            <tr>
              <th>order_id</th>
              <th>status_id</th>
              <th>status_message</th>
              <th>storages_id</th>
            </tr>
            {orders &&
              orders.map(i => {
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
        <p style={{ color: 'green' }}>
          Change status:{' '}
          <input
            onChange={e => this.setState({ order_id: e.target.value })}
            type="number"
            placeholder="#order_id"
          />
          <input
            onChange={e => this.setState({ status_id: e.target.value })}
            type="text"
            placeholder="#status_id"
          />
          <button>{confirmText}</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  //orders: makeSelectOrders()
});

const mapDispatchToProps = {
  //getOrdersList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersContainer);
