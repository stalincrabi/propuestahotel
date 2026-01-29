import styles from './Footer.module.scss';
import data from '@/content/proposal.es.json';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© {new Date().getFullYear()} {data.meta.preparedBy}. All rights reserved.</p>
        </footer>
    );
}
