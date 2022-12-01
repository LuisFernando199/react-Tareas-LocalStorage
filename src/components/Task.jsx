import React from "react";
import "../StyleSheet/Task.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({ id, text, complet, completTask, deleteTask }) {
  //props
  
  return (
    <div className={complet ? "TaskContainer complet" : "TaskContainer"}>
      <div className="TaskText" onClick={() => completTask(id)}>
        {text}
      </div>
      <div className="TaskIconContent" onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className="TaskIcon" />
      </div>
    </div>
  );
}

export default Task;
