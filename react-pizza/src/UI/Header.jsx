import React from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between bg-yellow-500">
      <Link
        className="px-auto font-pizza ml-5 py-2 uppercase tracking-wider"
        to="/"
      >
        Fast React Pizza co.
      </Link>
      <SearchInput />
      <p className="font-thins mr-5 normal-case tracking-tighter">
        👤 John Fernadis
      </p>
    </header>
  );
}
