import styles from './Hero.module.scss';
import data from '@/content/proposal.es.json';

const hero = data.sections.find((s: any) => s.id === 'hero') as any;

export default function Hero() {
    if (!hero) return null;

    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>{hero.title}</h1>
                <p className={styles.subtitle}>{hero.subtitle}</p>
                <a href="#objectives" className={styles.button}>{hero.cta}</a>
            </div>
        </section>
    );
}
