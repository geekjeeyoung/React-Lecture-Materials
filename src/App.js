import { useCallback, useMemo, useReducer, useRef } from "react";
import "./App.css";
import CreateUser from "./CreateUser";
import useInputs from "./hooks/useInputs";
import UserList from "./UserList";

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
      return {
        users: state.users.concat(action.user),
        // users: [...state.users, action.user],
      };
    case "TOGGLE_USER":
      return {
        users: state.users.map((user) =>
          user.id === action.id
            ? {
                ...user,
                active: !user.active,
              }
            : user
        ),
      };
    case "REMOVE_USER":
      return {
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
}

function App() {
  const [{ username, email }, onChange, reset] = useInputs({
    username: "",
    email: "",
  });

  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { users } = state;

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    reset();
    nextId.current += 1;
  }, [username, email, reset]);

  const onRemove = useCallback((id) => {
    dispatch({
      type: "REMOVE_USER",
      id,
    });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({
      type: "TOGGLE_USER",
      id,
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>
        <h1>Active User Number: {count}</h1>
      </div>
    </>
  );
}

export default App;
