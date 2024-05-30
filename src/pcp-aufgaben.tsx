import { useState } from "react";

// Clojure 3 Aufgabe 5

type PhoneBookEntry = {
  name: string;
  phone: number;
};

type PhoneBook = PhoneBookEntry[];

const globalPhoneBook: PhoneBook = [
  { name: "Adam", phone: 4711 },
  { name: "Eva", phone: 4712 },
];

export const ClojurePhonebook = () => {
  const [phoneBook, setPhoneBook] = useState(globalPhoneBook);

  const lookAt = (entryName: string) =>
    phoneBook.find(({ name }) => name === entryName)?.phone ?? false;

  const addEntry = (newEntry: PhoneBookEntry) =>
    setPhoneBook([...phoneBook, newEntry]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ul style={{ textAlign: "left", marginInline: "auto" }}>
        {phoneBook.map((entry) => (
          <li>
            {entry.name}: {lookAt(entry.name)}
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => addEntry({ name: "Heidi", phone: 1234 })}
      >
        Add Heidi
      </button>
    </div>
  );
};

// Prolog 3 Aufgabe 1. Endrekursive Fibonacci-Berechnung mit Ein- und Ausgabe
function fibonacci(num: number, a: number = 0, b: number = 1): number {
  if (num == 0) {
    return a;
  }
  if (num == 1) {
    return b;
  }

  return fibonacci(num - 1, b, a + b);
}

export const fib = fibonacci(7);
console.log("Die 7. Fibonacci-Zahl ist:", fib);
