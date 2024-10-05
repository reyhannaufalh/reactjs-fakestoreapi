import React from "react";

type LabelProps = {
  children: React.ReactNode;
  htmlFor: string;
  required?: boolean;
};
const Label: React.FC<LabelProps> = ({ children, htmlFor, required }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
    >
      {children} {required && <span className="text-red-500">*</span>}
    </label>
  );
};

export default Label;
