// import { Props } from "typescript";
import { Footer, Navbar } from "../../components";
import styles from "./layout.module.css";
// import { Footer, Navbar } from "../../components";
// import { ToastContainer } from "react-toastify";
type Props = {
  children: JSX.Element;
};

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <header className="header-container">
        <Navbar />
        {/* <ToastContainer /> */}
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
