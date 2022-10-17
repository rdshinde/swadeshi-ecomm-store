import { ToastContainer } from "react-toastify";
import { Footer, Navbar } from "../../components";
import styles from "./layout.module.css";
type Props = {
  children: JSX.Element;
};

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <ToastContainer />
      <header
        className={styles.header_container}
        style={{ position: "relative" }}
      >
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
