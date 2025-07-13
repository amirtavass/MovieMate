import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <img src="/images/cinema-theater.jpg" alt="Cinema theater" />
      </div>

      <div className={styles.heroContent}>
        <h1>Your personal movie universe</h1>
        <p className={styles.description}>
          Discover, rate, and track your favorite films
        </p>

        <Link to="/search" className={styles.exploreButton}>
          Start Exploring Movies
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
