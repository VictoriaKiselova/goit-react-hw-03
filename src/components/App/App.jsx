import { useState } from "react";
import css from "./App.module.css";
import startValuesContacts from "/startValuesContacts.json";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";

export default function App() {
  const [startValues, setStartValues] = useState(startValuesContacts);
  const [filter, setFilter] = useState("");

  const filterContact = startValues.filter(elem =>
    elem.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <div className={css.container}>
      <h1> Phonebook </h1>
      {/* <ContactForm /> */}
      <SearchBox filter={filter} onFilter={setFilter} />
      <ContactList startValues={filterContact} />
    </div>
  );
}
