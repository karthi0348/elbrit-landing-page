"use client"

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from "../styles/Features.module.css";
import { FaFlask, FaLeaf, FaMapMarkerAlt, FaShippingFast, FaShieldAlt, FaRecycle } from "react-icons/fa";

export default function Features() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.featuresGrid}>
          <div 
            className={styles.featureCard}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className={styles.featureIcon}>
              <FaFlask />
            </div>
            <h3>Clinically Studied</h3>
            <p>All products that we offer have undergone lab and safety tests</p>
          </div>

          <div 
            className={styles.featureCard}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className={styles.featureIcon}>
              <FaLeaf />
            </div>
            <h3>Vegetarian Friendly</h3>
            <p>We have a wide selection of vegetarian products to meet your needs</p>
          </div>

          <div 
            className={styles.featureCard}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className={styles.featureIcon}>
              <FaMapMarkerAlt />
            </div>
            <h3>Made In India</h3>
            <p>Shop local and explore health products made right here in India</p>
          </div>

          <div 
            className={styles.featureCard}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className={styles.featureIcon}>
              <FaShippingFast />
            </div>
            <h3>Free Shipping</h3>
            <p>We deliver to your door with no shipping costs on your orders</p>
          </div>

          <div 
            className={styles.featureCard}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className={styles.featureIcon}>
              <FaShieldAlt />
            </div>
            <h3>No Risk</h3>
            <p>We ensure that all products are safe and within their use-by date</p>
          </div>

          <div 
            className={styles.featureCard}
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className={styles.featureIcon}>
              <FaRecycle />
            </div>
            <h3>GMO Free</h3>
            <p>Natural, no modified products and derivatives for those who need it</p>
          </div>
        </div>
      </div>
    </section>
  );
}