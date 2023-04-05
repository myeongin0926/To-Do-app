import styles from "./Header.module.css";
import { BsMoon, BsSun } from "react-icons/bs";
import { useDarkMode } from "../../\bcontext/DarkModeContext";

const Header = ({ filters, filter, onFilterChange }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button onClick={() => toggleDarkMode()} className={styles.mode}>
        {darkMode ? <BsSun /> : <BsMoon />}
      </button>
      <ul className={styles.list}>
        {filters.map((value, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => {
                  onFilterChange(value);
                }}
                className={`${styles.filter} ${
                  filter === value && styles.selected
                }`}
              >
                {value}
              </button>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
