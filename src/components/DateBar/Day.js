import classNames from 'classnames';
import { formatDate, formats } from '../../helpers';
import styles from './Day.module.scss';

const Day = ({ date, order, onChangeDate, serverDate }) => {

  return (
    <div
      // className={`${styles.day_container} ${styles.active_day}`}
      className={classNames([styles.day_container], 
        {[styles.active_day]: formatDate(date, formats.serverDate) === serverDate},
        {[styles.not_active_day]: formatDate(date, formats.serverDate) !== serverDate}
      )}
      onClick={() => onChangeDate(formatDate(date, formats.serverDate))}
    >
      <div className={styles.day_number}>
        {formatDate(date, formats.fullMonth)}
      </div>
      <div className={styles.day_title}>
        {order}
      </div>
    </div>
  )
}

export default Day;
