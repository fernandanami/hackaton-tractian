import React from 'react';

const InputField = ({ label, type = 'text', placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-black mb-2">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-600 transition duration-200"
      />
    </div>
  );
};

export default InputField;
