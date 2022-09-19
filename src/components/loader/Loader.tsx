import styles from "./loader.module.css";
export const Loader = () => {
  return (
    <div className={`${styles.loader__overlay}`}>
      <div className={`${styles.lds_ellipsis}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
