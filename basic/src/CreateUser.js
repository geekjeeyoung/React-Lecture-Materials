import React, { useCallback, useContext, useRef } from "react";
import { UserDispatch } from "./App";
import useInputs from "./hooks/useInputs";

function CreateUser() {
  const dispatch = useContext(UserDispatch);

  const [{ username, email }, onChange, onReset] = useInputs({
    username: "",
    email: "",
  });

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    onReset();
    nextId.current += 1;
  }, [username, email, onReset]);

  return (
    <div>
      <input
        name="username"
        placeholder="username"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="email"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>Create Account</button>
    </div>
  );
}

export default React.memo(CreateUser);
