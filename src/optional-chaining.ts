type Person = {
  name: string;
  age: number;
  pet?: {
    name: string;
  };
};

const person1: Person = { name: "john", age: 12 };
const person2: Person = { name: "susan", age: 10, pet: { name: "fluffy" } };

export const petNames = [person1, person2].map(({ pet }) => pet?.name);

// console.log('petNames: ', petNames);
// output: [undefined, 'fluffy']
