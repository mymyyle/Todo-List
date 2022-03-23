import React, { useState } from "react";

import Header from "./Header";
import TaskList from "./TaskList";
import AddTaskForm from "./AddTaskForm";
import IncompleteCheckbox from "./IncompleteCheckbox";

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learn JS", status: false },
    { id: "task_2", title: "Code a Todo List", status: false },
  ]);

  const [showIncomplete, setShowIncomplete] = useState(false);
  const [newTask, setNewTask] = useState("");

  const setTaskStatus = (taskId, status) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId)
        return {
          ...task,
          status,
        };

      return task;
    });

    setTasks(newTasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTask && newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now().toString(),
          title: newTask,
          status: false,
        },
      ]);
      setNewTask("");
    }
  };

  const removeTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  return (
    <div className="container">
      <Header />
      <TaskList
        tasks={tasks}
        showIncomplete={showIncomplete}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
      />
      <IncompleteCheckbox
        showIncomplete={showIncomplete}
        setShowIncomplete={setShowIncomplete}
      />
      <AddTaskForm
        handleSubmit={handleSubmit}
        newTask={newTask}
        setNewTask={setNewTask}
      />
    </div>
  );
};

export default App;
