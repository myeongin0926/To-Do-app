import styled from "styled-components";
import React, { useCallback, useState, useRef } from "react";
import { media } from "./MediaQuery";

const TodoInsertArea = styled.form`
  display: flex;
  width: 500px;
  margin: 15px auto 0;
  ${media.mobile`width: 80%;`}

  input {
    background-color: transparent;
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.5);
    padding-left: 25px;
    color: white;
    font-size: 18px;
    width: 500px;
    height: 50px;
    border-radius: 50px;
    line-height: 50px;
    &:focus {
      border: 1px solid rgba(255, 255, 255, 0.8);
    }
    ${media.mobile`      
      padding-left: 20px;
      width: 90%;
      min-width: 150px;
      height: 30px;
      line-height: 30px;
      font-size: 13px;
      `}
  }
`;

export default function TodoInsert({ onInsert }) {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const inputEl = useRef();
  const onSubmit = useCallback(
    (e) => {
      if (value.trim()) {
        onInsert(value);
        setValue("");
        inputEl.current.focus();
      } else {
        alert("내용을 입력해주세요");
      }
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <TodoInsertArea onSubmit={onSubmit}>
      <input
        ref={inputEl}
        type="text"
        placeholder="입력후에 엔터를 누르세요"
        value={value}
        onChange={onChange}
      />
    </TodoInsertArea>
  );
}
