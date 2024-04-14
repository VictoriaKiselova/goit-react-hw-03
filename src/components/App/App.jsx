import { useState, useEffect } from "react";
import css from "./App.module.css";
import startValuesContacts from "/startValuesContacts.json";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactForm from "../ContactForm/ContactForm.jsx";

export default function App() {
  const [filter, setFilter] = useState("");
  const [contactValues, setcontactValues] = useState(() => {
    if (localStorage.getItem("savedContact") !== null) {
      return JSON.parse(localStorage.getItem("savedContact"));
    }
    return startValuesContacts;
  });

  useEffect(() => {
    localStorage.setItem("savedContact", JSON.stringify(contactValues));
  }, [contactValues]);

  const filterContact = contactValues.filter(elem =>
    elem.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  const addContact = newContact => {
    setcontactValues(prev => {
      return [...prev, newContact];
    });
  };

  const deleteContact = contactId => {
    setcontactValues(prev => {
      return prev.filter(contact => contact.id !== contactId);
    });
  };

  return (
    <div className={css.container}>
      <h1> Phonebook </h1>
      <ContactForm addContact={addContact} />
      <SearchBox filter={filter} onFilter={setFilter} />
      <ContactList
        contactValues={filterContact}
        deleteContact={deleteContact}
      />
    </div>
  );
}
