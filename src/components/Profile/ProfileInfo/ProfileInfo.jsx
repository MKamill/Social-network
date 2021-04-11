import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={s.content}>
      <div className={s.contentImage}>
        <img
          src="https://img1.goodfon.ru/wallpaper/nbig/c/35/nochnye-goroda-ogni-doma.jpg"
          alt="img"
        />
      </div>
      <div className={s.descriptionBlock}>
        <div>Аватар + описание</div>
      </div>
    </div>
  )
}

export default ProfileInfo;
