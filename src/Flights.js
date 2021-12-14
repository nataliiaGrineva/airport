import {Routes, Route, NavLink, Navigate} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Flights.module.scss';
import Departures from './components/Departures/Departures';
import Arrivals from './components/Arrivals/Arrivals';
import SearchBar from './components/SearchBar/SearchBar';
import DateBar from './components/DateBar/DateBar';

import { loadFlights, updateDate } from './store/actions';
import Loader from './components/Loader/Loader';

import { formatDate, formats } from './helpers';


function Flights() {
  const dispatch = useDispatch();
  const date = useSelector(state => state.date);
  const loading = useSelector(state => state.isLoadingFlights);

  useEffect(() => {
    const today = new Date();
    dispatch(updateDate(formatDate(today, formats.serverDate)));
  }, []); 

  useEffect(() => {
    date && dispatch(loadFlights(date));
  },[date]);

console.log('Flights RENDER');
  return (
    <div className={styles.Flights}>
      <Loader loading={loading} />
      <div className={styles.search_container}>
        <span className={styles.heading}>SEARCH FLIGHT</span>
        <SearchBar />
      </div>
      <div className={styles.links}>
        <NavLink
          to='/flights/departures'
          className={({ isActive }) =>
              isActive ? `${styles.active_link} ${styles.left_btn}` : `${styles.link} ${styles.left_btn}`
          }
        >
          DEPARTURES
        </NavLink>

        <NavLink
          to='/flights/arrivals'
          className={({ isActive }) =>
              isActive ? styles.active_link : styles.link
          }
        >
          ARRIVALS
        </NavLink>
      </div>
      <div>
        <DateBar />
      </div>

      <Routes>
        <Route
          path="/departures"
          element={<Departures />}
        />
        <Route
          path="/arrivals"
          element={<Arrivals />}
        />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>

    </div>
  );
}

export default Flights;
