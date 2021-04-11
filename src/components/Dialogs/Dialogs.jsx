import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/state";

const Dialogs = (props) => {
  let state = props.store.getState().messagesPage;

  let dialogElements = state.dialogs.map(d => {
    return (
      <DialogItem name={d.name} id={d.id} imgURL={d.imgURL} />
    )
  })

  let newMessageBody = state.newMessageBody;

  let messageElements = state.messages.map(m => {
    return (
      <Message message={m.message} />
    )
  })

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
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
