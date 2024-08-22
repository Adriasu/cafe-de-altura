import Link from "next/link";
import React from "react";

const Buttons = ({ text, typeBtn, link, icon, onClick, type = "button" }) => {
  const buttonStyle = () => {
    switch (typeBtn) {
      case "green":
        return "px-6 py-3 bg-[#2A5B45] rounded text-white";
      case "gray":
        return "px-6 py-3 bg-[#515051] rounded text-white";
      case "brown":
        return "px-6 py-3 bg-[#1F1815] rounded text-white";
      case "add":
        return "p-2 text-white rounded bg-[#2A5B45B2] group-hover:bg-[#2A5B45]";
      case "soldOut":
        return "p-2 text-white rounded bg-[#E3DED7] cursor-default";
      case "white":
        return "px-6 py-3 rounded text-[#2A5B45]";
      case "cart":
        return "min-w-[60px] p-2 text-white rounded bg-[#2A5B45B2] hover:bg-[#2A5B45]";
      default:
        return "";
    }
  };

  const commonClasses =
    "font-semibold leading-4 text-[14px] flex justify-center items-center gap-2";

  if (typeBtn === "soldOut") {
    return (
      <span className={`${commonClasses} ${buttonStyle()}`}>
        {icon} {text}
      </span>
    );
  }

  const ButtonContent = () => (
    <span className={`${commonClasses} ${buttonStyle()}`}>
      {icon} {text}
    </span>
  );

  if (link) {
    return (
      <Link href={link}>
        <ButtonContent />
      </Link>
    );
  }

   return (
    <button
      className={`${commonClasses} ${buttonStyle()}`}
      type={type}
      onClick={onClick}
    >
      {icon} {text}
    </button>
  );
};

export default Buttons;
