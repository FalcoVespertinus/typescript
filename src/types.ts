// Zusammengesetzte Typen
type Point = {
    x: number;
    y: number;
};

export const point: Point = { x: 10, y: 20 };
// console.log(point);

// Union Types
type ID = string | number;

export let userId: ID = 123;
userId = "ABC123";

export function printId(id: ID) {
    if (typeof id === "string") {
        console.log(`ID in string format: ${id.toUpperCase()}`);
    } else {
        console.log(`ID in numeric format: ${id.toFixed(2)}`);
    }
}

// printId(userId);
// printId(456.78);

// Indexed Access Types
type Person = {
    name: string;
    age: number;
    address: {
        street: string;
        city: string;
    };
};

// Typ der 'name' und 'age' Eigenschaften extrahieren
type PersonName = Person["name"]; // string
type PersonAge = Person["age"]; // number

export const name: PersonName = "Alice";
export const age: PersonAge = 30;

// Typ der 'address' Eigenschaft extrahieren
type Address = Person["address"]; // { street: string; city: string; }

// Typ der 'street' Eigenschaft innerhalb 'address' extrahieren
type Street = Person["address"]["street"]; // string

export const street: Street = "123 Main St";

// console.log('PersonName:', name);
// console.log('PersonAge:', age);
// console.log('Street:', street);
