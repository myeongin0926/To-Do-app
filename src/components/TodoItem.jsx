import React from "react";
import styles from "./TodoItem.module.css";

console.log(styles);
const TodoItem = (props) => {
  return (
    <div className={`${styles.todoItem} ${props.checked ? "true" : "false"}`}>
      <span className={styles.text}>{props.text}</span>{" "}
      <span
        className={styles.delete}
        onClick={() => {
          props.onRemove(props.id);
        }}
      >
        X
      </span>
    </div>
  );
};

export default TodoItem;
