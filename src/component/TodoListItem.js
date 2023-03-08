import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import styled from "styled-components";

const TodoListItemArea = styled.div`
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${(props) =>
      props.check ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.3)"};
    .remove {
      display: initial;
    }
  }
  color: white;
  .remove {
    display: flex;
    align-items: center;
    font-size: 25px;
    color: white;
    display: none;
    transition: 0.2s;
    &:hover {
      color: red;
    }
  }
`;

const CheckBox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  opacity: ${(props) => (props.check ? 0.5 : 1)};
  svg {
    font-size: 28px;
  }
  .text {
    margin-left: 10px;
    flex: 1;
  }
`;

function TodoListItem({ todo, onRemove, onToggle }) {
  const { id, text, checked } = todo;
  return (
    <TodoListItemArea check={checked}>
      <CheckBox
        check={checked}
        className="checkbox"
        onClick={() => {
          onToggle(id);
        }}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </CheckBox>
      <div
        className="remove"
        onClick={() => {
          onRemove(id);
        }}
      >
        <MdRemoveCircleOutline />
      </div>
    </TodoListItemArea>
  );
}

export default TodoListItem;
