import Logo from "./Logo";
import styles from "./NavBar.module.css";

function NavBar({ children }) {
  return (
    <nav className={styles.navbar}>
      <Logo />
      {children}
    </nav>
  );
}

export default NavBar;
