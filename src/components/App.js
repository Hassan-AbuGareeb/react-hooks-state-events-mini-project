import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [category, setCategory] = useState("All");
  const [tasks, setTasks] = useState([...TASKS]);
  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }
  function handleFormSubmit(taskObj) {
    console.log(taskObj);
    setTasks([...tasks, taskObj]);
    console.log(tasks);
  }

  function handleTaskChange(taskobj) {
    setTasks([...taskobj]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        CATEGORIES={CATEGORIES}
        handleCategory={handleCategoryChange}
        outerCategory={category}
      />
      <NewTaskForm
        CATEGORIES={CATEGORIES}
        onTaskFormSubmit={handleFormSubmit}
      />
      <TaskList
        tasks={tasks}
        category={category}
        onTaskChange={handleTaskChange}
      />
    </div>
  );
}

export default App;
