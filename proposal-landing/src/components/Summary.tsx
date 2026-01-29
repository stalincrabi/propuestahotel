import Section from './Section';
import styles from './Summary.module.scss';
import data from '@/content/proposal.es.json';

const summary = data.sections.find((s: any) => s.id === 'summary') as any;

export default function Summary() {
    if (!summary) return null;

    return (
        <Section id="summary" title={summary.title}>
            <div className={styles.grid}>
                {summary.content.map((item: string, i: number) => (
                    <div key={i} className={styles.item}>
                        <span className={styles.bullet}>•</span>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
