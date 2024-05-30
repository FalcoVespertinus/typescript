import "./App.css";
import { Validation, album } from "./declaration-merging";
import JsxComponent from "./jsx-component";
import { mixedInstance } from "./mixins";
import { petNames } from "./optional-chaining";
import { ClojurePhonebook } from "./pcp-aufgaben";
import { age, name, point, printId, street, userId } from "./types";

function App() {
  // Optional chaining
  // console.log("petNames: ", petNames);

  // Declaration merging
  // console.log('Validation.isValid("hello"): ', Validation.isValid("hello")); // true
  // console.log('Validation.isNumber("1234"): ', Validation.isNumber("1234")); // true
  // console.log('album.label.name:', album.label.name);

  // Types
  // console.log(point);
  // printId(userId);
  // printId(456.78);
  // console.log('PersonName:', name);
  // console.log('PersonAge:', age);
  // console.log('Street:', street);
  

  // Mixins
  // console.log('mixedInstance.baseProperty:', mixedInstance.baseProperty); // "base property"
  // console.log('mixedInstance.timestamp:', mixedInstance.timestamp); // aktuelles Datum und Uhrzeit
  // console.log('mixedInstance.isActive:', mixedInstance.isActive); // true
  // mixedInstance.toggleActive();
  // console.log('mixedInstance.isActive:', mixedInstance.isActive); // false


  return (
    <div className="App">
      <h1>TypeScript</h1>
      {/* <JsxComponent /> */}
      {/* <ClojurePhonebook /> */}
    </div>
  );
}

export default App;
