import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ type, msg }) => {
  return toast(msg, {
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: false,
    position: toast.POSITION.BOTTOM_CENTER,
    transition: Slide,
    type: type,
  });
};
export { Toast };
