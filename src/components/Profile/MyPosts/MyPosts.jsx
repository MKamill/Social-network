import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from 'redux-form'
import { maxLength, required } from "../../../Utils/Validators/validators";
import { Textarea } from "../../common/FormControls/FormControls";

const MyPosts = (props) => {
  let postElements = props.posts.map(p => {
    return (
      <Post message={p.message} key={p.id} likesCount={p.likesCount} />
    )
  })

  const onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={s.content}>
      <div>
        <h1><i>My posts</i></h1>
        <ReduxAddNewPostForm onSubmit={onAddPost} />
        <div className={s.posts}>
          {postElements}
        </div>
      </div>
    </div>
  );
};


const maxLength15 = maxLength(15)

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name="newPostText" component={Textarea} validate={[required, maxLength15]} />
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

let ReduxAddNewPostForm = reduxForm({
  form: 'profileAddNewPostForm'
})(AddNewPostForm);


export default MyPosts;
