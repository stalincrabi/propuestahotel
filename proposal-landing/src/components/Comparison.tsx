import Section from './Section';
import styles from './Comparison.module.scss';
import data from '@/content/proposal.es.json';

const booking = data.sections.find((s: any) => s.id === 'booking') as any;

export default function Comparison() {
    if (!booking) return null;

    return (
        <Section id="comparison" title={booking.title} subtitle={booking.subtitle}>
            <p className={styles.intro}>
                {booking.intro}
            </p>

            <div className={styles.grid}>
                {booking.options.map((option: any, i: number) => (
                    <div key={i} className={styles.card}>
                        <div className={styles.header}>
                            <h3>{option.name}</h3>
                            <span className="badge">Opción {String.fromCharCode(65 + i)}</span>
                        </div>

                        <p className={styles.tagline}>{option.tagline}</p>
                        <p className={styles.desc}>{option.desc}</p>

                        <div className={styles.divider}></div>

                        <div className={styles.prosLabel}>PROS</div>
                        <ul className={styles.pros}>
                            {option.pros.map((pro: string, j: number) => (
                                <li key={j}>
                                    <span className={styles.check}>✓</span> {pro}
                                </li>
                            ))}
                        </ul>
                        {option.criteria && (
                            <div className={styles.criteria}>
                                <strong>Cuándo conviene:</strong> {option.criteria}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {booking.important && (
                <div className={styles.important}>
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <p><strong>Importante:</strong> {booking.important}</p>
                </div>
            )}

            <div className={styles.recommendationWrapper}>
                <div className={styles.icon}>
                    <i className="fa-solid fa-lightbulb"></i>
                </div>
                <div className={styles.recText}>
                    <h4>Recomendación Práctica (Setup Típico)</h4>
                    <p>{booking.recommendation}</p>
                </div>
            </div>
        </Section>
    );
}
