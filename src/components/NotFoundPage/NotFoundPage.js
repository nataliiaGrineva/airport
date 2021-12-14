import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.title}>
        404
        <br />page not found
      </h1>
      <div className={styles.text}>
        <span>
        We're sorry, but the page you're looking for doesn't exist.
        <br />This may be because the URL was incorrect or the page was deleted.
        </span>
      </div>
    </div>
  )
}

export default NotFoundPage;
