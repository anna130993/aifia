import axios from 'axios';
import {API_URL} from '../config';

/* SELECTORS */
export const getAll = ({products}) => products.data;
export const getPresent = ({products}, id) => products.present && products.present.id === id ? products.present : null;
export const getRequest = ({products}) => products.request;

/*ACTION NAME CREATOR */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/*ACTION TYPES */
const START_REQUEST = createActionName('START_REQUEST');
const ALL_FETCHED = createActionName('ALL_FETCHED');
const SINGLE_FETCHED = createActionName('SINGLE_FETCHED');
const REQUEST_ERROR = createActionName('REQUEST_ERROR');

/*ACTION CREATORS */
export const startRequest = payload => ({payload, type: START_REQUEST});
export const allFetched = payload => ({payload, type: ALL_FETCHED});
export const singleFetched = payload => ({payload, type: SINGLE_FETCHED});
export const requestError = payload => ({payload, type: REQUEST_ERROR});

/* THUNK */
export const fetchAll = () => {
  return async(dispatch) => {
    dispatch(startRequest('GET_ALL'));
    try {
      let res = await axios.get(`${API_URL}/products`);
      dispatch(allFetched(res.data));
    } catch (e) {
      dispatch(requestError(e.message || true));
    }
  };
};

export const fetchSingle = id => {
  return async(dispatch) => {
    dispatch(startRequest('GET_SINGLE'));
    try {
      let res = await axios.get(`${API_URL}/products/${id}`);
      dispatch(singleFetched(res.data));
    } catch (e) {
      dispatch(requestError(e.message || true));
    }
  };
};

/* REDUCER */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
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
    case ALL_FETCHED: {
      const products = action.payload.map(({_id, ...other}) => ({id: _id, ...other}));
      return {
        ...statePart,
        request: {
          ...statePart.request,
          active: false,
          error: false,
        },
        data: products,
      };
    }
    case SINGLE_FETCHED: {
      const {_id, ...other} = action.payload;
      const prodData = {id: _id, ...other};
      return {
        ...statePart,
        request: {
          ...statePart.request,
          active: false,
          error: false,
        },
        present: prodData,
      };
    }
    case REQUEST_ERROR: {
      return {
        ...statePart,
        request: {
          ...statePart.request,
          acitve: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
};
