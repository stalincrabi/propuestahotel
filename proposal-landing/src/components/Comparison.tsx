import Section from './Section';
import styles from './Comparison.module.scss';
import data from '@/content/proposal.es.json';

const booking = data.sections.find((s: any) => s.id === 'booking') as any;

export default function Comparison() {
    if (!booking) return null;

    return (
        <Section id="booking" title={booking.title} subtitle={booking.subtitle}>
            <div className={styles.grid}>
                {booking.options.map((option: any, i: number) => (
                    <div key={i} className={styles.card}>
                        <div className={styles.header}>
                            <h3>{option.name}</h3>
                            <span className={styles.tagline}>{option.tagline}</span>
                        </div>
                        <p className={styles.desc}>{option.desc}</p>
                        <ul className={styles.pros}>
                            {option.pros.map((pro: string, j: number) => (
                                <li key={j}>✓ {pro}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className={styles.recommendation}>
                <p>{booking.recommendation}</p>
            </div>
        </Section>
    );
}
