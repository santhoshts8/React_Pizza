import React from "react";
import { useState } from "react";

export default function () {
  const [id, setId] = useState();
  return (
    <input
      className="w-64 rounded-full bg-yellow-100 px-4 py-2 text-sm ring-yellow-500 transition-all duration-300 placeholder:text-stone-500 focus:w-96 focus:outline-none"
      type="text"
      value={id}
      onChange={(e) => setId(e.target.value)}
      placeholder="Search id"
    />
  );
}
