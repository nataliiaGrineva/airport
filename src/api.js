import axios from "axios";

// 'https://api.iev.aero/api/flights/07-12-2021'

const FLIGHTS_URL = 'https://api.iev.aero/api/flights/';

export const getFlights = async (date) => {
  try {
    const allFlights = await axios.get(`${FLIGHTS_URL}${date}`);
    const arrival = allFlights.data.body.arrival;
    const departure = allFlights.data.body.departure;
    return {arrival, departure};

  } catch (error) {
    console.warn(error);
  }
}

export const statusFlight = (status) => {
  switch (status) {
    case 'ON':
      return 'On time';
    case 'CX':
      return 'Canceled';
    case 'LN':
      return 'Landed';
    case 'CK':
      return 'Check-in';
    case 'FR':
      return 'In flight';
    case 'BD':
      return 'Boarding';
    case 'DP':
      return 'Departed';
    case 'DV':
      return 'Route change';
    case 'GC':
      return 'Gate closed';
    default:
      return status;
  }
};