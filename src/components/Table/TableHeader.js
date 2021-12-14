import React from 'react';
import styles from './TableHeader.module.scss';

const TableHeader = () => {
  return (
    <tr>
      <th className={styles.table_h}>Terminal</th>
      <th className={styles.table_h}>Local time</th>
      <th className={styles.table_h}>Destination</th>
      <th className={styles.table_h}>Status</th>
      <th className={styles.table_h}>Airline</th>
      <th className={styles.table_h} style={{ paddingLeft: '50px' }}>
        Flight
      </th>
      <th className={styles.table_h}></th>
    </tr>
  );
};

export default TableHeader;
