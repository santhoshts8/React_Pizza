import React from "react";

export default function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center backdrop-blur">
      <div className="loader"></div>;
    </div>
  );
}