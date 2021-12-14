import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.title}>
        404
        <br />
        page not found
      </h1>
      <div className={styles.text}>
        <span>
          We&apos;re sorry, but the page you&apos;re looking for doesn&apos;t exist.
          <br />
          This may be because the URL was incorrect or the page was deleted.
        </span>
      </div>
    </div>
  );
};

export default NotFoundPage;
