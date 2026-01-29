import Section from './Section';
import styles from './Webflow.module.scss';

export default function Webflow() {
    return (
        <Section id="webflow" title="Por qué Webflow" subtitle="Tecnología & Infraestructura">
            <p className={styles.intro}>
                Una plataforma que combina libertad de diseño con potencia técnica, eliminando la dependencia de plugins inestables.
            </p>

            <div className={styles.grid}>
                <div className={styles.card}>
                    <div className={styles.iconBox}>
                        <i className="fa-solid fa-magnifying-glass-chart"></i>
                    </div>
                    <h3>SEO Técnico (Control Real)</h3>
                    <p className={styles.desc}>
                        Webflow permite controlar cada aspecto de la indexación sin capas extra de software.
                    </p>
                    <ul className={styles.list}>
                        <li><i className="fa-solid fa-check"></i> Metadatos nativos por CMS</li>
                        <li><i className="fa-solid fa-check"></i> Redirects 301 sin plugins</li>
                        <li><i className="fa-solid fa-check"></i> Carga ultrarrápida (AWS)</li>
                    </ul>
                </div>

                <div className={styles.card}>
                    <div className={styles.iconBox}>
                        <i className="fa-solid fa-wand-magic-sparkles"></i>
                    </div>
                    <h3>AIEO / AEO (AI Search)</h3>
                    <p className={styles.desc}>
                        Optimización semántica para que los modelos de IA (ChatGPT, Gemini) "entiendan" y citen el hotel.
                    </p>
                    <ul className={styles.list}>
                        <li><i className="fa-solid fa-check"></i> Schema Markup (Hotel/FAQ)</li>
                        <li><i className="fa-solid fa-check"></i> Contenido Q&A estructurado</li>
                        <li><i className="fa-solid fa-check"></i> Optimización por intención</li>
                    </ul>
                </div>

                <div className={styles.card}>
                    <div className={styles.iconBox}>
                        <i className="fa-solid fa-earth-americas"></i>
                    </div>
                    <h3>Multidioma Nativo</h3>
                    <p className={styles.desc}>
                        Gestión de Español, Inglés, Francés y Alemán desde una única interfaz visual.
                    </p>
                    <ul className={styles.list}>
                        <li><i className="fa-solid fa-check"></i> URLs únicas (es/en/fr/de)</li>
                        <li><i className="fa-solid fa-check"></i> Routing automático por IP</li>
                        <li><i className="fa-solid fa-check"></i> SEO localizado independiente</li>
                    </ul>
                </div>
            </div>

            <div className={styles.footer}>
                <i className="fa-solid fa-circle-info"></i>
                <p>Sin plugins vulnerables, sin actualizaciones constantes, sin dolores de cabeza.</p>
            </div>
        </Section>
    );
}
