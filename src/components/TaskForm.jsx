import { useState } from "react";
import "../StyleSheet/TaskForm.css";
import { v4 as uuidv4 } from "uuid"; //paquete uuid de npmjs

function TaskForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(), //Generado con paquete uuid.(https://www.npmjs.com/package/uuid)
      text: input,
      compelt: false,
    };

    props.onSubmit(newTask);
  };

  return (
    <form className="TaskForm" onSubmit={handleSend}>
      <input
        type="text"
        className="TaskInput"
        placeholder="Escribe una tarea"
        name="text"
        onChange={handleChange}
      />
      <button className="TaskButton">Agregar</button>
    </form>
  );
}

export default TaskForm;
