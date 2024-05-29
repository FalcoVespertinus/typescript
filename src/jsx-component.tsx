import { destructuringFunction } from "./parameter-destructuring";

export default function JsxComponent() {
  const nameAndAge = destructuringFunction({ name: "john", age: 12 });

  return (
    <div style={{ backgroundColor: "red", color: "white" }} className="footer">
      <p>this is JSX</p>
      <p>{nameAndAge}</p>
    </div>
  );
}
