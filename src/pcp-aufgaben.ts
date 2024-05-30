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

const ClojurePhonebook = () => {
  const [phoneBook, setPhoneBook] = useState(globalPhoneBook);

  const lookAt = (entryName: string) =>
    globalPhoneBook.find(({ name }) => name === entryName)?.phone ?? false;

  const addEntry = (newEntry: PhoneBookEntry) =>
    setPhoneBook([...phoneBook, newEntry]);
};
