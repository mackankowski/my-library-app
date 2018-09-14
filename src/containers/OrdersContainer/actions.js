export const GET_ORDERS_LIST = 'containers/OrdersContainer/GET_ORDERS_LIST';

export const getOrdersList = ordersRes => ({
  type: GET_ORDERS_LIST,
  ordersRes
});
