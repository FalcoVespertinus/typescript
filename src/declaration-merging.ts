// Declaration Merging
// Interfaces
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "John",
  age: 30,
};

// namespaces
export namespace Validation {
  export const isValid = (s: string): boolean => {
    return s.length > 3;
  };
}

export namespace Validation {
  export const isNumber = (s: string): boolean => {
    return !isNaN(Number(s));
  };
}

console.log('Validation.isValid("hello"): ', Validation.isValid("hello")); // true
console.log('Validation.isNumber("1234"): ', Validation.isNumber("1234")); // true

// Class und Module Merging
export class Album {
  label!: Album.AlbumLabel;
}

export namespace Album {
  export class AlbumLabel {
    name!: string;
  }
}

export const album = new Album();
album.label = new Album.AlbumLabel();
album.label.name = "Awesome Album";
console.log('album.label.name:', album.label.name);
