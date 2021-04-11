import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <hr />
      <img
        src="https://klike.net/uploads/posts/2019-06/1560329641_2.jpg"
        alt="img"
        style={{ width: "50px", height: "50px" }}
      />
      {props.message}
      <div>
        <span>like {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
