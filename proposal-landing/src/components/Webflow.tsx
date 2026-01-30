import Section from './Section';
import styles from './Webflow.module.scss';
import data from '@/content/proposal.es.json';

const webflow = data.sections.find((s: any) => s.id === 'webflow') as any;

// Icon mapping for each benefit type
const iconMap: any = {
    "SEO": "fa-solid fa-magnifying-glass-chart",
    "AIEO": "fa-solid fa-wand-magic-sparkles",
    "AEO": "fa-solid fa-wand-magic-sparkles",
    "Optimización": "fa-solid fa-wand-magic-sparkles",
    "Multidioma": "fa-solid fa-earth-americas",
    "CMS": "fa-solid fa-pen-to-square"
};

function getIcon(title: string): string {
    const key = Object.keys(iconMap).find(k => title.includes(k));
    return key ? iconMap[key] : "fa-solid fa-star";
}

export default function Webflow() {
    if (!webflow) return null;

    return (
        <Section id="webflow" title={webflow.title} subtitle={webflow.subtitle}>
            <div className={styles.intro}>
                <p>
                    Webflow es la plataforma elegida por hoteles boutique y marcas premium que priorizan diseño, rendimiento y autonomía operativa.
                </p>
            </div>

            <div className={styles.grid}>
                {webflow.items.map((item: any, index: number) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.iconBox}>
                            <i className={getIcon(item.title)}></i>
                        </div>
                        <h3>{item.title}</h3>
                        <p className={styles.desc}>
                            {item.desc}
                        </p>
                        <ul className={styles.list}>
                            {item.bullets.map((bullet: string, i: number) => (
                                <li key={i}>
                                    <i className="fa-solid fa-check"></i> {bullet}
                                </li>
                            ))}
                        </ul>

                        {/* Special AIEO result callout */}
                        {item.title.includes("AIEO") && item.bullets[item.bullets.length - 1].includes("Resultado") && (
                            <div className={styles.aieoResult}>
                                <i className="fa-solid fa-lightbulb"></i>
                                <p><strong>Resultado:</strong> Cuando alguien pregunta a ChatGPT "recomiéndame un hotel boutique en Ibiza", tu hotel puede aparecer en la respuesta.</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className={styles.footer}>
                <i className="fa-solid fa-circle-info"></i>
                <p>Sin plugins vulnerables, sin actualizaciones constantes, sin dolores de cabeza.</p>
            </div>
        </Section>
    );
}
