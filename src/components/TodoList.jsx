import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = ({ ...props }) => {
  return (
    <div className={styles.todoList}>
      {props.todos?.map((todo) => {
        return (
          <TodoItem
            key={Math.random()}
            checked={todo.checked}
            text={todo.text}
            complete={todo.complete}
            onRemove={props.onRemove}
            id={todo.id}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
