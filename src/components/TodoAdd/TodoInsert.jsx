import React, { useState } from "react";
import uuid from "react-uuid";
import styles from "./TodoInsert.module.css";

const TodoInsert = (props) => {
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (text.trim().length) {
      props.todoAdd({
        text,
        status: "active",
        id: uuid(),
      });
      setText("");
    }
  };
  return (
    <>
      <form action="" onSubmit={submitHandler} className={styles.addForm}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add Todo"
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default TodoInsert;
