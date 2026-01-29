import Section from './Section';
import styles from './CTA.module.scss';
import data from '@/content/proposal.es.json';

const cta = data.sections.find((s: any) => s.id === 'next_steps') as any;

export default function CTA() {
    if (!cta) return null;

    return (
        <Section id="next_steps" title={cta.title}>
            <div className={styles.container}>
                <div className={styles.steps}>
                    {cta.steps.map((step: string, i: number) => (
                        <div key={i} className={styles.check}>
                            <span>✓</span> {step}
                        </div>
                    ))}
                </div>
                <a href="mailto:hola@graftly.co" className={styles.button}>{cta.button || 'Contactar'}</a>
                <p className={styles.contact}>{cta.contact}</p>
            </div>
        </Section>
    )
}
