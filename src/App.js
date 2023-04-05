import React, { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import { DarkModeProVider } from "./\bcontext/DarkModeContext";

const filters = ["all", "active", "completed"];
const App = () => {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProVider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </DarkModeProVider>
  );
};

export default App;
