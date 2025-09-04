"use client";

import { useState } from "react";
import styles from "./components.module.css";

export default function Task(props) {
  const [done, setDone] = useState(false);

  return (
    <div>
      <p
        className={`${styles["task-text"]} ${done ? styles["task-done"] : ""}`}
        onClick={() => setDone(!done)}
      >
        • {props.text}
      </p>
    </div>
  );
}
