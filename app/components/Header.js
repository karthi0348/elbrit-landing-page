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
          {/* <ul className={styles.navLinks}>
            <li><a href="#vitamins">Vitamins</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul> */}
        </nav>
      </div>
    </header>
  );
}
