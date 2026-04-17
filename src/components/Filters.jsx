import React from "react";
import { styles } from "../styles/styles";

export default function Filters({ users, onFilterChange }) {
  return (
    <div style={styles.filters}>
      <label style={{ marginRight: 10 }}>Filter by:</label>
      <select style={styles.select} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="all">All users</option>
        {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
      </select>
    </div>
  );
}