import React from "react";

const TabButton = ({ selectTab, children, active }) => {
  const buttonClass = active
    ? "text-white border-b border-b-white"
    : "text-[#ADB7BE]";
  return (
    <button
      onClick={selectTab}
      className={`mr-3 font-semibold hover:text-white ${buttonClass}`}
    >
      <p>{children}</p>
    </button>
  );
};

export default TabButton;
