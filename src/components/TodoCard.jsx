import React from "react";
import { styles } from "../styles/styles";

export default function TodoCard({ todo, userName, onAction }) {
  return (
    <div style={todo.completed ? styles.cardDone : styles.card}>
      <p style={todo.completed ? styles.doneText : {}}><b>{todo.title}</b></p>
      <small>{userName}</small>
      {todo.completed && (
        <><br/><small>⏱ {new Date(todo.completedAt).toLocaleString()}</small></>
      )}
      <button 
        style={todo.completed ? styles.undoBtn : styles.completeBtn}
        onClick={() => onAction(todo.id)}
      >
        {todo.completed ? "🔄 Undo" : "✅ Done"}
      </button>
    </div>
  );
}