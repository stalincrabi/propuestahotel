'use client';
import { useState } from 'react';
import Section from './Section';
import styles from './FAQ.module.scss';

const faqs = [
    {
        question: "¿Quién paga las licencias de Cloudbeds/Mews/SiteMinder?",
        answer: "Tú contratas directamente con el proveedor que elijas. Nosotros solo hacemos la integración técnica en tu web. Los precios varían según proveedor (aprox. $200-500/mes dependiendo de funcionalidades)."
    },
    {
        question: "¿Quién hace las traducciones a EN/FR/DE?",
        answer: "Si provees el contenido en los 4 idiomas, lo implementamos sin costo adicional. Si necesitas traducción profesional, podemos cotizarla aparte (aprox. $0.10-0.15 por palabra)."
    },
    {
        question: "¿Quién provee las fotos del hotel?",
        answer: "Tú. Necesitamos mínimo 20-30 fotos profesionales. Si necesitas producción fotográfica, podemos recomendar fotógrafos en Ibiza o cotizar sesión aparte."
    },
    {
        question: "¿Qué pasa si quiero cambiar de booking engine después del lanzamiento?",
        answer: "Podemos cambiar la integración. Si es dentro del primer mes, sin costo. Si es después, se cotiza como proyecto aparte (aprox. $500-800 dependiendo de complejidad)."
    },
    {
        question: "¿Puedo editar el sitio yo mismo después del lanzamiento?",
        answer: "Sí. Webflow tiene un editor visual (sin código) donde puedes cambiar textos, fotos, precios, agregar habitaciones al CMS, etc. Te damos capacitación de 1 hr en el go-live."
    },
    {
        question: "¿Qué incluye exactamente el soporte de $200/mes?",
        answer: "Cambios menores (textos, fotos, precios), mantenimiento técnico, revisión mensual de SEO/performance, soporte operativo. Si un cambio requiere más de 2 hrs de trabajo, se cotiza aparte."
    },
    {
        question: "¿Cuánto cuesta la licencia de Webflow?",
        answer: "Aprox. $29-42/mes dependiendo del plan (Basic, CMS o Business). Para un hotel, recomendamos CMS ($29/mes) o Business ($42/mes si necesitas más de 2,000 ítems en CMS)."
    },
    {
        question: "¿Qué pasa si no tengo contenido listo para el kickoff?",
        answer: "No hay problema. Podemos empezar con wireframes y UI mientras preparas contenido. Pero necesitamos contenido final antes de la Fase 4 (Build) para no retrasar el timeline."
    },
    {
        question: "¿Ofrecen garantía?",
        answer: "Sí. Si en los primeros 30 días después del go-live encuentras bugs o problemas técnicos, los arreglamos sin costo. Cambios de diseño o nuevas funcionalidades se cotizan aparte."
    },
    {
        question: "¿Puedo ver ejemplos de proyectos similares?",
        answer: "Sí. Escríbenos a hola@graftly.co y te compartimos portfolio de proyectos hoteleros."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Section id="faq" title="Preguntas Frecuentes" subtitle="Resolvemos tus dudas">
            <div className={styles.faqList}>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
                    >
                        <button
                            className={styles.question}
                            onClick={() => toggleFAQ(index)}
                            aria-expanded={openIndex === index}
                        >
                            <span>{faq.question}</span>
                            <i className={`fa-solid ${openIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                        </button>
                        <div className={styles.answer}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
