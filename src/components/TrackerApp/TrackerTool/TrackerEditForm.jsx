import React from "react";
import { useState } from "react";

export default function TrackerEditForm({ remonter, state }) {
  const classremonter = state.remonter ? "remonter" : "";
  return (
    <div className="formmodal" id={classremonter}>
      <form>
        <input id="textinput" type="text" placeholder="Titre" />
        <input id="dateinput" type="datetime-local" />
        <input id="dateinput" type="datetime-local" />
        <select id="textinput">
          <option value="ok">ok</option>
        </select>
      </form>
    </div>
  );
}
