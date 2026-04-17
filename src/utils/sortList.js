export function sortList(list, type) {
  if (type === "az") return [...list].sort((a, b) => a.title.localeCompare(b.title));
  if (type === "za") return [...list].sort((a, b) => b.title.localeCompare(a.title));
  if (type === "newest") return [...list].sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt));
  if (type === "oldest") return [...list].sort((a, b) => new Date(a.completedAt) - new Date(b.completedAt));
  return list;
}