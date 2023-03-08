import React from "react";
import styled from "styled-components";

const TodoTemplateArea = styled.div`
  margin: 30px auto;
  width: 90%;
  height: 900px;
  position: relative;
  overflow: hidden;
  @media (max-width: 640px) {
    height: 600px;
  }
`;

function TodoTemplate({ children }) {
  return <TodoTemplateArea>{children}</TodoTemplateArea>;
}

export default TodoTemplate;
