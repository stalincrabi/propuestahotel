import Section from './Section';
import styles from './Objectives.module.scss';
import data from '@/content/proposal.es.json';

const objectives = data.sections.find((s: any) => s.id === 'objectives') as any;

export default function Objectives() {
    if (!objectives) return null;

    return (
        <Section id="objectives" title={objectives.title} dark>
            <div className={styles.grid}>
                {objectives.cards.map((card: any, i: number) => (
                    <div key={i} className={styles.card}>
                        <div className={styles.icon}>{i + 1}</div>
                        <h3>{card.title}</h3>
                        <p>{card.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
