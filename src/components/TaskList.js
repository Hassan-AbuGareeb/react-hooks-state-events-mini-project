import React from "react";
import Task from "./Task";
function TaskList({ tasks, category, onTaskChange }) {
  function deleteTask(event) {
    const taskName = event.target.id;
    const newTasks = tasks.filter((task) => task.text !== taskName);
    onTaskChange(newTasks);
  }

  const categoryFilteredList = tasks.filter((task) => {
    if (category === "All") return true;
    else return task.category === category;
  });
  const displayedTasks = categoryFilteredList.map((task, index) => {
    return (
      <Task
        key={index}
        category={task.category}
        text={task.text}
        handleDelete={deleteTask}
      />
    );
  });
  return <div className="tasks">{displayedTasks}</div>;
}

export default TaskList;
