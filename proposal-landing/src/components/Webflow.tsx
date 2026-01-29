import Section from './Section';
import styles from './Webflow.module.scss';
import data from '@/content/proposal.es.json';

const webflow = data.sections.find((s: any) => s.id === 'webflow') as any;

export default function Webflow() {
    if (!webflow) return null;

    return (
        <Section id="webflow" title={webflow.title}>
            <div className={styles.grid}>
                {webflow.items.map((item: any, i: number) => (
                    <div key={i} className={styles.item}>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                        <ul>
                            {item.bullets.map((b: string, j: number) => <li key={j}>{b}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
