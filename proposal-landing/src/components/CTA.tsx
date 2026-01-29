import styles from './CTA.module.scss';

export default function CTA() {
    return (
        <section className={styles.wrapper}>
            {/* Dark CTA Box inspired by 006.html */}
            <div className={styles.darkCard}>
                {/* Decorative gradient blur circles */}
                <div className={styles.blurCircle1}></div>
                <div className={styles.blurCircle2}></div>

                <div className={styles.content}>
                    <h3 className={styles.title}>¿Todo listo para transformar la experiencia digital?</h3>
                    <p className={styles.text}>
                        Confirma tu aprobación para reservar el slot de desarrollo. Podemos iniciar en <span className={styles.highlight}>5-7 días hábiles</span>.
                    </p>
                </div>

                <div className={styles.action}>
                    <div className={styles.contactInfo}>
                        <p className={styles.label}>CONTACTO</p>
                        <p className={styles.team}>Graftly Team</p>
                    </div>
                    <div className={styles.divider}></div>
                    <a href="mailto:hola@graftly.co?subject=Aprobar Propuesta" className={styles.button}>
                        <span>Aprobar Propuesta</span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>

            {/* Footer */}
            <div className={styles.footer}>
                <div className={styles.footerLeft}>
                    <i className="fa-solid fa-envelope"></i>
                    <span>hola@graftly.com</span>
                </div>
                <p className={styles.copyright}>© 2026 Graftly. Confidencial.</p>
            </div>
        </section>
    );
}
