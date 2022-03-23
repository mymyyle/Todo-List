import React from "react";

const IncompleteCheckbox = ({ showIncomplete, setShowIncomplete }) => {
  return (
    <div className="filter-wrapper">
      <label htmlFor="filter" className="filter-label">
        Show incomplete tasks only
      </label>
      <input
        type="checkbox"
        id="filter"
        checked={showIncomplete}
        onChange={() => setShowIncomplete((showIncomplete) => !showIncomplete)}
      />
    </div>
  );
};

export default IncompleteCheckbox;
