import { GET_ORDERS_LIST } from './actions';

const initialState = {
  orders: null
};

function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ORDERS_LIST:
      return {
        ...state,
        orders: []
      };
    default:
      return state;
  }
}

export default ordersReducer;
