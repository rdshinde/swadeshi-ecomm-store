import React from "react";
import { useEffect, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "../../services";
import styles from "./password-input.module.css";

type PasswordState = {
  isMatching: boolean;
  pwd: {
    initialPwd: string;
    confirmedPwd: string;
  };
};

export const PasswordInput = ({ data: { getPassword, password } }: any) => {
  const [passwordState, setPasswordState] = useState<PasswordState>({
    isMatching: false,
    pwd: { initialPwd: "", confirmedPwd: "" },
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
            value={passwordState.pwd.initialPwd}
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
        <div className={styles.pwd_input}>
          <input
            type={`${showPwd ? "text" : "password"}`}
            id="confirm-password"
            value={passwordState.pwd.confirmedPwd}
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
          <div
            className={`${styles.show_pwd}`}
            onClick={() => setShowPwd((prev) => !prev)}
          >
            {showPwd ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>
        </div>
      </div>
    </div>
  );
};
