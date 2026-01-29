import Section from './Section';
import styles from './Timeline.module.scss';

export default function Timeline() {
    const steps = [
        {
            number: 1,
            title: "Definir Stack",
            desc: "Selección final: Cloudbeds, Mews o SiteMinder."
        },
        {
            number: 2,
            title: "Assets",
            desc: "Recopilación de logo, brand book, fotos y textos base."
        },
        {
            number: 3,
            title: "Kickoff & UI",
            desc: "Reunión de arranque y diseño de wireframes/prototipo."
        },
        {
            number: 4,
            title: "Build & Integ.",
            desc: "Desarrollo en Webflow, CMS e integración del booking engine."
        },
        {
            number: 5,
            title: "QA & Go-Live",
            desc: "Tests de rendimiento, revisión SEO y lanzamiento oficial.",
            isFinal: true
        }
    ];

    return (
        <Section id="timeline" title="Próximos Pasos" subtitle="Roadmap de Ejecución">
            <p className={styles.intro}>
                Ruta crítica para el lanzamiento de la plataforma digital.
            </p>

            <div className={styles.timeline}>
                <div className={styles.line}></div>
                <div className={styles.lineFill}></div>

                <div className={styles.steps}>
                    {steps.map((step) => (
                        <div key={step.number} className={styles.step}>
                            <div className={`${styles.circle} ${step.isFinal ? styles.circleFinal : ''}`}>
                                {step.isFinal ? <i className="fa-solid fa-flag-checkered"></i> : step.number}
                            </div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
