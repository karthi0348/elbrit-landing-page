import styles from '../styles/Vitamins.module.css';

export default function Vitamins() {
  const mainVitamins = [
    {
      name: "Vitamin C",
      description: "Vitamin C as ascorbic acid",
      image: "/h2-b1.jpg.png",
      color: "#E8F4FD",
      textColor: "#333"
    },
    {
      name: "Vitamin B3",
      description: "Niacin for healthy gut and skin",
      image: "/bn2-2.jpg.png",
      color: "#E8F5E8",
      textColor: "#333"
    }
  ];

  const otherIngredients = [
    {
      name: "Magnesium",
      description: "Boost energy and support muscle function",
      image: "/bn2-3.jpg.png",
      color: "#E3F2FD",
      textColor: "#333"
    },
    {
      name: "Hyaluronic Acid",
      description: "For smooth, supple and soft skin!",
      image: "/bn2-4.jpg.png",
      color: "#F3E5F5",
      textColor: "#333"
    },
    {
      name: "Lactobacillus",
      description: "Invigorate your gut microbiome",
      image: "/bn2-5.jpg.png",
      color: "#FFF3E0",
      textColor: "#333"
    }
  ];

  return (
    <section className={styles.vitaminsSection}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.headerText}>
            <h3 className={styles.sectionLabel}>INGREDIENTS</h3>
            <h2 className={styles.sectionTitle}>Better Ingredients</h2>
            <p className={styles.sectionDescription}>
              Only the best when you choose products offered on our platform - high-quality 
              ingredients for high-quality products!
            </p>
          </div>

          {mainVitamins.map((vitamin, index) => (
            <div 
              key={index} 
              className={`${styles.vitaminCard} ${styles.mainVitaminCard}`}
              style={{ 
                backgroundImage: `url(${vitamin.image})`,
                backgroundColor: vitamin.color,
              }}
            >
              <div className={styles.overlay}></div>
              <div className={styles.cardContent}>
                <h3 style={{ color: vitamin.textColor }}>{vitamin.name}</h3>
                <p style={{ color: vitamin.textColor }}>{vitamin.description}</p>
                <a href="#" className={styles.seeMoreBtn}>SEE MORE</a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottomRow}>
          {otherIngredients.map((ingredient, index) => (
            <div 
              key={index} 
              className={styles.vitaminCard}
              style={{ 
                backgroundImage: `url(${ingredient.image})`,
                backgroundColor: ingredient.color,
              }}
            >
              <div className={styles.overlay}></div>
              <div className={styles.cardContent}>
                <h3 style={{ color: ingredient.textColor }}>{ingredient.name}</h3>
                <p style={{ color: ingredient.textColor }}>{ingredient.description}</p>
                <a href="#" className={styles.seeMoreBtn}>SEE MORE</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
