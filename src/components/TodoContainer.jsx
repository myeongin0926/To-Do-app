import React from "react";
import styles from "./TodoContainer.module.css";
import TodoInsert from "./TodoInsert";

const TodoContainer = () => {
  return (
    <div className={styles.container}>
      <TodoInsert className={styles.t} />
    </div>
  );
};

export default TodoContainer;
