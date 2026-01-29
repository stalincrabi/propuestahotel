import Section from './Section';
import styles from './Scope.module.scss';
import data from '@/content/proposal.es.json';

const scope = data.sections.find((s: any) => s.id === 'scope') as any;

export default function Scope() {
    if (!scope) return null;

    return (
        <Section id="alcance" title={scope.title} dark>
            <div className={styles.grid}>
                {scope.columns.map((col: any, i: number) => (
                    <div key={i} className={styles.column}>
                        <h3>{col.title}</h3>
                        <ul>
                            {col.items.map((item: string, j: number) => (
                                <li key={j}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
