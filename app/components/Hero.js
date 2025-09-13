import styles from "../styles/Hero.module.css";
import { GiPill } from "react-icons/gi";
import { GiWeightScale } from "react-icons/gi";
import { GiCookingPot } from "react-icons/gi";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Essential Vitamins</h1>

        <div className={styles.heroContent}>
          <div className={styles.leftContent}>
            <p className={styles.subtitle}>Online Medical Supplies</p>
            <h2 className={styles.title}>
              Get Your Vitamins
              <br />& Minerals
            </h2>
            <button className={styles.exploreButton}>EXPLORE</button>
          </div>

          <div className={styles.centerContent}>
            <div className={styles.vitaminBottle}>
              <img
                src="/f2-1.png.png"
                alt="Probiotic Supplement Bottle"
                className={styles.bottleImage}
              />
              <div className={styles.capsule1}></div>
              <div className={styles.capsule2}></div>
              <div className={styles.capsule3}></div>
            </div>
          </div>

          <div className={styles.rightContent}>
            <div className={styles.categoryItem}>
              <div className={styles.categoryIcon}>
                <GiPill size={40} color="white" />
              </div>
              <div className={styles.categoryText}>
                <h3>Vitamins</h3>
                <p>
                  Increased Vitamins and
                  <br />
                  minerals in your diet
                </p>
              </div>
            </div>

            <div className={styles.categoryItem}>
              <div className={styles.categoryIcon}>
                <GiWeightScale size={40} color="white" />
              </div>
              <div className={styles.categoryText}>
                <h3>Weight Loss</h3>
                <p>Find scientifically proven solutions</p>
              </div>
            </div>

            <div className={styles.categoryItem}>
              <div className={styles.categoryIcon}>
                <GiCookingPot size={40} color="white" />
              </div>

              <div className={styles.categoryText}>
                <h3>Functional Foods</h3>
                <p>From protein powers to baby formula</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
