import { createSelector } from 'reselect';

const makeSelectOrders = () =>
  createSelector(selectOrders(), substate => substate.orders);

export { makeSelectOrders };
