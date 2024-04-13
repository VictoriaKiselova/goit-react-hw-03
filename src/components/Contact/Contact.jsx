import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";

export default function Contact({ startValues }) {
  return startValues.map(elem => (
    <div key={elem.id} className={css.container}>
      <div className={css.contactItem}>
        <p className={css.elements}>
          <BsFillPersonFill className={css.iconsUser} />
          {elem.name}
        </p>
        <p className={css.elements}>
          <BsFillTelephoneFill className={css.iconsTel} />
          {elem.number}
        </p>
      </div>
      <button className={css.button} type="submit">
        Delete
      </button>
    </div>
  ));
}
