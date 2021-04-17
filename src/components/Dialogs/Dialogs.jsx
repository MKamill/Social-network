import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import React from "react";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
  let state = props.messagesPage;

  let dialogElements = state.dialogs.map(d => {
    return (
      <DialogItem name={d.name} key={d.id} id={d.id} imgURL={d.imgURL} />
    )
  })

  let newMessageBody = state.newMessageBody;

  let messageElements = state.messages.map(m => {
    return (
      <Message message={m.message} key={m.id} />
    )
  })

  let onSendMessageClick = () => {
    props.sendMessage();

  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  if (!props.isAuth) {
    return <Redirect to={'/login'} />
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        <div>{messageElements}</div>
        <div>
          <div><textarea onChange={onNewMessageChange} value={newMessageBody} placeholder="Enter your message"></textarea></div>
          <div><button onClick={onSendMessageClick}>Send</button></div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
