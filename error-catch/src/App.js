import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import Users from "./Users";

function App() {
  const user = {
    id: 1,
    username: "candice",
  };

  return (
    <ErrorBoundary>
      <Users />
    </ErrorBoundary>
  );
}

export default App;
