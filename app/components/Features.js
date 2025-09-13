import styles from "../styles/Features.module.css";

export default function Features() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <img
                src="/a.item-icon-e.png"
                alt="clinical"
                className={styles.IconImage}
              />{" "}
            </div>
            <h3>Clinically Studied</h3>
            <p>
              All products that we offer have undergone lab and safety tests
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <img
                src="/a.item-icon-f.png"
                alt="veg"
                className={styles.IconImage}
              />{" "}
            </div>
            <h3>Vegetarian Friendly</h3>
            <p>
              We have a wide selection of vegetarian products to meet your needs
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <img
                src="/a.item-icon-g.png"
                alt="capsule"
                className={styles.IconImage}
              />{" "}
            </div>
            <h3>Made In India</h3>
            <p>
              Shop local and explore health products made right here in India
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <img
                src="/a.item-icon-j.png"
                alt="capsule"
                className={styles.IconImage}
              />{" "}
            </div>
            <h3>Free Shipping</h3>
            <p>We deliver to your door with no shipping costs on your orders</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <img
                src="/a.item-icon-h.png"
                alt="capsule"
                className={styles.IconImage}
              />{" "}
            </div>
            <h3>No Risk</h3>
            <p>
              We ensure that all products are safe and within their use-by date
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <img
                src="/a.item-icon-i.png"
                alt="capsule"
                className={styles.IconImage}
              />{" "}
            </div>
            <h3>GMO Free</h3>
            <p>
              Natural, no modified products and derivatives for those who need
              it
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
