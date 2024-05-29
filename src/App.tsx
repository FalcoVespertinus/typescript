import "./App.css";
import JsxComponent from "./jsx-component";
import { petNames } from "./optional-chaining";

function App() {
  console.log(petNames);

  return (
    <div className="App">
      <JsxComponent />
    </div>
  );
}

export default App;
