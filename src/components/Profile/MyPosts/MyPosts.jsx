import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map(p => {
    return (
      <Post message={p.message} likesCount={p.likesCount} />
    )
  })

  let newPostElement = React.createRef();

  const addPost = () => {
    props.addPost();
   }

  let onPostChange = () => {
    let data = newPostElement.current.value;
    props.updateNewPostText(data);
  }

  return (
    <div className={s.content}>
      <div>
        <h1><i>My posts</i></h1>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
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
