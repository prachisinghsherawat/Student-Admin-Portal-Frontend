import React from "react";

function TextInput(props) {
  const { label, type, name, id, placeholder, error, onChange } = props;

  const handleInputChange = (e) => {
    if (onChange && error) {
      onChange({ ...e, target: { ...e.target, name } });
    } else if (onChange) {
      onChange(e);
    }
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          name={name}
          id={id}
          className={`block w-full rounded-md border-0 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${
            error ? "border-red-500" : ""
          }`}
          placeholder={placeholder}
          onChange={handleInputChange}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    </div>
  );
}

export default TextInput;
