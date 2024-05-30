import { useState } from "react";

// Clojure 3 Aufgabe 5

type PhoneBookEntry = {
  name: string;
  phone: number;
};

const initialPhoneBook: PhoneBookEntry[] = [
  { name: "Adam", phone: 4711 },
  { name: "Eva", phone: 4712 },
];

const ClojurePhonebook = () => {
  const [phoneBook, setPhoneBook] = useState(initialPhoneBook);

  const lookAt = (entryName: string) =>
    initialPhoneBook.find(({ name }) => name === entryName)?.phone ?? false;

  const addEntry = (newEntry: PhoneBookEntry) =>
    setPhoneBook([...phoneBook, newEntry]);
};
