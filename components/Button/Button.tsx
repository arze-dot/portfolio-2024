import { ReactNode } from "react";

type ButtonProps = {
  disabled?: boolean;
  className?: string;
  onClick: () => void;
  children: ReactNode;
};
const Button = ({ disabled, className, onClick, children }: ButtonProps) => {
  return (
    <>
      <button
        className={`p-2 rounded-md hover:border hover:border-white hover:shadow-sm hover:shadow-gray-100 ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
