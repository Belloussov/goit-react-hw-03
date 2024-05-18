import { BsPersonCircle } from "react-icons/bs";
import { ImPhone } from "react-icons/im";
import css from "./Contact.module.css";

export default function Contact({ contact: { name, number, id }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.cover}>
        <p className={css.contactField}>
          <BsPersonCircle /> {name}
        </p>
        <p className={css.contactField}>
          <ImPhone /> {number}
        </p>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
