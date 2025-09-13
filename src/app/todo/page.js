"use client";

import { useState } from "react";
import Task from "@/app/_components/task";
import styles from "./todo.module.css";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>To-Do</h1>

      <form onSubmit={handleSubmit}>
        <input className={styles["task-input"]} type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      </form>

      {tasks.map((task, index) => {
        return <Task key={index} text={task} />
      })}
    </main>
  )
}
