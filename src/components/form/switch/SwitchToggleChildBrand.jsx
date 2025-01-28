import React from "react";

const SwitchToggleChildBrand = ({ label, handleToggle, toggleState }) => {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-gray-700 dark:text-gray-300">{label}</span>
      <label htmlFor="toggle" className="relative cursor-pointer">
        <input
          type="checkbox"
          id="toggle"
          className="sr-only"
          checked={toggleState}
          onChange={(e) => handleToggle(e.target.checked)}
        />
        <div
          className={`w-10 h-5 bg-gray-300 rounded-full shadow-inner transition ${
            toggleState ? "bg-blue-500" : "bg-gray-300"
          }`}
        ></div>
        <div
          className={`absolute w-4 h-4 bg-white rounded-full shadow top-0.5 left-0.5 transform transition ${
            toggleState ? "translate-x-5" : "translate-x-0"
          }`}
        ></div>
      </label>
    </div>
  );
};

export default SwitchToggleChildBrand;
