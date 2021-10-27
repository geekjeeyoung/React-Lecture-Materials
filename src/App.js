import "./App.css";
import InputSample from "./InputSample";
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
      <InputSample />
    </Wrapper>
  );
}

export default App;
