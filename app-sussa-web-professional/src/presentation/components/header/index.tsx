import styles from './style.module.css';
import SussaLogo from '../../../assets/images/logo.png';
import { Link, useLocation } from 'react-router-dom';

interface IHeaderProps {
  backgroundDark?: boolean;
}

const Header = ({ backgroundDark }: IHeaderProps) => {
  const location = useLocation()
  return (
    <header className={`${styles.sussaHeader}`}>
      <img 
        src={
          SussaLogo
        }
        alt="Sussa logo"
      />
      <nav className={
        backgroundDark
        ?
        styles.textWhite
        :
        styles.textBlack
      }>
        <Link to="/">
          <span
            className={
              `${styles.headerNavItem} ${
                location.pathname === "/" &&
                styles.headerNavItemActive
              }`
            }
          >
              Home
          </span>
        </Link>
        <Link to="/login">
            <span
              className={
                `${styles.headerNavItem} ${
                  location.pathname === "/login" &&
                  styles.headerNavItemActive
                }`
              }
            >
              Entrar
            </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;