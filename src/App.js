import { useState, useRef, useCallback } from "react";
import TodoTemplate from "./component/TodoTemplate";
import TodoTime from "./component/TodoTime";
import TodoInsert from "./component/TodoInsert";
import TodoList from "./component/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const nextId = useRef(1);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
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
