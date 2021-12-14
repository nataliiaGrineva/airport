import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './SearchBar.module.scss';
import { searchQuery } from '../../store/actions';

const SearchBar = () => {
  const query = useSelector((state) => state.query);
  const dispatch = useDispatch();
  const [searchQ, setSearchQ] = useState(query);

  const handleSearchQuery = (event) => {
    setSearchQ(event.target.value);
  };

  const searchSubmit = (event) => {
    event.preventDefault();
    if (query === searchQ) {
      return;
    }
    dispatch(searchQuery(searchQ));
  };

  console.log('query', query);

  return (
    <form className={styles.search_bar} onSubmit={searchSubmit}>
      <input
        type="text"
        onChange={handleSearchQuery}
        placeholder="Airline, destination or flight #"
        value={searchQ}
        className={styles.search}
        onBlur={searchSubmit}
      />
      <button type="submit" className={styles.search_btn}>
        SEARCH
      </button>
    </form>
  );
};

export default SearchBar;
