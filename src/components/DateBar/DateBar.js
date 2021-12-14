import Dates from './Dates';
import styles from './DateBar.module.scss';

const DateBar = () => {

  return (
    <div className={styles.date_calendar_wrap}>
      <Dates />
    </div>
  );
}

export default DateBar;
