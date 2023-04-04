import React, { useState } from "react";
import styles from "./TodoInsert.module.css";

const TodoInsert = (props) => {
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (text.trim().length) {
      props.todoAdd({
        text,
        checked: false,
        complete: false,
        id: Math.random(),
      });
      setText("");
    }
  };
  return (
    <div className={styles.todoInsert}>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoInsert;
