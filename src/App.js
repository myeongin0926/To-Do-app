import React from "react";
import TodoContainer from "./components/TodoContainer";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <TodoContainer />
    </div>
  );
};

export default App;
