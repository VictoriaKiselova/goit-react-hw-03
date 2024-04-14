import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

export default function Contact({
  contact: { id, name, number },
  deleteContact,
}) {
  console.log(id);
  return (
    <div className={css.container}>
      <div className={css.contactItem}>
        <p className={css.elements}>
          <BsFillPersonFill className={css.iconsUser} />
          {name}
        </p>
        <p className={css.elements}>
          <BsFillTelephoneFill className={css.iconsTel} />
          {number}
        </p>
      </div>
      <button
        className={css.button}
        type="submit"
        onClick={() => deleteContact(id)}>
        Delete
      </button>
    </div>
  );
}
