import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateDate } from '../../store/actions';
import styles from './Dates.module.scss';
import Day from './Day';
import Calendar from './Calendar';


const Dates = () => {

  const [dates, setDates] = useState([]);

  const dispatch = useDispatch();
  const date = useSelector(state => state.date);

  useEffect(() => {
    const todayDate = Date.now();
    const days = [
      {order: 'yesterday',
      date: new Date(todayDate - 24*60*60*1000),
      },
      {order: 'today',
      date: new Date(todayDate),
      },
      {order: 'tomorrow',
      date: new Date(todayDate + 24*60*60*1000),
      },
    ];

    setDates(days);
  }, []);

  const handleChangeDate = (dateNew) => {
    if (dateNew === date) {
      return;
    }

    dispatch(updateDate(dateNew));
  };

  return (
    <div className={styles.calendar_dates_container}>
      <div className={styles.calendar_container}>
        <Calendar date={date} selectDate={handleChangeDate} />
      </div>
      <div className={styles.dates_container}>
        {dates.map(item => (
          <Day
            date={item.date}
            order={item.order}
            onChangeDate={handleChangeDate}
            serverDate={date}
            key={item.order}
          />
        ))}
      </div>
    </div>

  )
}

export default Dates;
