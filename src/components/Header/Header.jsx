import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        src="https://resheto.net/images/mater/kartinka_motivatsiya_tsitata_9.jpg"
        alt="img"
      />
      <div className={classes.loginBlock}>
        {props.isAuth ? props.login :
          <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header