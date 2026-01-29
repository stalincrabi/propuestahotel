import Section from './Section';
import styles from './Webflow.module.scss';
import data from '@/content/proposal.es.json';

const webflow = data.sections.find((s: any) => s.id === 'webflow') as any;

// Mapping icons to titles for visual enhancment
const icons: Record<string, string> = {
    "SEO": "🔍",
    "AIEO": "✨",
    "Multidioma": "🌍"
};

export default function Webflow() {
    if (!webflow) return null;

    return (
        <Section id="webflow" title="Por qué Webflow" subtitle="Tecnología & Infraestructura">
            <div className={styles.grid}>
                {webflow.items.map((item: any, i: number) => {
                    const key = Object.keys(icons).find(k => item.title.includes(k)) || "";
                    return (
                        <div key={i} className={styles.card}>
                            <div className={styles.iconBox}>
                                {icons[key] || "⚡"}
                            </div>
                            <h3>{item.title}</h3>
                            <p className={styles.desc}>{item.desc}</p>
                            <ul className={styles.list}>
                                {item.bullets.map((b: string, j: number) => (
                                    <li key={j}>✓ {b}</li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}
