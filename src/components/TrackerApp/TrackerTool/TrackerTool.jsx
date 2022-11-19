import React, { useEffect, useReducer } from "react";
import ActionsButtons, { ButtonForm } from "./ActionsButtons";
import TrackerEditForm from "./TrackerEditForm";
import UserPersonalTrackerData from "./UserPersonalTrackerData";
import "./ToolBox.css";
import { useState } from "react";
import ButtonTrack from "./ActionsButtons";

const reducer = (state, action) => {
  switch (action.type) {
    case "launch":
      return {
        remonter: true,
        error: false,
        activeButton: { 1: false, 2: true, 3: true },
      };
    case "delete":
      return { remonter: false, error: false };
    case "update":
      return { remonter: false, error: false };
    default:
      throw new Error("Invalid action");
  }
};

export default function TrackerTool({ allTrackers }) {
  const [state, dispatch] = useReducer(reducer, {
    remonter: false,
    status: "idle",
    error: false,
    activeButton: { 1: false, 2: true, 3: true },
  });

  const button = () => {
    if (state.status === "idle") {
      <ButtonTrack
        state={state}
        dispatch={dispatch}
        remonter={state.remonter}
      />;
    }
  };
  return (
    <div className="toolbox">
      <UserPersonalTrackerData />
      <TrackerEditForm
        state={state}
        dispatch={dispatch}
        remonter={state.remonter}
      />
      {() => button()}
      {/*      <ButtonForm state={state} dispatch={dispatch} remonter={state.remonter} />*/}
    </div>
  );
}
