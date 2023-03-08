import React from "react";
import styled from "styled-components";
import { useState } from "react";

const TodoTimeArea = styled.div`
  text-align: center;
  width: 400px;
  margin: 50px auto 0;
  color: #ffffff;
  cursor: pointer;
  @media (max-width: 640px) {
    width: 80%;
  }
  .date {
    margin-top: 10px;
    font-size: 40px;
    opacity: 0.8;
    @media (max-width: 640px) {
      width: 150px;
      font-size: 15px;
      margin: 0 auto;
      opacity: 1;
    }
    &:hover {
      opacity: 1;
    }
    .small-date {
      font-size: 20px;
      @media (max-width: 640px) {
        font-size: 10px;
      }
    }
    .small-date:nth-child(2) {
      margin-right: 50px;
      @media (max-width: 640px) {
        margin-right: 0px;
      }
    }
  }
  .todo {
    font-family: "Lobster", cursive;
    width: 400px;
    padding-bottom: 10px;
    border-bottom: 1px solid;
    font-size: 60px;
    animation: textTwinkling 1.5s alternate infinite linear;
    @media (max-width: 640px) {
      font-size: 45px;
      border-bottom: none;
      width: 150px;
      margin: 0 auto;
    }
  }

  @keyframes textTwinkling {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    }
  }
`;

export default function TodoTime() {
  const [timer, setTimer] = useState("00:00");
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);

  const currentTime = () => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    setTimer(`${hours}:${minutes}`);
    setMonth(`${month}`);
    setDay(`${day}`);
  };

  const startTimer = () => {
    setInterval(currentTime, 1000);
  };
  startTimer();
  return (
    <TodoTimeArea>
      <div className="todo">To-Do</div>
      <div className="date">
        {month}
        <span className="small-date">月 </span>
        {day}
        <span className="small-date">日 </span>
        <span className="time">{timer}</span>
      </div>
    </TodoTimeArea>
  );
}
