import { START_LOADING_FLIGHTS } from './types';
import { LOADING_FLIGHTS_SUCCESS } from './types';
import { SET_ARRIVAL } from './types';
import { SET_DEPARTURE } from './types';
import { LOADING_FLIGHTS_ERROR } from './types';
import { UPDATE_DATE } from './types';
import { SEARCH_QUERY } from './types';

import { getFlights } from '../api';

export const startLoadingFlights = () => ({ type: START_LOADING_FLIGHTS });

export const loadingFlightsSuccess = () => ({ type: LOADING_FLIGHTS_SUCCESS });

export const setArrival = (arrival) => ({
  type: SET_ARRIVAL,
  payload: arrival
});

export const setDeparture = (departure) => ({
  type: SET_DEPARTURE,
  payload: departure
});
export const loadingFlightsError = () => ({ type: LOADING_FLIGHTS_ERROR });

export const updateDate = (date) => ({
  type: UPDATE_DATE,
  payload: date
});

export const searchQuery = (query) => ({
  type: SEARCH_QUERY,
  payload: query
});

export const loadFlights = (date) => async (dispatch) => {
  dispatch(startLoadingFlights());

  try {
    const { arrival, departure } = await getFlights(date);
    dispatch(loadingFlightsSuccess());
    dispatch(setArrival(arrival));
    dispatch(setDeparture(departure));
  } catch {
    dispatch(loadingFlightsError());
  }
};
