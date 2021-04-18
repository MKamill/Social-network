import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import React from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from 'redux-form'
import { Textarea } from "../common/FormControls/FormControls";
import { maxLength, required } from "../../Utils/Validators/validators";

let maxLegth5 = maxLength(5)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} validate={[required, maxLegth5]} placeholder="Enter your message" name={'newMessageBody'} />
      </div>
      <div>
        <button >Send</button>
      </div>
    </form>
  )
}

const ReduxMessageForm = reduxForm({
  form: 'addMessage'
})(AddMessageForm);


const Dialogs = (props) => {
  let state = props.messagesPage;

  let dialogElements = state.dialogs.map(d => {
    return (
      <DialogItem name={d.name} key={d.id} id={d.id} imgURL={d.imgURL} />
    )
  })

  let messageElements = state.messages.map(m => {
    return (
      <Message message={m.message} key={m.id} />
    )
  })

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
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
        <ReduxMessageForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
