import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import { START_LOADING_FLIGHTS } from './types';
import { LOADING_FLIGHTS_SUCCESS } from './types';
import { SET_ARRIVAL } from './types';
import { SET_DEPARTURE } from './types';
import { LOADING_FLIGHTS_ERROR } from './types';
import { UPDATE_DATE } from './types';
import { SEARCH_QUERY } from './types';

const initialState = {
  isLoadingFlights: false,
  isErrorLoadingFlights: false,
  arrival: [],
  departure: [],
  date: '07-12-2021',
  query: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING_FLIGHTS:
      return { ...state, isLoadingFlights: true };
    case LOADING_FLIGHTS_SUCCESS:
      return { ...state, isLoadingFlights: false };
    case SET_ARRIVAL:
      return { ...state, arrival: action.payload };
    case SET_DEPARTURE:
      return { ...state, departure: action.payload };
    case LOADING_FLIGHTS_ERROR:
      return { ...state, isErrorLoadingFlights: true };
    case UPDATE_DATE:
      return { ...state, date: action.payload };
    case SEARCH_QUERY:
      return { ...state, query: action.payload };
    default:
      return { ...state };
  }
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
