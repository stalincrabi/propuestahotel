import Section from './Section';
import styles from './Summary.module.scss';

export default function Summary() {
    return (
        <Section id="summary" title="Resumen Ejecutivo" subtitle="Estrategia Digital">
            <div className={styles.layout}>
                {/* Left: 2x2 Grid */}
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.iconBox}>
                            <i className="fa-solid fa-laptop-code"></i>
                        </div>
                        <h3>Web Premium Webflow</h3>
                        <p>Sitio web de alto rendimiento diseñado para capturar reservas directas. UX/UI de lujo, carga rápida y editable por el equipo sin depender de desarrolladores.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconBox}>
                            <i className="fa-solid fa-calendar-check"></i>
                        </div>
                        <h3>Motor de Reservas</h3>
                        <p>Integración flexible (Cloudbeds/Mews/SiteMinder) mediante embed o script. Conexión con Channel Manager para gestión unificada de inventario.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconBox}>
                            <i className="fa-solid fa-robot"></i>
                        </div>
                        <h3>SEO Técnico & AIEO</h3>
                        <p>Optimización para Google y Motores con IA. Uso de Schema Markup (Hotel, FAQ) y contenido estructurado para ganar visibilidad en la nueva era de búsqueda.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconBox}>
                            <i className="fa-solid fa-earth-europe"></i>
                        </div>
                        <h3>Escalabilidad Global</h3>
                        <p>Infraestructura lista para multidioma (ES, EN, FR, DE). SEO localizado y routing automático para maximizar el alcance en mercados clave europeos.</p>
                    </div>
                </div>

                {/* Right: Dark Sidebar */}
                <div className={styles.sidebar}>
                    <h3 className={styles.sidebarTitle}>Objetivos del Proyecto</h3>

                    <ul className={styles.objectives}>
                        <li>
                            <div className={styles.objectiveIcon}>
                                <i className="fa-solid fa-bullseye"></i>
                            </div>
                            <div>
                                <strong>Maximizar Directas</strong>
                                <p>Reducir el coste de adquisición (CAC) y dependencia de comisiones OTA.</p>
                            </div>
                        </li>

                        <li>
                            <div className={styles.objectiveIcon}>
                                <i className="fa-solid fa-chart-line"></i>
                            </div>
                            <div>
                                <strong>Analítica Lista</strong>
                                <p>GA4, eventos y seguimiento de conversiones configurados para 2027.</p>
                            </div>
                        </li>

                        <li>
                            <div className={styles.objectiveIcon}>
                                <i className="fa-solid fa-sliders"></i>
                            </div>
                            <div>
                                <strong>Control Total</strong>
                                <p>Autonomía para marketing sin depender de tickets técnicos.</p>
                            </div>
                        </li>
                    </ul>

                    <div className={styles.quote}>
                        <i className="fa-solid fa-quote-left"></i>
                        <p>El objetivo es tener un activo digital robusto antes de la apertura, capturando demanda anticipada.</p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
