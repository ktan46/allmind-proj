import React from "react";

type BaseButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function BaseButton({
  children,
  onClick,
  className = "",
}: BaseButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        text-black rounded-4xl font-medium
        px-4 py-2 hover:bg-gray-300
        cursor-pointer transition-colors duration-400
        ${className}
      `}
    >
      {children}
    </button>
  );
}
