import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts";
import { Loader } from "../loader/Loader";
import styles from "./authentication.module.css";

type LoginForm = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const [showPwd, setShowPwd] = useState<boolean>(false);
  const { loginHandler, serverResponse, isLoading } = useAuth();
  const [loginCredentials, setLoginCredentials] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const submitHandler = (e: any): void => {
    e.preventDefault();
    loginHandler(loginCredentials);
    setLoginCredentials((prev) => ({ ...prev, email: "", password: "" }));
  };

  return (
    <div
      className={`${styles.login_form} m-md p-xl text-center border-rounded-sm`}
    >
      {isLoading && <Loader />}
      <h2 className="text-gray text-1 bold-lg ">Login</h2>
      <form className="text-start" onSubmit={(e) => submitHandler(e)}>
        <div className={`input-group required `} success-message="">
          <label htmlFor="email-id"> Email </label>
          <input
            type="email"
            id="email-id"
            value={loginCredentials.email}
            onChange={(e) =>
              setLoginCredentials((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            required
          />
        </div>
        <div
          className={`input-group required`}
          error-message={`Passwords should match.`}
          success-message={`All looks good!`}
        >
          <label htmlFor="confirm-password">Password</label>
          <div className={styles.pwd_input}>
            <input
              type={`${showPwd ? "text" : "password"}`}
              id="confirm-password"
              required
              value={loginCredentials.password}
              onChange={(e) =>
                setLoginCredentials((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
            <div
              className={`${styles.show_pwd}`}
              onClick={() => setShowPwd((prev) => !prev)}
            >
              <i
                className={`fa-solid ${showPwd ? "fa-eye" : "fa-eye-slash"}`}
              ></i>
            </div>
          </div>
        </div>
        <div className="input-group text-center">
          <button
            type="submit"
            onClick={(e) => e.stopPropagation()}
            className={`${styles.submit_btn} btn btn-default border-rounded-lg`}
          >
            Submit
          </button>
        </div>
        <div className="text-center">
          <div
            className="btn btn-link"
            onClick={(e) => {
              e.stopPropagation();
              setLoginCredentials({
                email: "test@mail.com",
                password: "Test@123",
              });
            }}
          >
            Use Guest Credentials
          </div>
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
