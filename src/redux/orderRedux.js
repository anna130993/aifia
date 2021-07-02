import axios from 'axios';
import {API_URL} from '../config';

/*SELECTORS */
export const getOrder = ({order}) => order.data;
export const getProducts = ({order}) => order.data.products;
export const getRequest = ({order}) => order.request;
export const getCount = ({order}) => {
  let count = 0;
  for(let p of order.data.products) {
    count += p.amount;
  }
  return count;
};

/*ACTION NAME CREATOR */
const reducerName = 'order';
const createActionName = name => `app/${reducerName}/${name}`;

/*ACTION TYPES*/
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const PRODUCT_IN = createActionName('PRODUCT_IN');
const PRODUCT_OUT = createActionName('PRODUCT_OUT');
const START_REQUEST = createActionName('START_REQUEST');
const REQUEST_ERROR = createActionName('REQUEST_ERROR');
const STORE_INFLUX = createActionName('STORE_INFLUX');
const SAVED_ORDER = createActionName('SAVED_ORDER');
const ADD_COMMENT = createActionName('ADD_COMMENT');

/*ACTION CREATORS */
export const addProduct = payload => ({payload, type: ADD_PRODUCT});
export const removeProduct = payload => ({payload, type: REMOVE_PRODUCT});
export const productToCart = payload => ({payload, type: PRODUCT_IN});
export const productOutOfCart = payload => ({payload, type: PRODUCT_OUT});
export const startRequest = payload => ({payload, type: START_REQUEST});
export const requestError = payload => ({payload, type: REQUEST_ERROR});
export const storeInflux = payload => ({payload, type: STORE_INFLUX});
export const savedOrder = payload => ({payload, type: SAVED_ORDER});
export const addComment = payload => ({payload, type: ADD_COMMENT});

/*THUNK*/
export const sendOrder = (orderData) => {
  return async dispatch => {
    dispatch(startRequest('SUBMIT'));
    try {
      const res = await axios.post(`${API_URL}/api/orders`, orderData);
      dispatch(savedOrder(res.data));
    } catch(e) {
      dispatch(requestError(e.message || true));
    }
  };
};

/*REDUCER*/
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const newProd = !statePart.data.products.some(p => p.id === action.payload.id);
      if (newProd) {
        return {
          ...statePart,
          data: {
            ...statePart.data,
            products: [...statePart.data.products, action.payload],
          },
        };
      } else {
        const newProds = statePart.data.products.map(p => p.id === action.payload.id ? ({...p, amount: p.amount + action.payload.amount}) : p);
        return {
          ...statePart,
          data: {
            ...statePart.data,
            products: newProds,
          },
        };
      }
    }
    case PRODUCT_IN: {
      const newProds = statePart.data.products.map(p => p.id === action.payload && p.amount < 30 ? ({...p, amount: p.amount + 1}) : p);
      return {
        ...statePart,
        data: {
          ...statePart.data,
          products: newProds,
        },
      };
    }
    case PRODUCT_OUT: {
      const newProds = statePart.data.products.map(p => p.id === action.payload && p.amount > 1 ? ({...p, amount: p.amount - 1}) : p);
      return {
        ...statePart,
        data: {
          ...statePart.data,
          products: newProds,
        },
      };
    }
    case REMOVE_PRODUCT: {
      const newProds = statePart.data.products.filter(p => p.id !== action.payload);
      return {
        ...statePart,
        data: {
          ...statePart.data,
          products: newProds,
        },
      };
    }
    case STORE_INFLUX: {
      return {
        ...statePart,
        data: {
          ...statePart.data,
          ...action.payload,
        },
      };
    }
    case START_REQUEST: {
      return {
        ...statePart,
        request: {
          type: action.payload,
          active: true,
          error: false,
        },
      };
    }
    case REQUEST_ERROR: {
      return {
        ...statePart,
        request: {
          ...statePart.request,
          active: false,
          error: action.payload,
        },
      };
    }
    case SAVED_ORDER: {
      return {
        data: {
          products: [],
          firstName: '',
          lastName: '',
          email: '',
          address: '',
        },
        request: {
          ...statePart.request,
          active: false,
          error: false,
        },
      };
    }
    case ADD_COMMENT: {
      const newProds = statePart.data.products.map(p => p.id === action.payload.id ? {...p, comment: action.payload.comment} : p);
      return {
        ...statePart,
        data: {
          ...statePart.data,
          products: newProds,
        },
      };
    }
    default:
      return statePart;
  }
};
