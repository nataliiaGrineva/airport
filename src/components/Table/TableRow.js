/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { localTime } from '../../helpers';
import styles from './TableRow.module.scss';
import { statusFlight } from '../../api';
import { memo } from 'react';

const TableRow = ({ product, direction, date, index }) => {
  if (!product.timeBoard && !product.timeArrShedule) {
    return null;
  }

  return (
    <tr className={classNames(styles.row, { [styles.row_grey]: index % 2 === 0 })}>
      <td className={styles.td}>
        <span
          className={classNames(
            styles.term,
            { [styles.term_a]: product.term === 'A' },
            { [styles.term_d]: product.term === 'D' }
          )}>
          {product.term}
        </span>
      </td>

      {direction === 'departure' && <td className={styles.td}>{localTime(product.timeBoard)}</td>}

      {direction === 'arrival' && (
        <td className={styles.td}>{localTime(product.timeArrShedule)}</td>
      )}

      {direction === 'departure' && <td className={styles.td}>{product['airportToID.city_en']}</td>}
      {direction === 'arrival' && <td className={styles.td}>{product['airportFromID.city_en']}</td>}
      <td className={styles.td}>{statusFlight(product.status)}</td>
      <td className={styles.td}>
        <div className={styles.company}>
          {product.logo && (
            <img alt="logo" src={`https://api.iev.aero/${product.logo}`} className={styles.logo} />
          )}{' '}
          <div className={styles.comp_name}>{product.airline.en.name}</div>
        </div>
      </td>
      <td className={styles.td} style={{ paddingLeft: '50px' }}>
        {product.codeShareData[0].codeShare}
      </td>
      <td className={styles.td}>
        <Link to={`/${direction}/${product.ID}?dt=${date}`} className={styles.details}>
          Flight details
        </Link>
      </td>
    </tr>
  );
};

export default memo(TableRow);
