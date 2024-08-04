import React from "react";

const LitUpButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="p-[3px] relative" onClick={handleClick}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue to-blue-100 rounded-lg" />
      <div className="px-6 py-2 bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
        >
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </span>
      </div>
    </button>
  );
};

export default LitUpButton;