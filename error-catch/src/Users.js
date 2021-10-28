import React from "react";

function Users({ users, onToggle }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} onClick={() => onToggle(user.id)}>
          {user.username}
        </li>
      ))}
    </ul>
  );
}

Users.defaultProps = {
  onToggle: () => {
    console.warn("onToggle is missing!");
  },
};

export default Users;
