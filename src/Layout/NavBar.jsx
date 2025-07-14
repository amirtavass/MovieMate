import { NavLink, useLocation } from "react-router-dom";
import Logo from "../components/ui/Logo";
import styles from "./NavBar.module.css";

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
          HomePage
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
          Search Movies
        </NavLink>
        <NavLink
          to="/watched"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          My watched list
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
