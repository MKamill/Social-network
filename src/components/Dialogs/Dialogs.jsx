import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
    let dialogElements = props.dialogs.map(d => {
    return (
      <DialogItem name={d.name} id={d.id} imgURL={d.imgURL}/>
    )
  })

  let messageElements = props.messages.map(m => {
    return (
      <Message message={m.message} />
    )
  })

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        {messageElements}
      </div>
    </div>
  );
};

export default Dialogs;
