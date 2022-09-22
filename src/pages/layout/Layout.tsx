import { ToastContainer } from "react-toastify";
import { Footer, Navbar } from "../../components";

type Props = {
  children: JSX.Element;
};

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <ToastContainer />
      <header className="header-container" style={{ position: "relative" }}>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
