import React, { useEffect } from "react";

const User = React.memo(function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log(user);
  });

  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>Delete</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default React.memo(
  UserList,
  (prevProps, nextProps) => prevProps.users === nextProps.users
);

/*
useEffect 라는 Hook 을 사용하여 
컴포넌트가 마운트 됐을 때 (처음 나타났을 때), 
언마운트 됐을 때 (사라질 때), 
그리고 업데이트 될 때 (특정 props가 바뀔 때) 
특정 작업을 처리하는 방법에 대해서 알아보겠습니다.

1. 화면이 처음 떴을때 실행
    - deps에 [] 빈배열을 넣을 떄
    - life cycle중 componentDidmount처럼 실행
2. 화면이 사라질때 실행(cleanup 함수)
    - componentWillUnmount처럼 실행
3.deps에 넣은 파라미터값이 업데이트 됬을때 실행
    - componentDidUpdate처럼 실행
*/
