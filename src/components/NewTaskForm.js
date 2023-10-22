import React, { useState } from "react";

function NewTaskForm({ CATEGORIES, onTaskFormSubmit }) {
  const categories = CATEGORIES.filter((category) => category !== "All").map(
    (category) => (
      <option key={category} value={category}>
        {category}
      </option>
    )
  );

  const [formData, setFormData] = useState({ category: "Code", text: "" });

  function handleFormSubmit(event) {
    event.preventDefault();
    const newTask = { ...formData };
    setFormData({ ...formData, name: "" });
    setFormData({ ...formData, category: "Code" });
    onTaskFormSubmit(newTask);
  }

  function handleFormChange(event) {
    const key = event.target.name;
    setFormData({ ...formData, [key]: event.target.value });
  }

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleFormChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formData.category}
          onChange={handleFormChange}
        >
          {categories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
