import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <img
        src="https://klike.net/uploads/posts/2020-07/1594621599_2.jpg"
        alt="img"
      />
      <div >
        <div>автар + описание</div>
      </div>
      <MyPosts /> 
    </div>
  );
};

export default Profile;
