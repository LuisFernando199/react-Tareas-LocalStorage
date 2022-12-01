import { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./task";
import "../StyleSheet/ListTask.css";
import {useEffect} from 'react'

function ListTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      setTasks(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task) => {
    if (task.text.trim()) {
      //verificacion no cadena vacia
      task.text = task.text.trim(); //quitamos espacios
      const updateTask = [task, ...tasks]; //generar arreglo con tareas anteriores y tareas nuevas
      setTasks(updateTask); //actualizar estado
    }
  };

  const deleteTask = (id) => {
    const updateTask = tasks.filter((task) => task.id !== id);
    setTasks(updateTask);
  };

  const completTask = (id) => {
    const updateTask = tasks.map((task) => {
      if (task.id === id) {
        task.complet = !task.complet;
      }
      return task;
    });
    setTasks(updateTask);
  };

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className="ListTaskContainer">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            complet={task.complet}
            completTask={completTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </>
  );
}

export default ListTasks;
