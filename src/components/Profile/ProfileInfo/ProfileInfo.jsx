import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <img
        src="https://img1.goodfon.ru/wallpaper/nbig/c/35/nochnye-goroda-ogni-doma.jpg"
        alt="img"
      />
      <div className={s.descriptionBlock}>
        <div>автар + описание</div>
      </div>
    </div>
  )
}

export default ProfileInfo;
