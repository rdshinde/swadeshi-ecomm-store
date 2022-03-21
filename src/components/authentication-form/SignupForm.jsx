import { React } from "react";
import { Link } from "react-router-dom";
import { PasswordInput } from "../password-input/PasswordInput";

export const SignupForm = () => {
  return (
    <div className="login-form m-md p-xl text-center border-rounded-sm">
      <h2 className="text-gray text-1 bold-lg ">Signup</h2>
      <form className="text-start">
        <div
          className={`input-group required`}
          success-message={`All looks good!`}
        >
          <label htmlFor="email"> Email </label>
          <input type="email" id="email" required />
        </div>
        <div className={`input-group required`} success-message={``}>
          <label htmlFor="password"> Create New Password </label>
          <input type="password" id="password" required />
        </div>
        <PasswordInput data={{ label: "Confirm Password" }} />
        <div className="input-group text-center">
          <button className={`btn btn-default border-rounded-lg submit-btn`}>
            Submit
          </button>
        </div>
        <div className="text-center">
          <span className="bold-lg text-gray">Already Registered?</span>
          <Link className="btn btn-link" to="/login">
            Login Here
          </Link>
        </div>
      </form>
    </div>
  );
};
