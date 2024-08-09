import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import store from "../../Store/Store";
import { updateName } from "../../Store/UserSlice";
import Button from "../../UI/Button";

export default function User() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const moveNext = () => {
    navigate(`/order/new/${name}`);
  };
  return (
    <>
      <div>
        <input
          className="mt-7 w-80 rounded-full border border-stone-300 p-1"
          type="text"
          value={name}
          onChange={(e) => {setName(e.target.value);store.dispatch(updateName(name))}}
          placeholder="Enter Your Name!"
        />
      </div>
      <div className="mt-2">
        {name !== "" && <Button onClick={moveNext}>Start ordering</Button>}
      </div>
    </>
  );
}
