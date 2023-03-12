import { useState, useCallback } from "react";
import TodoTemplate from "./component/TodoTemplate";
import TodoTime from "./component/TodoTime";
import TodoInsert from "./component/TodoInsert";
import TodoList from "./component/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: new Date().getTime(),
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      localStorage.setItem("todos", JSON.stringify([...todos, todo]));
    },
    [todos]
  );

  const onRemove = useCallback((id) => {
    const deleteTodo = (todos) => todos.filter((todo) => todo.id !== id);
    setTodos(deleteTodo);
    localStorage.setItem("todos", JSON.stringify(deleteTodo));
  }, []);

  const onToggle = useCallback((id) => {
    const checkSwitch = (todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      );
    setTodos(checkSwitch);
    localStorage.setItem("todos", JSON.stringify(checkSwitch));
  }, []);

  return (
    <div>
      <TodoTemplate>
        <TodoTime />
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
}

export default App;
