import { React, useState } from "react";

export const PasswordInput = ({ data: { label } }) => {
  const [showPwd, setShowPwd] = useState(false);
  return (
    <div
      className={`input-group required`}
      error-message={`Passwords should match.`}
      success-message={`All looks good!`}
    >
      <label htmlFor="pwd-check-reset">{label} </label>
      <div className="pwd-input">
        <input
          type={`${showPwd ? "text" : "password"}`}
          id="pwd-check-reset"
          required
        />
        <div className="show-pwd" onClick={() => setShowPwd((prev) => !prev)}>
          <i className={`fa-solid ${showPwd ? "fa-eye" : "fa-eye-slash"}`}></i>
        </div>
      </div>
    </div>
  );
};
