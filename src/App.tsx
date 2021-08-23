import "./App.css";
import Example from "./Components/Landing";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div className="App">
      <Container fixed>
        <Example />
      </Container>
    </div>
  );
}

export default App;
