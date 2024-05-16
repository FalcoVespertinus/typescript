import { destructuringFunction } from "./function";

export default function JsxComponent({
  name,
  age,
}: {
  name: string;
  age: number;
}) {
  const nameAndAge = destructuringFunction({ name, age });
  return (
    <div style={{ backgroundColor: "red", color: "white" }} className="footer">
      <p>this is JSX</p>
      <p>{nameAndAge}</p>
    </div>
  );
}
