import React from "react";
import { BsTrash } from "react-icons/bs";
import styles from "./TodoItem.module.css";

const TodoItem = ({ todo, onUpdate, onRemove }) => {
  const { status, text, id } = todo;

  const handleChange = (e) => {
    onUpdate({ ...todo, status: e.target.checked ? "completed" : "active" });
  };

  return (
    <div className={styles.todo}>
      <input
        type="checkbox"
        id={id}
        checked={status === "completed"}
        onChange={handleChange}
        className={styles.check}
      />
      <label htmlFor={id} className={styles.todoLabel}>
        <span>{text}</span>
      </label>{" "}
      <button
        className={styles.todoBtn}
        onClick={() => {
          onRemove(id);
        }}
      >
        <BsTrash />
      </button>
    </div>
  );
};

export default TodoItem;
