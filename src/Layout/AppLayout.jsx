import NavBar from "./NavBar";
import Footer from "./Footer";
import styles from "./AppLayout.module.css";

function AppLayout({ children }) {
  return (
    <div className={styles.mainLayout}>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default AppLayout;
