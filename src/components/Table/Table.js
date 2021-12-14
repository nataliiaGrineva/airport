import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import { useSelector } from "react-redux";
import { createSelector } from 'reselect';
import styles from './Table.module.scss';

const getFilteredFlights = createSelector(
  (state, direction) => state[direction],
  state => state.query,
  (fl, q) => {
    const smQ = q.toLowerCase();
    console.log('Filtering....');
    
    return fl.filter(item => {
      const city = item['airportToID.city_en'] || item['airportFromID.city_en'] || '';
      const airline = item.airline.en.name || '';
      const code = item.codeShareData[0].codeShare || '';

      return city.toLowerCase().includes(smQ) ||
        airline.toLowerCase().includes(smQ) ||
        code.toLowerCase().includes(smQ)
    })}
  );

const Table = ({ direction }) => {

  const filteredFlights = useSelector(state => getFilteredFlights(state, direction));
  const date = useSelector(state => state.date);

  console.log(direction);
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
        {filteredFlights.map((flight, index) => (
          <TableRow
            key={flight.ID}
            product={flight}
            direction={direction}
            date={date}
            index={index}
          />
        ))}
        </tbody>
      </table>
    </div>
  )
};

export default Table;
