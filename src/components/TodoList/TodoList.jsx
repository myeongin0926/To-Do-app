import React, { useState, useEffect } from "react";
import TodoInsert from "../TodoAdd/TodoInsert";
import TodoItem from "../Todo/TodoItem";
import styles from "./TodoList.module.css";

const TodoList = ({ filter }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const prevTodo = JSON.parse(localStorage.getItem("todos"));
    setTodos(() => {
      return [...prevTodo];
    });
  }, []);

  const addHandler = (newTodo) => {
    setTodos([...todos, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  };
  const updateHandler = (updated) => {
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));

    localStorage.setItem(
      "todos",
      JSON.stringify(todos.map((t) => (t.id === updated.id ? updated : t)))
    );
  };

  const removeHandler = (id) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const filtered = getFilteredItems(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              onRemove={removeHandler}
              onUpdate={updateHandler}
            />
          );
        })}
      </ul>

      <TodoInsert todoAdd={addHandler} />
    </section>
  );
};

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}

export default TodoList;
