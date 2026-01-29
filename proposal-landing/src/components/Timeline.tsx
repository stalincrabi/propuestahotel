import Section from './Section';
import styles from './Timeline.module.scss';

// Steps data hardcoded or from JSON, tailored to match the image
const steps = [
    { id: 1, title: 'Definir Stack', desc: 'Selección final: Cloudbeds, Mews o SiteMinder.' },
    { id: 2, title: 'Assets', desc: 'Recopilación de logo, brand book, fotos y textos base.' },
    { id: 3, title: 'Kickoff & UI', desc: 'Reunión de arranque y diseño de wireframes/prototipo.' },
    { id: 4, title: 'Build & Integ.', desc: 'Desarrollo en Webflow, CMS e integración del booking engine.' },
    { id: 5, title: 'QA & Go-Live', desc: 'Tests de rendimiento, revisión SEO y lanzamiento oficial.', isFinal: true }
];

export default function Timeline() {
    return (
        <Section id="roadmap" title="Próximos Pasos" subtitle="Ruta crítica para el lanzamiento de la plataforma digital.">
            <div className={styles.roadmap}>
                <div className={styles.line}></div>
                {steps.map((step) => (
                    <div key={step.id} className={`${styles.step} ${step.isFinal ? styles.final : ''}`}>
                        <div className={styles.marker}>
                            {step.isFinal ? '🏁' : step.id}
                        </div>
                        <h4 className={styles.title}>{step.title}</h4>
                        <p className={styles.desc}>{step.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
