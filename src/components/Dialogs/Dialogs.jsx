import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const dialogsData = [
  { id: "1", name: "Kamil", },
  { id: "2", name: "Artem", },
  { id: "3", name: "Sasha", },
  { id: "4", name: "Olya", },
]

const messagesData = [
  { id: "1", message: "Hi" },
  { id: "2", message: "Hello!" },
  { id: "3", message: "How are you?" },
  { id: "4", message: "Im fine! ;)" },
]

const DialogItem = (props) => {
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  let newDialogsData = dialogsData.map(dialog => {
    return (
      <DialogItem name={dialog.name} id={dialog.id} />
    )
  })

  let newMessagesData = messagesData.map(m => {
    return (
      <Message message={m.message} />
    )
  })

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {newDialogsData}
      </div>
      <div className={s.messages}>
        {newMessagesData}
      </div>
    </div>
  );
};

export default Dialogs;
