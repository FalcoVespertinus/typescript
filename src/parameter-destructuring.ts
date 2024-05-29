export const destructuringFunction = ({
  name,
  age,
}: {
  name: string;
  age: number;
}) => [name, age].join(", ");
