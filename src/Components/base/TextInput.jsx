import React from "react";

function TextInput(props) {

   const { label, type, name, id, placeholder } = props

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
          className="block w-full rounded-md border-0 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default TextInput;
