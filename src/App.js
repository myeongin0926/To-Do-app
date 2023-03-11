import { useState, useCallback, useEffect } from "react";
import TodoTemplate from "./component/TodoTemplate";
import TodoTime from "./component/TodoTime";
import TodoInsert from "./component/TodoInsert";
import TodoList from "./component/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const randerTodos = JSON.parse(localStorage.getItem("todos"));
    setTodos(randerTodos);
  }, []);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: new Date().getTime(),
        text,
        checked: false,
      };
      setTodos([...(todos || []), todo]);
      localStorage.setItem("todos", JSON.stringify([...todos, todo]));
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      const deleteTodo = todos.filter((todo) => todo.id !== id);
      setTodos(deleteTodo);
      localStorage.setItem("todos", JSON.stringify(deleteTodo));
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      const checkSwitch = todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      );
      setTodos(checkSwitch);
      localStorage.setItem("todos", JSON.stringify(checkSwitch));
    },
    [todos]
  );

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
