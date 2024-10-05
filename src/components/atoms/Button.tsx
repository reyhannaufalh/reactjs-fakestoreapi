import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  as?: "button" | "link";
  href?: string;
  color?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  as = "button",
  href,
  color = "bg-white hover:bg-neutral-100 text-neutral-900",
  children,
  type = "button",
  className,
}) => {
  const baseClasses = `px-6 pt-2 pb-3 rounded cursor-pointer font-semibold ${color} ${className}`;

  if (as === "link" && href) {
    return (
      <Link to={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={baseClasses}>
      {children}
    </button>
  );
};

export default Button;
