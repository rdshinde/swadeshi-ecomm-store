import { useEffect, useState } from "react";

export const PasswordInput = ({data:{getPassword}}) => {
  const [passwordState, setPasswordState] = useState({
    isMatching: false,
    pwd: { initialPwd: null, confirmedPwd: null },
  });
  const {
    isMatching,
    pwd: { initialPwd, confirmedPwd },
  } = passwordState;

  const [showPwd, setShowPwd] = useState(false);
  useEffect(() => {
    if (initialPwd === confirmedPwd) {
      setPasswordState((prev) => ({ ...prev, isMatching: true }));
      getPassword(confirmedPwd);
    } else {
      setPasswordState((prev) => ({ ...prev, isMatching: false }));
    }
  }, [passwordState.pwd]);

  return (
    <div className="text-start">
      <div
        className={`input-group required ${initialPwd && "success"}`}
        success-message={`${initialPwd && "All looks good!"}`}
      >
        <label htmlFor="password">Password</label>
        <div className="pwd-input">
          <input
            type={`${showPwd ? "text" : "password"}`}
            id="password"
            required
            onChange={(e) =>
              setPasswordState((prev) => {
                return {
                  ...prev,
                  pwd: { ...prev.pwd, initialPwd: e.target.value },
                };
              })
            }
          />
        </div>
      </div>
      <div
        className={`input-group required  ${
          isMatching ? confirmedPwd && "success" : "error"
        }`}
        error-message={`Passwords should match.`}
        success-message={`${confirmedPwd && "All looks good!"}`}
      >
        <label htmlFor="confirm-password">Confirm Password</label>
        <div className="pwd-input">
          <input
            type={`${showPwd ? "text" : "password"}`}
            id="confirm-password"
            required
            onChange={(e) =>
              setPasswordState((prev) => {
                return {
                  ...prev,
                  pwd: { ...prev.pwd, confirmedPwd: e.target.value },
                };
              })
            }
          />
          <div className="show-pwd" onClick={() => setShowPwd((prev) => !prev)}>
            <i
              className={`fa-solid ${showPwd ? "fa-eye" : "fa-eye-slash"}`}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
