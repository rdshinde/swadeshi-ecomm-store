import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PasswordInput } from "../index";
import { Loader } from "../loader/Loader";
import { useAuth } from "../../contexts";
import { Toast } from "../../utils";
export const SignupForm = () => {
  const navigate = useNavigate();
  const [signupCredentials, setSignupCredentials] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const pwdChangeHandler = (pwd) => {
    setSignupCredentials((prev) => ({ ...prev, password: pwd }));
  };
  const { serverResponse, isLoaderLoading, signupHandler } = useAuth();

  const submitHandler = (e) => {
    e.preventDefault();
    signupHandler(signupCredentials);
    setSignupCredentials((prev) => ({
      ...prev,
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    }));
  };
  useEffect(() => {
    if (serverResponse) {
      serverResponse.status === 201 &&
        localStorage.setItem("token", serverResponse.data.encodedToken);
      navigate("/login");
      Toast({ type: "success", msg: "Account Created Successfully!" });
    }
  }, [serverResponse]);
  return (
    <div className="login-form m-md p-xl text-center border-rounded-sm">
      {isLoaderLoading && <Loader />}
      <h2 className="text-gray text-1 bold-lg ">Signup</h2>

      <form className="text-start" onSubmit={(e) => submitHandler(e)}>
        <div
          className={`input-group required`}
          success-message={`All looks good!`}
        >
          <label htmlFor="first-name"> First Name </label>
          <input
            type="text"
            id="first-name"
            value={signupCredentials.firstName}
            onChange={(e) =>
              setSignupCredentials((prev) => ({
                ...prev,
                firstName: e.target.value,
              }))
            }
            required
          />
        </div>
        <div
          className={`input-group required`}
          success-message={`All looks good!`}
        >
          <label htmlFor="last-name"> Last Name </label>
          <input
            type="text"
            id="last-name"
            value={signupCredentials.lastName}
            onChange={(e) =>
              setSignupCredentials((prev) => ({
                ...prev,
                lastName: e.target.value,
              }))
            }
            required
          />
        </div>
        <div
          className={`input-group required`}
          success-message={`All looks good!`}
        >
          <label htmlFor="email"> Email </label>
          <input
            type="email"
            id="email"
            value={signupCredentials.email}
            onChange={(e) =>
              setSignupCredentials((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            required
          />
        </div>

        <PasswordInput
          data={{
            getPassword: pwdChangeHandler,
          }}
        />
        <div className="input-group text-center">
          <button
            type="submit"
            onClick={(e) => e.stopPropagation()}
            className={`btn btn-default border-rounded-lg submit-btn`}
          >
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
