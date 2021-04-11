import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.profilePage.posts.map(p => {
    return (
      <Post message={p.message} likesCount={p.likesCount} />
    )
  })

  let newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let data = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(data));
  }

  return (
    <div className={s.content}>
      <div>
        <h1><i>My posts</i></h1>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.profilePage.newPostText} />
          <div>
            <button onClick={addPost}>Add post</button>
          </div>
        </div>
        <div className={s.posts}>
          {postElements}
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
