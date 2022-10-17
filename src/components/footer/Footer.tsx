import styles from "./footer.module.css";
export const Footer = () => {
  return (
    <footer className={`${styles.footer_container} flex-center m-y-xxl`}>
      <ul className={`${styles.footer__links} flex-center`}>
        <li>
          <a
            className="btn"
            href="https://www.linkedin.com/in/rishikesh-shinde-1211b5192/"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a className="btn" href="https://github.com/rdshinde">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a className="btn" href="https://twitter.com/Rishike16406089">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};
