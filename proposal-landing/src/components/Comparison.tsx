import Section from './Section';
import styles from './Comparison.module.scss';
import data from '@/content/proposal.es.json';

const booking = data.sections.find((s: any) => s.id === 'booking') as any;

export default function Comparison() {
    if (!booking) return null;

    return (
        <Section id="booking" title="3 Opciones Recomendadas" subtitle="Booking & Distribución">
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
                    </div>
                ))}
            </div>

            <div className={styles.recommendationWrapper}>
                <div className={styles.icon}>
                    <i className="fa-solid fa-lightbulb"></i>
                </div>
                <div className={styles.recText}>
                    <h4>Recomendación Práctica (Setup Típico)</h4>
                    <p>
                        Combinar <strong>Direct Booking (Cloudbeds o Mews)</strong> para la web + <strong>SiteMinder</strong> para gestionar la distribución en OTAs.
                    </p>
                </div>
                <div className={styles.result}>
                    <p>Resultado</p>
                    <p>
                        <i className="fa-solid fa-arrow-trend-up"></i> Max. ROI
                    </p>
                </div>
            </div>
        </Section>
    );
}
