import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { formatDate, formats } from '../../helpers';
import styles from './Calendar.module.scss';

const Calendar = ({ date, selectDate }) => {
  const reg = /(\d{2})-(\d{2})-(\d{4})/;
  const calDate = new Date(date.replace(reg,'$2-$1-$3'));

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className={styles.calendar_wrapper}>
      <div className={styles.date_str}>{formatDate(calDate, formats.fullMonth)}</div>
      <button className={styles.calendar_btn} onClick={onClick} ref={ref} />
    </div>
  ));
  return (
    <DatePicker
      selected={calDate}
      onChange={(date) => selectDate(formatDate(date, formats.serverDate))}
      customInput={<ExampleCustomInput />}
    />
  );
};

export default Calendar;
