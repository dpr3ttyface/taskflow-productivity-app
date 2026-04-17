export const getUserName = (users, userId) => {
  const user = users.find((u) => u.id === userId);
  return user ? user.name : "Unknown";
};