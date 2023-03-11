import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";
import { media } from "./MediaQuery";

const TodoListArea = styled.div`
  width: 500px;
  height: 600px;
  margin: 30px auto 0;
  overflow-x: hidden;
  overflow-y: auto;
  ${media.mobile`width:80%; height:400px;`}
  &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:active {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

function TodoList({ todos, onRemove, onToggle }) {
  return (
    <TodoListArea>
      {todos?.map((todo) => {
        return (
          <TodoListItem
            todo={todo}
            key={todo.id}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        );
      })}
    </TodoListArea>
  );
}

export default TodoList;
