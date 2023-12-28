import React, { useState } from "react";

const FormInput = (props: any) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e: any) => {
    setFocused(true);
  };
  return (
    <div className="contact-form">
      <label className="form-label">{label}</label>
      <input
        className="form-input"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className="form-error">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
