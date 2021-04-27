import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img
          src={logo}
          alt="spaceX"
          style={{ width: 400, display: "block", margin: "auto" }}
        />
      </header>
    </div>
  );
}

export default App;
