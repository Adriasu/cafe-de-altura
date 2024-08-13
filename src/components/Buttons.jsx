import Link from "next/link";
import React from "react";

const Buttons = ({ text, typeBtn, link, icon }) => {
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
      case "white":
        return "px-6 py-3 rounded text-[#2A5B45]";

      default:
        break;
    }
  };
  return (
    <Link
      className={`font-semibold, leading-4 text-[14px] flex justify-center items-center gap-2 ${buttonStyle()}`}
      href={{ link }}
    >
      {icon} {text}
    </Link>
    // <a
    //   className={`font-semibold, leading-4 text-[14px] ${buttonStyle()}`}
    //   href=""
    // >
    //   {text}
    // </a>
  );
};

export default Buttons;
