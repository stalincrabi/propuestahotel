import Section from './Section';
import styles from './Pricing.module.scss';
import data from '@/content/proposal.es.json';

const pricing = data.sections.find((s: any) => s.id === 'pricing') as any;

export default function Pricing() {
    if (!pricing) return null;

    return (
        <Section id="pricing" title={pricing.title} dark>
            <div className={styles.container}>
                {pricing.plans.map((plan: any, i: number) => (
                    <div key={i} className={styles.card}>
                        <h3>{plan.title}</h3>
                        <div className={styles.price}>{plan.price}</div>
                        <ul className={styles.features}>
                            {plan.features.map((f: string, j: number) => (
                                <li key={j}>{f}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
