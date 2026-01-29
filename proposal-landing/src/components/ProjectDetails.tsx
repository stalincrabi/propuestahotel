import Section from './Section';
import Scope from './Scope';
import Pricing from './Pricing';
import styles from './ProjectDetails.module.scss';
import data from '@/content/proposal.es.json';

const scope = data.sections.find((s: any) => s.id === 'scope') as any;

export default function ProjectDetails() {
    return (
        <Section id="alcance" className={styles.section}>
            <div className={styles.grid}>
                <Scope />
                <Pricing />
            </div>
        </Section>
    );
}
