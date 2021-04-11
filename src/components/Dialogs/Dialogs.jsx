import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import React from "react";

const Dialogs = (props) => {
  let dialogElements = props.dialogs.map(d => {
    return (
      <DialogItem name={d.name} id={d.id} imgURL={d.imgURL} />
    )
  })

  let messageElements = props.messages.map(m => {
    return (
      <Message message={m.message} />
    )
  })

  let newMessage = React.createRef();

  let showMess = () => {
    let mess = newMessage.current.value;
    alert(mess)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        {messageElements}
        <textarea ref={newMessage}></textarea>
        <button onClick={showMess}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
