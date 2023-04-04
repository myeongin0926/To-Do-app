import React, { useState, useEffect } from "react";
import TodoInsert from "./TodoInsert";
import styles from "./TodoContainer.module.css";
import TodoList from "./TodoList";
import Buttons from "./Buttons";
const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const prevTodo = JSON.parse(localStorage.getItem("todos"));
    setTodos(() => {
      return [...prevTodo];
    });
  }, []);

  const todosChange = (newTodo) => {
    setTodos((prev) => [...prev, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  };

  const todosRemoveHandler = (id) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const isDayHandler = () => {
    setIsDay(!isDay);
  };

  return (
    <div className={`${styles.container} ${isDay ? "day" : "night"}`}>
      <Buttons isDay={isDay} dayHandler={isDayHandler} />
      <TodoInsert className={styles.todoInsert} todoAdd={todosChange} />
      <TodoList todos={todos} onRemove={todosRemoveHandler} />
    </div>
  );
};

export default TodoContainer;
