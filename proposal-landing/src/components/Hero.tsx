import styles from './Hero.module.scss';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.badgeWrapper}>
                        <span className="badge">Deck Landing</span>
                    </div>

                    <h1 className={styles.title}>
                        Webflow Website <br />
                        <span className={styles.highlight}>+ Booking System</span>
                    </h1>

                    <div className={styles.meta}>
                        <div className={styles.metaItem}>
                            <i className="fa-solid fa-hotel"></i>
                            <div>
                                <h2>Hotel Boutique (83 habitaciones)</h2>
                                <p>Santa Eulària des Riu, Ibiza</p>
                            </div>
                        </div>
                        <div className={styles.metaItem}>
                            <i className="fa-regular fa-calendar-check"></i>
                            <p>Apertura estimada: <strong>2027</strong></p>
                        </div>
                    </div>

                    <div className={styles.investment}>
                        <div className={styles.priceBlock}>
                            <small>Inversión Estimada</small>
                            <div className={styles.price}>
                                $4,380 USD
                                <span className={styles.sub}>Proyecto Único</span>
                            </div>
                        </div>
                        <div className={styles.priceBlock}>
                            <small>Soporte & Webmaster</small>
                            <div className={styles.price}>
                                $200 USD
                                <span className={styles.sub}>/ mes</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.visual}>
                    <div className={styles.imageCard}></div>

                    {/* Floating location card */}
                    <div className={styles.floatingCard}>
                        <div className={styles.floatingHeader}>
                            <small>UBICACIÓN</small>
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <p className={styles.floatingTitle}>Ibiza</p>
                        <p className={styles.floatingSubtitle}>Islas Baleares, España</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
