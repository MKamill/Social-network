import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={`${s.dialog} ${s.active}`}>
          <NavLink to="/dialogs/1">Камиль</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Артем</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Оля</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Камилла</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.dialog}>Привет</div>
        <div className={s.dialog}>Ку</div>
        <div className={s.dialog}>как сам?</div>
      </div>
    </div>
  );
};

export default Dialogs;
