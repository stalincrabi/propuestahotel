import Section from './Section';
import styles from './Timeline.module.scss';
import data from '@/content/proposal.es.json';

const timeline = data.sections.find((s: any) => s.id === 'timeline') as any;

export default function Timeline() {
    if (!timeline) return null;

    return (
        <Section id="timeline" title={timeline.title} subtitle={timeline.subtitle}>
            <p className={styles.intro}>
                Ruta crítica para el lanzamiento de la plataforma digital.
            </p>

            <div className={styles.timeline}>
                <div className={styles.line}></div>
                <div className={styles.lineFill}></div>

                <div className={styles.steps}>
                    {timeline.steps.map((step: any, index: number) => (
                        <div key={index} className={styles.step}>
                            <div className={`${styles.circle} ${step.isFinal ? styles.circleFinal : ''}`}>
                                {step.isFinal ? <i className="fa-solid fa-flag-checkered"></i> : index + 1}
                            </div>
                            <h3 className={styles.stepTitle}>
                                {step.title}
                                {step.duration && <span className={styles.duration}> ({step.duration})</span>}
                            </h3>
                            <p className={styles.stepDesc}>{step.desc}</p>
                            {step.needs && (
                                <div className={styles.clientNeeds}>
                                    <strong>Necesitas proveer:</strong> {step.needs}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
