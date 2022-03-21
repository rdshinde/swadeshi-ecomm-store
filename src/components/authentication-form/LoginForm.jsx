import "./authentication.css";
import { Link } from "react-router-dom";
import { PasswordInput } from "../password-input/PasswordInput";
export const LoginForm = () => {
  return (
    <div className="login-form m-md p-xl text-center border-rounded-sm">
      <h2 className="text-gray text-1 bold-lg ">Login</h2>
      <form className="text-start">
        <div className={`input-group required `} success-message="">
          <label htmlFor="email-id"> Email </label>
          <input type="email" id="email-id" required />
        </div>
        <PasswordInput data={{ label: "Password" }} />
        <div className="input-group text-center">
          <button className={`submit-btn btn btn-default border-rounded-lg`}>
            Submit
          </button>
        </div>
        <div className="text-center">
          <div className="btn btn-link">Use Guest Credentials</div>
          <div>
            <span className="bold-lg text-gray">Not Registered?</span>
            <Link className="btn btn-link" to="/signup">
              Signup Here
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
