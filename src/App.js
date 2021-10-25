import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  const name = "Jeeyoung";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24,
    padding: "1rem",
  };

  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial />
      <Hello color="pink" />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </Wrapper>
  );
}

export default App;
