"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from "../styles/Footer.module.css";
import { BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div 
          className={styles.contactInfo}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div 
            className={styles.contactCard}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <BiPhoneCall size={50} color="#2196f3" />
              </div>
            </div>

            <div className={styles.contactDetails}>
              <h4>Phone Number</h4>
              <p>+974 3118 1843</p>
            </div>
          </div>

          <div 
            className={styles.contactCard}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <MdEmail size={50} color="#2196f3" />
              </div>
            </div>

            <div className={styles.contactDetails}>
              <h4>Email Address</h4>
              <p>Elbritqat@gmail.com</p>
            </div>
          </div>

          <div 
            className={styles.contactCard}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <FaMapMarkerAlt size={50} color="#2196f3" />
              </div>
            </div>

            <div className={styles.contactDetails}>
              <h4>Office Location</h4>
              <p>Ambassador Street, Zone 61,</p>
            </div>
          </div>
        </div>

        <div 
          className={styles.companySection}
          data-aos="fade-up"
          data-aos-delay="600"
        >
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

        <div 
          className={styles.copyright}
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <p>
            © Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai
            400051
          </p>
        </div>
      </div>
    </footer>
  );
}