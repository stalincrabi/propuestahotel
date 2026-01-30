import Section from './Section';
import styles from './Scope.module.scss';
import data from '@/content/proposal.es.json';

const scope = data.sections.find((s: any) => s.id === 'scope') as any;

const icons: any = {
    "Diseño": "📐",
    "Webflow": "🏗️",
    "Booking": "📅",
    "SEO": "🔍",
    "Multidioma": "🌐",
    "QA": "📋"
};

export default function Scope() {
    if (!scope) return null;

    return (
        <Section id="alcance" title={scope.title} subtitle={scope.subtitle}>
            {/* Inclusions */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                    <i className="fa-solid fa-circle-check"></i> Qué SÍ Incluye
                </h3>
                <div className={styles.grid}>
                    {scope.includes.map((item: any, i: number) => {
                        const key = Object.keys(icons).find(k => item.title.includes(k)) || "✨";
                        return (
                            <div key={i} className={styles.item}>
                                <div className={styles.icon}>{icons[key]}</div>
                                <div className={styles.content}>
                                    <h4>{item.title}</h4>
                                    <p>{item.items.join('. ')}.</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Exclusions */}
            <div className={styles.section}>
                <h3 className={styles.sectionTitle + ' ' + styles.exclusions}>
                    <i className="fa-solid fa-circle-xmark"></i> Qué NO Incluye (Debes Proveer o Contratar Aparte)
                </h3>
                <div className={styles.exclusionsList}>
                    {scope.excludes.map((item: string, i: number) => (
                        <div key={i} className={styles.exclusionItem}>
                            <div className={styles.exclusionHeader}>
                                <i className="fa-solid fa-xmark"></i>
                                <strong>{item.split(' — ')[0]}</strong>
                            </div>
                            <p>{item.split(' — ')[1] || item}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.time}>
                <span>🕒</span> Tiempo estimado: <strong>{scope.timeline}</strong>
            </div>
        </Section>
    );
}
