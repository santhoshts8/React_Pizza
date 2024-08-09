import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, onClick, type, to }) {
  const style = {
    primary:
      "rounded-full border border-stone-200 bg-yellow-400 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none md:px-6 md:py-3",
    secondary:
      "rounded-full border border-stone-200 bg-gray-400 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none md:px-6 md:py-3",
  };

  if (to) {
    return (
      <Link className={style[type]} to={to}>
        {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`${type == "small" ? "rounded-full border border-stone-200 bg-green-100 px-1 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none md:px-6 md:py-3" : "rounded-full border border-stone-200 bg-yellow-400 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none md:px-6 md:py-3"}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
