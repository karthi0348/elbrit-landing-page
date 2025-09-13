import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <a href="#" className={styles.logo}>
            <img
              src="/logo.png"   
              alt="Elbrit Logo"
              className={styles.logoImage}
            />
          </a>

        </nav>
      </div>
    </header>
  );
}
