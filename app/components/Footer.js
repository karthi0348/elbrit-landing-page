import styles from "../styles/Footer.module.css";


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <div className={styles.contactCard}>
              <div className={styles.icon}>
                <img
                  src="/phone.png"
                  alt="phone"
                  className={styles.IconImage}
                />{" "}
            </div>

            <div className={styles.contactDetails}>
              <h4>Phone Number</h4>
              <p>+974 3118 1843</p>
            </div>
          </div>

          <div className={styles.contactCard}>
              <div className={styles.icon}>
                <img
                  src="/email.png"
                  alt="email"
                  className={styles.IconImage}
                />{" "}
            </div>

            <div className={styles.contactDetails}>
              <h4>Email Address</h4>
              <p>Elbritqat@gmail.com</p>
            </div>
          </div>

          <div className={styles.contactCard}>
              <div className={styles.icon}>
                <img
                  src="/location.png"
                  alt="location"
                  className={styles.IconImage}
                />{" "}
            </div>

            <div className={styles.contactDetails}>
              <h4>Office Location</h4>
              <p>Ambassador Street, Zone 61,</p>
            </div>
          </div>
        </div>

        <div className={styles.companySection}>
          <div className={styles.logoContainer}>
            <div className="logoSection">
              <img src="/logo.png" alt="Elbrit" className={styles.logo} />
            </div>
            <p className={styles.description}>
              Your health, physical and emotional well-being is important to us.
              We are always by your side and have made it even easier for you to
              find the necessary vitamins.
            </p>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>
            © Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai
            400051
          </p>
        </div>
      </div>
    </footer>
  );
}
