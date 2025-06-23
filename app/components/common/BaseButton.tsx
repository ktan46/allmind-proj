import React from "react";

type BaseButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function BaseButton({ children, onClick }: BaseButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white text-black rounded-2xl font-medium px-6 py-2 hover:bg-gray-300 cursor-pointer transition-colors duration-400"
    >
      {children}
    </button>
  );
}
