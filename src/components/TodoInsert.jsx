import React from "react";
import styles from "./TodoInsert.module.css";

const TodoInsert = () => {
  return (
    <div>
      <form action="">
        <input type="text" className={styles.todoInsert} />
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default TodoInsert;
