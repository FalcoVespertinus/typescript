import { destructuringFunction } from "./function";

export default function JsxComponent() {
  const nameAndAge = destructuringFunction({ name: "john", age: 12 });
  return (
    <div style={{ backgroundColor: "red", color: "white" }} className="footer">
      <p>this is JSX</p>
      <p>{nameAndAge}</p>
    </div>
  );
}
