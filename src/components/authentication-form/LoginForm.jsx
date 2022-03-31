import "./authentication.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth/authContext";
import { useNavigate } from "react-router-dom";
import { Loader } from "../loader/Loader";
import { Toast } from "../../utils";
export const LoginForm = () => {
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(false);
  const { userAuthDispatch, loginHandler, serverResponse, isLoaderLoading } =
    useAuth();
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    loginHandler(loginCredentials);
    setLoginCredentials((prev) => ({ ...prev, email: "", password: "" }));
  };

  useEffect(() => {
    if (serverResponse) {
      const { data, status } = serverResponse;
      if (status === 200) {
        localStorage.setItem("token", data.encodedToken);
        userAuthDispatch({
          type: "LOGIN",
          payload: {
            encodedToken: data.encodedToken,
            user: { ...data.foundUser },
          },
        });
        navigate("/");
        Toast({ type: "success", msg: "Login Successful!" });
      }
    }
  }, [serverResponse]);

  return (
    <div className="login-form m-md p-xl text-center border-rounded-sm">
      {isLoaderLoading && <Loader />}
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
          <div className="pwd-input">
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
              className="show-pwd"
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
            className={`submit-btn btn btn-default border-rounded-lg`}
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
