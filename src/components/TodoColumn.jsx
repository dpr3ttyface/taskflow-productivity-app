import React from "react";
import { styles } from "../styles/styles";
import TodoCard from "./TodoCard";

export default function TodoColumn({ title, todos, users, onAction, sortValue, onSortChange, sortOptions }) {
  return (
    <div style={styles.column}>
      <h2>{title}</h2>
      <select style={styles.select} value={sortValue} onChange={(e) => onSortChange(e.target.value)}>
        {sortOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
      </select>
      {todos.map(t => (
        <TodoCard 
          key={t.id} 
          todo={t} 
          userName={users.find(u => u.id === t.userId)?.name || "Unknown"} 
          onAction={onAction} 
        />
      ))}
    </div>
  );
}