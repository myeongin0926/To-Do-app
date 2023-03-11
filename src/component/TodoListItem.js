import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import styled from "styled-components";
import { media } from "./MediaQuery";

const TodoListItemArea = styled.div`
  width: 460px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  opacity: ${(props) => (props.check ? ".5" : "1")};
  &:hover {
    ${media.mobile`background-color:rgba(255, 255, 255, 0.0)`}
  }
  ${media.mobile`width:90%`}
  color: white;
  .remove {
    display: flex;
    align-items: center;
    font-size: 25px;
    color: white;
    transition: 0.2s;
    ${media.mobile`font-size:20px`}
    &:hover {
      color: red;
      ${media.mobile`color:white`}
    }
  }
`;

const CheckBox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;

  svg {
    font-size: 28px;
    ${media.mobile`font-size:22px`}
  }
  .text {
    margin-left: 10px;
    flex: 1;
    ${media.mobile`font-size:16px`}
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
