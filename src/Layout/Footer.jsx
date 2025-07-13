import styles from "./Footer.module.css";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          <span className={styles.emoji}>©</span> {currentYear} All rights
          reserved |<span className={styles.emoji}> 🎭</span> Entertainment for
          everyone
        </p>
      </div>
    </footer>
  );
}

export default Footer;
