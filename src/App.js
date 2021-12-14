import {Routes, Route, Navigate} from 'react-router-dom';
import styles from './App.module.scss';
import Flights from './Flights';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import "react-datepicker/dist/react-datepicker.css";

function App () {
  return (
    <div className={styles.app}>
      <Routes>
      <Route path="/" element={<Navigate replace to="/flights/departures" />} />
        <Route
          path='/flights/*'
          element={<Flights />}
        />
        <Route
          path="/404"
          element={<NotFoundPage />}
        />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
