import { BsPersonCircle } from "react-icons/bs";
import { ImPhone } from "react-icons/im";

export default function Contact({ contact: { name, number,id }, onDelete }) {
  return (
    <div>
      <div>
        <p>
          <BsPersonCircle /> {name}
        </p>
        <p>
          <ImPhone /> {number}
        </p>
      </div>
      <button onClick={()=> onDelete(id)}>Delete</button>
    </div>
  );
}
