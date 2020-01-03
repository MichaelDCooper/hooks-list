import React from "react";
import useResources from "./useResources";

const UserList = () => {
  const users = useResources("users");

  return (
    <ul className="ui list">
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
