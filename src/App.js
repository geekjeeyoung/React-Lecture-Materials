import { useRef, useState } from "react";
import "./App.css";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const originalUsers = [
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
  ];

  const [users, setUsers] = useState(originalUsers);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const nextId = useRef(4);

  const onCreate = () => {
    const newUser = {
      id: nextId.current,
      username,
      email,
    };
    setUsers(users.concat(newUser));
    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              active: !user.active,
            }
          : user
      )
    );
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
