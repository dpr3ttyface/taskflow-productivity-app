import React, { useState } from "react";
import { styles } from "./styles/styles";
import { useTodos } from "./hooks/useTodos";
import { sortList } from "./utils/sortList";
import Filters from "./components/Filters";
import TodoColumn from "./components/TodoColumn";

export default function App() {
  const { todos, users, completeTodo, uncompleteTodo } = useTodos();
  const [filterUser, setFilterUser] = useState("all");
  const [sortUncompleted, setSortUncompleted] = useState("none");
  const [sortCompleted, setSortCompleted] = useState("none");

  const getFiltered = (list) => 
    list.filter(t => filterUser === "all" || t.userId === Number(filterUser));

  const uncompletedList = sortList(getFiltered(todos.filter(t => !t.completed)), sortUncompleted);
  const completedList = sortList(getFiltered(todos.filter(t => t.completed)), sortCompleted);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>🔥 TaskFlow Productivity App</h1>
      
      <Filters users={users} onFilterChange={setFilterUser} />

      <div style={styles.container}>
        <TodoColumn 
          title="😴 Not Done Yet"
          todos={uncompletedList}
          users={users}
          onAction={completeTodo}
          sortValue={sortUncompleted}
          onSortChange={setSortUncompleted}
          sortOptions={[{value: "none", label: "📌 Title(asc)"}, {value: "az", label: "A → Z"}, {value: "za", label: "Z → A"}]}
        />
        <TodoColumn 
          title="🎯 Mission Complete"
          todos={completedList}
          users={users}
          onAction={uncompleteTodo}
          sortValue={sortCompleted}
          onSortChange={setSortCompleted}
          sortOptions={[{value: "none", label: "📌 Date(asc)"}, {value: "newest", label: "Newest"}, {value: "oldest", label: "Oldest"}]}
        />
      </div>
    </div>
  );
}