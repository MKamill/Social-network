import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.dialogs}>
      <img src={props.imgURL} alt="img" style={{width:"50px", height:"50px", borderRadius:"50px"}}/>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
