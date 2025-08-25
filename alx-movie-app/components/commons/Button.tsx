import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  action?: () => void;
  title: string;
}

const Button: React.FC<ButtonProps> = ({ children, action, title }) => {
  return (
    <button
      onClick={action}
      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      {children}
      {title}
    </button>
  );
};

export default Button;
