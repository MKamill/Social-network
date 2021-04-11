import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map(p => {
    return (
      <Post message={p.message} likesCount={p.likesCount} />
    )
  })
  return (
    <div className={s.content}>
      <div>
        <h1><i>My posts</i></h1>
        <div>
          <textarea></textarea>
          <div>
            <button>Add post</button>
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
