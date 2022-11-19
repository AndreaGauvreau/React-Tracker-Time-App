import React, { useState } from "react";
import Header from "../Ux/Header";
import FilterTracker from "./FilterTracker";
import TableTracker from "./TableTracker";
import TrackerTool from "./TrackerTool/TrackerTool";
import "./TrackerApp.css";
import db from "../../data";

export default function TrackerApp() {
  const [allTrackers, setAllTrackers] = useState(db);
  const [filterText, setFilterText] = useState("");
  const [selectedTracker, setSelectedTracker] = useState("");
  const handleTextChange = (text) => {
    setFilterText(text);
    const filteredTracker = db.filter(
      (e) => e.name.toLocaleLowerCase().indexOf(text) !== -1
    );
    setAllTrackers(filteredTracker);
  };

  const selectedId = () => {};

  const onSelected = () => {};
  return (
    <main>
      <Header />
      <section>
        <div>
          <TrackerTool allTrackers={allTrackers} />
        </div>
        <div>
          <div className="headlistingtracker">
            <h3>
              Liste des Trackers <i>({allTrackers.length})</i>
            </h3>
            <FilterTracker handleTextChange={handleTextChange} />
          </div>

          <TableTracker
            allTrackers={allTrackers}
            onSelected={onSelected}
            selectedId={selectedId}
            setSelectedTracker={setSelectedTracker}
            selectedTracker={selectedTracker}
          />
        </div>
      </section>
    </main>
  );
}
