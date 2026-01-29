import styles from './Pricing.module.scss';
import data from '@/content/proposal.es.json';

const pricing = data.sections.find((s: any) => s.id === 'pricing') as any;

export default function Pricing() {
    if (!pricing) return null;

    const mainPlan = pricing.plans[0];
    const monthlyPlan = pricing.plans[1];

    return (
        <div className={styles.card}>
            {/* Decorative blur circles */}
            <div className={styles.circle}></div>
            <div className={styles.circle2}></div>

            <h2 className={styles.title}>Inversión</h2>
            <p className={styles.subtitle}>Propuesta económica transparente</p>

            <div className={styles.mainPriceBlock}>
                <div className={styles.tag}>
                    <i className="fa-solid fa-rocket"></i>
                    <span>PROYECTO ÚNICO</span>
                </div>
                <div className={styles.price}>
                    {mainPlan.price}
                    <span>USD</span>
                </div>
                <div className={styles.features}>
                    Incluye {mainPlan.features.join(', ')}.
                </div>
            </div>

            <div className={styles.monthlyBlock}>
                <div className={styles.monthlyHeader}>
                    <span className={styles.tagSmall}>Webmaster Plan</span>
                    <span className={styles.optional}>Opcional</span>
                </div>
                <div className={styles.monthlyPrice}>
                    {monthlyPlan.price}
                    <span>/ mes</span>
                </div>
                <ul className={styles.monthlyList}>
                    {monthlyPlan.features.map((f: string, i: number) => (
                        <li key={i}>
                            <i className="fa-solid fa-circle-check"></i>
                            {f}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
