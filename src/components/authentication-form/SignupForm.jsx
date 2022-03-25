import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PasswordInput } from "../password-input/PasswordInput";
import { useAxios } from "../../utils/useAxios";
import { Loader } from "../loader/Loader";
export const SignupForm = () => {
  const [signupCredentials, setSignupCredentials] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [apiURL, setApiUrl] = useState(null);
  const pwdChangeHandler = (pwd) => {
    setSignupCredentials((prev) => ({ ...prev, password: pwd }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setApiUrl("api/auth/signup");
  };

  const { isLoaderLoading, serverResponse } = useAxios(apiURL, "POST", {
    ...signupCredentials,
  });
  useEffect(() => {
    if (serverResponse) {
      serverResponse.status === 201 &&
        localStorage.setItem("token", serverResponse.data.encodedToken);
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
            onChange={(e) =>
              setSignupCredentials((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
            required
          />
        </div>

        <PasswordInput data={{ getPassword: pwdChangeHandler }} />
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
