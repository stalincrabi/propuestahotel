import Link from 'next/link';
import styles from './Nav.module.scss';
// We don't really need data for nav, but could use it for labels
// import data from '@/content/proposal.es.json';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>Graftly</div>
        <ul className={styles.links}>
          <li><Link href="#hero">Inicio</Link></li>
          <li><Link href="#objectives">Objetivos</Link></li>
          <li><Link href="#webflow">Tech</Link></li>
          <li><Link href="#booking">Booking</Link></li>
          <li><Link href="#pricing">Inversión</Link></li>
        </ul>
        <Link href="#next_steps" className={styles.cta}>Contacto</Link>
      </div>
    </nav>
  );
}
