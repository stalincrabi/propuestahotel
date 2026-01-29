import styles from './Section.module.scss';
import { ReactNode } from 'react';

interface SectionProps {
    id: string;
    title?: string;
    subtitle?: string;
    children: ReactNode;
    dark?: boolean;
    className?: string; // Add className prop
}

export default function Section({ id, title, subtitle, children, dark, className }: SectionProps) {
    return (
        <section id={id} className={`${styles.section} ${dark ? styles.dark : ''} ${className || ''}`}>
            <div className={styles.container}>
                {title && (
                    <div className={styles.header}>
                        <h2 className={styles.title}>{title}</h2>
                        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
