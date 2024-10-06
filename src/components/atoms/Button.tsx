import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  as?: "button" | "link";
  href?: string;
  color?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  as = "button",
  href,
  color = "bg-white hover:bg-neutral-100 text-neutral-900",
  children,
  type = "button",
  className,
  disabled,
  onClick,
}) => {
  const baseClasses = `px-6 pt-2 pb-3 rounded cursor-pointer font-semibold ${color} ${className} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  }`;

  if (as === "link" && href) {
    return (
      <Link to={href} className={baseClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={baseClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
