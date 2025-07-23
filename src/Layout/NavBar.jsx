import { NavLink, useLocation } from "react-router-dom";
import Logo from "../components/ui/Logo";
import styles from "./NavBar.module.css";
import {
  IoBookmarkOutline,
  IoHomeOutline,
  IoSearchOutline,
} from "react-icons/io5";

function NavBar() {
  const location = useLocation();
  const isMovieDetailsPage = location.pathname.startsWith("/movie/");

  return (
    <nav className={styles.navbar}>
      <Logo />
      <div className={styles.navLinks}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          <IoHomeOutline className={styles.navIcon} />
          Home
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) => {
            const shouldBeActive = isActive || isMovieDetailsPage;
            return shouldBeActive
              ? `${styles.navLink} ${styles.active}`
              : styles.navLink;
          }}
        >
          <IoSearchOutline className={styles.navIcon} />
          Search
        </NavLink>
        <NavLink
          to="/watched"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          <IoBookmarkOutline className={styles.navIcon} />
          Watched list
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
