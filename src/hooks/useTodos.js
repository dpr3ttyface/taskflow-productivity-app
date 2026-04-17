import { useState, useEffect } from "react";
import { fetchTodos, fetchUsers } from "../api/api";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchTodos().then(setTodos);
    fetchUsers().then(setUsers);
  }, []);

  const completeTodo = (id) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: true, completedAt: new Date() } : t));
  };

  const uncompleteTodo = (id) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: false, completedAt: null } : t));
  };

  return { todos, users, completeTodo, uncompleteTodo };
};