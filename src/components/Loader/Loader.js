/* eslint-disable react/prop-types */
import styles from './Loader.module.scss';

const Loader = ({ loading }) => {
  if (!loading) {
    return null;
  }
  return (
    <div className={styles.loader}>
      <div className={styles.pacman}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
