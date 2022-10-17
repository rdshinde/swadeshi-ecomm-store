import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./authentication.module.css";
import { PasswordInput } from "../password-input/PasswordInput";
import { useAuth } from "../../contexts";
import { Loader } from "../loader/Loader";
type SignupForm = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export const SignupForm = () => {

  const [signupCredentials, setSignupCredentials] = useState<SignupForm>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const pwdChangeHandler = (pwd: string) => {
    setSignupCredentials((prev) => ({ ...prev, password: pwd }));
  };
  const { signupHandler, isLoading } = useAuth();

  const submitHandler = (e: any) => {
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

  return (
    <div
      className={`${styles.login_form} m-md p-xl text-center border-rounded-sm`}
    >
      {isLoading && <Loader />}
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
            password: signupCredentials.password,
          }}
        />
        <div className="input-group text-center">
          <button
            type="submit"
            onClick={(e) => e.stopPropagation()}
            className={`btn btn-default border-rounded-lg ${styles.submit_btn}`}
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
