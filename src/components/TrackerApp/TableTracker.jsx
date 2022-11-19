import React from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import { groupBy } from "../../function";
import CategoryTracker from "./CategoryTracker";
import RowTracker from "./RowTracker";
import "./RowTracker.css";

export default function TableTracker({
  allTrackers,
  selectedId,
  onSelected,
  selectedTracker,
  setSelectedTracker,
}) {
  const rows = [];
  let lastCategory = "";
  const trackerParCategorie = groupBy(allTrackers, "category");

  Object.keys(trackerParCategorie).forEach((category) => {
    trackerParCategorie[category].forEach((allTrackers) => {
      if (allTrackers.category !== lastCategory) {
        rows.push(<CategoryTracker key={category} category={category} />);
      }
      rows.push(
        <RowTracker
          key={allTrackers.id}
          allTrackers={allTrackers}
          selectedId={selectedTracker?.id}
          onSelected={setSelectedTracker}
        />
      );
      lastCategory = allTrackers.category;
    });
  });
  return <div className="trackerlist">{rows}</div>;
}
