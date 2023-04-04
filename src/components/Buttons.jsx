import React from "react";
import styles from "./Buttons.module.css";
import { FaSun, FaMoon } from "react-icons/fa";

const Buttons = (props) => {
  return (
    <div className={styles.buttons}>
      <div className={styles.isday}>
        {props.isDay ? (
          <FaSun onClick={() => props.dayHandler()} />
        ) : (
          <FaMoon onClick={() => props.dayHandler()} />
        )}
      </div>
      <div className={styles.state}>
        <div>All</div>
        <div>Active</div>
        <div>Completed</div>
      </div>
    </div>
  );
};

export default Buttons;
