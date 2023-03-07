import React from "react";
import styled from "styled-components";

const Todomain = styled.div`
  margin: 5vh auto 0;
  width: 80%;
  height: 90vh;
  border-radius: 15vh;
  display: flex;
  align-items: flex-start;
  position: relative;
  h1 {
    font-family: "Lobster", cursive;
    cursor: pointer;
    color: white;
    font-size: 10vh;
    font-weight: 500;
    text-align: center;
    .small-date {
      font-size: 2vh;
      opacity: 0.3;
    }
    .year,
    .month,
    .day {
      opacity: 0.6;
      line-height: 10vh;
    }
    .year:hover,
    .month:hover,
    .day:hover {
      opacity: 1;
    }
    .todo {
      font-size: 10vh;
      color: white;
      animation: text 1.5s alternate infinite linear;
    }
    @keyframes text {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0.3;
      }
    }
  }
`;

const date = new Date();
const year = date.getFullYear() - 2000;
const month = date.getMonth() + 1;
const day = date.getDate();

function TodoMain() {
  return (
    <Todomain>
      <h1>
        <span className="year">
          {year} <span className="small-date">Y</span>
        </span>
        <br />
        <span className="month">
          {month} <span className="small-date">M</span>
        </span>
        <br />
        <span className="day">
          {day} <span className="small-date">D</span>
        </span>
        <br />
        <span className="todo">To-Do</span>
        <br />
      </h1>
    </Todomain>
  );
}

export default TodoMain;
