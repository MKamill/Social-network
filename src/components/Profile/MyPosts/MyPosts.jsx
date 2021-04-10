import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.content}>
      <div>
        мои посты
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div>
          <Post message="hi" likesCount="14"/>
          <Post message="im ok" likesCount="5"/>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
