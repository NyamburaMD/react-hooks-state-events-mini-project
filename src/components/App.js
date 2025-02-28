import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);

  const handleTaskDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleCategoryChange = (category) => {
    if (category === "All") {
      setTasks(TASKS);
    } else {
      setTasks(TASKS.filter((task) => task.category === category));
    }
  };
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} onCategorySelect={handleCategoryChange}/>
      <NewTaskForm categories={categories} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={tasks} onTaskDelete={handleTaskDelete}/>
    </div>
  );
}

export default App;
