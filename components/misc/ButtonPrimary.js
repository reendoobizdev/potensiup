import React from "react";

const ButtonPrimary = ({ children, addClass, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={
        `py-3 lg:py-4 px-3 md:px-12 text-white-500 font-semibold rounded-lg ${disabled? "bg-gray-400" : "bg-cyan-500"} hover:shadow-cyan-md transition-all outline-none ${addClass}`
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
