import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";

export default function ContactList({ contactValues, deleteContact }) {
  console.log(contactValues);
  return (
    <div className={css.contactListWrapper}>
      {contactValues.map(elem => (
        <div key={elem.id}>
          <Contact contact={elem} deleteContact={deleteContact} />
        </div>
      ))}
    </div>
  );
}
