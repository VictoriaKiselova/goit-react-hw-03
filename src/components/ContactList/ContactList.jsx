import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";

export default function ContactList({ startValues, deleteContact }) {
  return (
    <div className={css.contactListWrapper}>
      <Contact startValues={startValues} deleteContact={deleteContact} />
    </div>
  );
}
