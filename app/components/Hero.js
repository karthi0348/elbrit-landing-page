"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from "../styles/Hero.module.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 
          className={styles.mainTitle}
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Essential Vitamins
        </h1>

        <div className={styles.heroContent}>
          <div 
            className={styles.leftContent}
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <p className={styles.subtitle}>Online Medical Supplies</p>
            <h2 className={styles.title}>
              Get Your Vitamins
              <br />& Minerals
            </h2>
            <button className={styles.exploreButton}>EXPLORE</button>
          </div>

          <div 
            className={styles.centerContent}
            data-aos="fade-up"
            data-aos-delay="600"
          >
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
            <div 
              className={styles.categoryItem}
              data-aos="fade-left"
              data-aos-delay="800"
            >
              <div className={styles.categoryIcon}>
                <img
                  src="/Frame-8363.png.png"
                  alt="capsule"
                  className={styles.IconImage}
                />
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

            <div 
              className={styles.categoryItem}
              data-aos="fade-left"
              data-aos-delay="1000"
            >
              <div className={styles.categoryIcon}>
                <img
                  src="/Frame-8364.png.png"
                  alt="weigh loss"
                  className={styles.IconImage}
                />
              </div>
              <div className={styles.categoryText}>
                <h3>Weight Loss</h3>
                <p>
                  Find scientifically proven solutions
                </p>
              </div>
            </div>

            <div 
              className={styles.categoryItem}
              data-aos="fade-left"
              data-aos-delay="1200"
            >
              <div className={styles.categoryIcon}>
                <img
                  src="/Frame-8365.png.png"
                  alt="Foods"
                  className={styles.IconImage}
                />
              </div>

              <div className={styles.categoryText}>
                <h3>Functional Foods</h3>
                <p>
                  From protein powers to baby formula
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}