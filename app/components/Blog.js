import styles from '../styles/Blog.module.css';
import Image from 'next/image';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      date: "20 APR",
      title: "The Covid-19 Epidemic In 2022 Is Back",
      image: "/blog1-450x580.jpg.png",
      imageAlt: "JellyBee Turmeric & Ginger supplement bottle",
      type: "landscape"
    },
    {
      id: 2,
      date: "20 APR", 
      title: "The Covid-19 Epidemic In 2022 Is Back",
      image: "/blog1-450x580.jpg.png",
      imageAlt: "JellyBee Turmeric & Ginger supplement bottle",
      type: "portrait"
    },
    {
      id: 3,
      date: "20 APR",
      title: "The Covid-19 Epidemic In 2022 Is Back", 
      image: "/blog1-450x580.jpg.png",
      imageAlt: "JellyBee Turmeric & Ginger supplement bottle",
      type: "landscape"
    },
    {
      id: 4,
      date: "20 APR",
      title: "The Covid-19 Epidemic In 2022 Is Back",
      image: "/blog1-450x580.jpg.png",
      imageAlt: "JellyBee Turmeric & Ginger supplement bottle",
      type: "portrait"
    },
    {
      id: 5,
      date: "20 APR",
      title: "The Covid-19 Epidemic In 2023 Is Back",
      image: "/blog2-450x580.jpg.png",
      imageAlt: "Various colorful pills and capsules in hand",
      type: "portrait"
    },
    {
      id: 6,
      date: "17 MAR",
      title: "The Covid-19 Epidemic In 2022 Is Back",
      image: "/blog2-450x580.jpg.png",
      imageAlt: "Medicine capsules and tablets in palm",
      type: "landscape"
    },
    {
      id: 7,
      date: "20 APR",
      title: "The Covid-19 Epidemic In 2022 Is Back",
      image: "/blog2-450x580.jpg.png",
      imageAlt: "Colorful pills and capsules in palm",
      type: "portrait"
    },
    {
      id: 8,
      date: "17 MAR",
      title: "The Covid-19 Epidemic In 2022 Is Back",
      image: "/blog2-450x580.jpg.png",
      imageAlt: "Medicine capsules and tablets",
      type: "landscape"
    }
  ];

  return (
    <section className={styles.blogSection} id="blog">
      <div className={styles.container}>
        <div className={styles.blogHeader}>
          <p className={styles.blogSubtitle}>OUR BLOG</p>
          <h2 className={styles.blogMainTitle}>Latest News</h2>
        </div>
        <div className={styles.blogGrid}>
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className={`${styles.blogCard} ${styles[`card${post.id}`]} ${styles[post.type]}`}
            >
              <div className={styles.cardBackground}>
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className={styles.backgroundImage}
                  priority={post.id <= 4}
                />
                <div className={styles.cardOverlay}></div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.dateTag}>
                  {post.date}
                </div>
                <h3 className={styles.cardTitle}>{post.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}