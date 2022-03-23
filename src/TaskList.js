import React from "react";

const TaskList = ({ tasks, showIncomplete, setTaskStatus, removeTask }) => {
  return (
    <ul className="task-list">
      {tasks
        .filter(({ status }) => (showIncomplete ? !status : true))
        .map(({ id, title, status }) => {
          return (
            <li key={id} className={status ? "done" : ""}>
              <span className="label">{title}</span>
              <div className="action">
                <input
                  type="checkbox"
                  className="btn-action btn-action-done"
                  checked={status}
                  onChange={(e) => setTaskStatus(id, e.target.checked)}
                />
                <button
                  className="btn-action btn-action-delete"
                  onClick={() => removeTask(id)}
                >
                  🞮
                </button>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default TaskList;
