import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type ToastInput = {
  type: "info" | "success" | "warning" | "error" | "default";
  message: string;
};

const Toast = ({ type, message }: ToastInput) => {
  return toast(message, {
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: false,
    position: toast.POSITION.TOP_RIGHT,
    transition: Slide,
    type: type,
  });
};
export { Toast };
