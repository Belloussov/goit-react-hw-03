import { useState, useEffect } from "react";
import initContacts from "../../initContacts.json";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import css from "./App.module.css";

const getContact = () => {
  const savedData = localStorage.getItem("contacts");
  if (savedData !== null) {
    return JSON.parse(savedData);
  }
  return initContacts;
};

export default function App() {
  const [contacts, setContacts] = useState(getContact);

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((contacts) => {
      return [...contacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((contacts) => {
      return contacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
