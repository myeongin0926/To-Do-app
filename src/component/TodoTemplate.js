import React from "react";
import styled from "styled-components";
import { media } from "./MediaQuery";

const TodoTemplateArea = styled.div`
  margin: 30px auto;
  width: 500px;
  height: 900px;

  position: relative;
  overflow: hidden;
  ${media.mobile`height: 600px;  width: 80%;`}
`;

function TodoTemplate({ children }) {
  return <TodoTemplateArea>{children}</TodoTemplateArea>;
}

export default TodoTemplate;
