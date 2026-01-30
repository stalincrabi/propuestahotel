import styles from './Hero.module.scss';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.badgeWrapper}>
                        <span className="badge">Propuesta de Proyecto</span>
                    </div>

                    <h1 className={styles.title}>
                        Tu Sitio Web <br />
                        <span className={styles.highlight}>Listo para 2027</span>
                    </h1>

                    <p className={styles.subtitle}>
                        Propuesta completa para el lanzamiento digital de tu hotel boutique en Ibiza: diseño premium, motor de reservas integrado y estrategia SEO/AIEO para capturar demanda desde el día uno.
                    </p>

                    <div className={styles.whyItMatters}>
                        <i className="fa-solid fa-circle-info"></i>
                        <p>
                            <strong>Nota:</strong> Esta no es la web final del hotel — es una <strong>presentación tipo deck</strong> que explica cómo construiremos tu activo digital más importante antes de la apertura. Un sitio que reduce comisiones OTA, captura reservas directas y te da control total sobre tu marketing.
                        </p>
                    </div>

                    <div className={styles.meta}>
                        <div className={styles.metaItem}>
                            <i className="fa-solid fa-hotel"></i>
                            <div>
                                <h2>Hotel Boutique (83 habitaciones)</h2>
                                <p>Santa Eulària des Riu, Ibiza</p>
                            </div>
                        </div>
                        <div className={styles.metaItem}>
                            <i className="fa-regular fa-calendar-check"></i>
                            <p>Apertura estimada: <strong>2027</strong></p>
                        </div>
                    </div>

                    <div className={styles.investment}>
                        <div className={styles.priceBlock}>
                            <small>Inversión Proyecto</small>
                            <div className={styles.price}>
                                $4,380 USD
                                <span className={styles.sub}>Pago único</span>
                            </div>
                        </div>
                        <div className={styles.priceBlock}>
                            <small>Soporte & Webmaster</small>
                            <div className={styles.price}>
                                $200 USD
                                <span className={styles.sub}>/ mes</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.ctaGroup}>
                        <a href="#alcance" className="btn btn-primary">Ver Alcance Completo</a>
                        <a href="mailto:hola@graftly.co?subject=Consulta Propuesta Hotel Ibiza" className="btn btn-secondary">
                            Agendar Llamada
                        </a>
                    </div>
                </div>

                <div className={styles.visual}>
                    <div className={styles.imageCard}></div>

                    {/* Floating location card */}
                    <div className={styles.floatingCard}>
                        <div className={styles.floatingHeader}>
                            <small>UBICACIÓN</small>
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <p className={styles.floatingTitle}>Ibiza</p>
                        <p className={styles.floatingSubtitle}>Islas Baleares, España</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
