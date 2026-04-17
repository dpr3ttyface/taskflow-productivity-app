export const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data.slice(0, 20).map((t) => ({ ...t, completedAt: null }));
};

export const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return await res.json();
};