import Section from './Section';
import styles from './Summary.module.scss';

export default function Summary() {
    return (
        <Section id="summary" title="El Desafío: Lanzar en 2027 con Ventaja Competitiva" subtitle="Hotel boutique de 83 habitaciones en Santa Eulària des Riu, Ibiza. Apertura estimada 2027.">
            <div className={styles.layout}>
                {/* Left: 2x2 Grid */}
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.iconBox}>
                            <i className="fa-solid fa-laptop-code"></i>
                        </div>
                        <h3>Web Premium Webflow</h3>
                        <p>Sitio de alto rendimiento diseñado para capturar reservas directas, reduciendo dependencia de OTAs y sus comisiones (15-25%). Editable por el equipo de marketing sin depender de desarrolladores.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconBox}>
                            <i className="fa-solid fa-calendar-check"></i>
                        </div>
                        <h3>Motor de Reservas Integrado</h3>
                        <p>Conexión flexible con Cloudbeds, Mews o SiteMinder mediante widgets embebibles. Sincronización automática de inventario para evitar overbookings y gestión unificada de canales.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconBox}>
                            <i className="fa-solid fa-robot"></i>
                        </div>
                        <h3>SEO + Optimización para IA</h3>
                        <p>Visibilidad en Google y en buscadores con IA (ChatGPT, Gemini, Perplexity). Contenido estructurado para que asistentes virtuales puedan entender y recomendar el hotel correctamente.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconBox}>
                            <i className="fa-solid fa-earth-europe"></i>
                        </div>
                        <h3>Multidioma (ES/EN/FR/DE)</h3>
                        <p>Infraestructura lista para 4 idiomas con SEO localizado independiente. Routing automático por ubicación del visitante para maximizar conversiones en mercados clave europeos.</p>
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
                                <strong>Maximizar Reservas Directas</strong>
                                <p>Reducir coste de adquisición (CAC) y dependencia de comisiones OTA. Cada reserva directa ahorra 15-25% en comisiones.</p>
                            </div>
                        </li>

                        <li>
                            <div className={styles.objectiveIcon}>
                                <i className="fa-solid fa-chart-line"></i>
                            </div>
                            <div>
                                <strong>Analítica Configurada</strong>
                                <p>GA4, eventos de reserva y seguimiento de conversiones listos desde día 1. Datos claros para optimizar campañas antes de la apertura.</p>
                            </div>
                        </li>

                        <li>
                            <div className={styles.objectiveIcon}>
                                <i className="fa-solid fa-sliders"></i>
                            </div>
                            <div>
                                <strong>Autonomía de Marketing</strong>
                                <p>Equipo puede editar contenido, precios y promociones sin tickets técnicos. Agilidad para responder al mercado.</p>
                            </div>
                        </li>
                    </ul>

                    <div className={styles.quote}>
                        <i className="fa-solid fa-quote-left"></i>
                        <p>La mayoría de hoteles construyen su web después de abrir, perdiendo meses de demanda anticipada. Tú tendrás un activo digital funcionando antes de 2027, capturando pre-reservas y construyendo audiencia.</p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
