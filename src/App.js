import React, { useMemo, useReducer } from "react";
import "./App.css";
import CreateUser from "./CreateUser";
import UserList from "./UserList";
import produce from "immer";

function countActiveUsers(users) {
  console.log("Counting active users...");
  return users.filter((user) => user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: "Jeeyoung",
      email: "jeeyoung.han82@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "Candice",
      email: "candice@example.com",
      active: false,
    },
    {
      id: 3,
      username: "han",
      email: "han@example.com",
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return produce(state, (draft) => {
        draft.users.push(action.user);
      });
    case "TOGGLE_USER":
      return produce(state, (draft) => {
        const user = draft.users.find((user) => user.id === action.id);
        user.active = !user.active;
      });
    case "REMOVE_USER":
      return produce(state, (draft) => {
        const index = draft.users.findIndex((user) => user.id === action.id);
        draft.users.splice(index, 1);
      });
    default:
      return state;
  }
}

export const UserDispatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser />
      <UserList users={users} />
      <div>
        <h1>Active User Number: {count}</h1>
      </div>
    </UserDispatch.Provider>
  );
}

export default App;
