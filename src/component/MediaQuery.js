import { css } from "styled-components";

const sizes = {
  tablet: 760,
  mobile: 640,
};

// 위에서 정의한 사이즈에 따라 자동으로 media query를 생성하는 함수
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
