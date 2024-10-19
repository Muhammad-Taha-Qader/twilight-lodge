import React from "react";

interface CategoryButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center space-y-1 p-2  rounded-lg"
    >
      <div className="text-2xl text-my-cocoa-600 hover:text-my-cocoa-900">{icon}</div>
      <span className="text-sm text-my-cocoa-200">{label}</span>
    </button>
  );
};

export default CategoryButton;
