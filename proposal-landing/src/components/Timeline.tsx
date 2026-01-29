import Section from './Section';
import styles from './Timeline.module.scss';
import data from '@/content/proposal.es.json';

const timeline = data.sections.find((s: any) => s.id === 'timeline') as any;

export default function Timeline() {
    if (!timeline) return null;

    return (
        <Section id="roadmap" title={timeline.title}>
            <div className={styles.timeline}>
                {timeline.steps.map((step: string, i: number) => (
                    <div key={i} className={styles.step}>
                        <div className={styles.number}>{i + 1}</div>
                        <p>{step}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
