import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const postData = [
  { id: "1", message: "My name is Kamil", likesCount: "234" },
  { id: "2", message: "My name is Artem", likesCount: "24" },
  { id: "3", message: "Im so tired", likesCount: "2422" },
]

const MyPosts = () => {
  return (
    <div className={s.content}>
      <div>
        мои посты
        <div>
          <textarea></textarea>
          <div>
            <button>Add post</button>
          </div>
        </div>
        <div className={s.posts}>
          <Post message="hi" likesCount="14" />
          <Post message="im ok" likesCount="5" />
          <Post message="im ok" likesCount="5" />
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
