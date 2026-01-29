import styles from './Hero.module.scss';
import data from '@/content/proposal.es.json';

const hero = data.sections.find((s: any) => s.id === 'hero') as any;

export default function Hero() {
    if (!hero) return null;

    return (
        <section id="hero" className={styles.hero}>
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
                            <span className={styles.icon}>🏨</span>
                            <div>
                                <strong>{data.meta.hotel}</strong>
                            </div>
                        </div>
                        <div className={styles.metaItem}>
                            <span className={styles.icon}>🗓️</span>
                            <div>{data.meta.opening}</div>
                        </div>
                    </div>

                    <div className={styles.investment}>
                        <div className={styles.priceBlock}>
                            <small>Inversión Estimada</small>
                            <div className={styles.price}>$4,380 USD <span className={styles.sub}>Proyecto Único</span></div>
                        </div>
                        <div className={styles.priceBlock}>
                            <small>Soporte & Webmaster</small>
                            <div className={styles.price}>$200 USD <span className={styles.sub}>/ mes</span></div>
                        </div>
                    </div>

                </div>

                <div className={styles.visual}>
                    {/* Placeholder for the hotel image show in reference */}
                    <div className={styles.imageCard}></div>
                </div>
            </div>
        </section>
    );
}
