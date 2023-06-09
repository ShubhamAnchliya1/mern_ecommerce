import React from "react";

function CustomInput(props) {
  const { type, name, className, placeholder } = props;

  return (
    <>
      <div>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={`form-control ${className}`}
        />
      </div>
    </>
  );
}

export default CustomInput;
