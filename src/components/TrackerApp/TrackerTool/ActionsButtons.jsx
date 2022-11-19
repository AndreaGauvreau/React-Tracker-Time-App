import React from "react";
import Buttons from "../../Ux/Buttons";

export default function ButtonTrack({ setRemonter, dispatch, state }) {
  const handleClicks = () => {
    dispatch({ type: "launch" });
  };
  return (
    <div className="actionbutton">
      <button onClick={handleClicks}>Start</button>
    </div>
  );
}

export function ButtonForm() {
  return (
    <div className="actionbutton">
      <button>ButtonForm</button>
    </div>
  );
}

export function ButtonStart() {
  return <button>ButtonShowForm</button>;
}
