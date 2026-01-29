import styles from './Scope.module.scss';
import data from '@/content/proposal.es.json';

const scope = data.sections.find((s: any) => s.id === 'scope') as any;

const icons: any = {
    "Diseño": "📐",
    "Webflow": "🏗️",
    "Booking": "📅",
    "SEO": "🔍",
    "Multidioma": "AZ",
    "QA": "📋"
};

export default function Scope() {
    if (!scope) return null;

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.line}></div>
                <small className={styles.small}>DETALLES DE IMPLEMENTACIÓN</small>
                <h2 className={styles.title}>{scope.title}</h2>
                <p className={styles.subtitle}>Desglose detallado de los entregables para el lanzamiento en 2027.</p>
            </div>

            <div className={styles.grid}>
                {scope.columns.map((col: any, i: number) => {
                    // Heuristic to match icon
                    const key = Object.keys(icons).find(k => col.title.includes(k)) || "✨";
                    return (
                        <div key={i} className={styles.item}>
                            <div className={styles.icon}>{icons[key]}</div>
                            <div className={styles.content}>
                                <h3>{col.title}</h3>
                                <p>
                                    {col.items.join('. ')}.
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className={styles.time}>
                <span>🕒</span> Tiempo estimado: <strong>4-6 semanas</strong>
            </div>
            <div className={styles.consulting}>
                <span>🤝</span> Consultoría estratégica incluida
            </div>
        </div>
    );
}
