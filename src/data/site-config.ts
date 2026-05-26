/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                    SITE CONFIG — DATOS DE LA DEMO                             ║
 * ║                                                                              ║
 * ║  Este archivo reemplaza la consulta a la DB para el modo demo.               ║
 * ║  Editá los valores acá y los cambios se reflejan al instante.                ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

export const DEMO_SITE_CONFIG = {
  // ══════════════════════════════════════════════════════════════════════════════
  // Banner de urgencia
  // ══════════════════════════════════════════════════════════════════════════════
  bannerMessages: [
    "🔥 Nuevos ingresos de iPhone 17 Pro",
    "📱 Mejoramos cualquier presupuesto",
    "🚚 Envío en 24-48hs a todo el país",
    "💳 Hasta 12 cuotas sin interés",
  ],
  bannerEnabled: true,

  // ══════════════════════════════════════════════════════════════════════════════
  // Hero Section
  // ══════════════════════════════════════════════════════════════════════════════
  heroTitle: "Encontrá tu iPhone ideal con garantía",
  heroSubtitle: "Apple Store — Tu tienda de confianza",
  heroDescription:
    "Equipos Apple nuevos y usados seleccionados.\n¿Tenés un equipo viejo? Aprovechá nuestro plan canje.\nEscribinos y te asesoramos al instante.",
  heroImage: "",
  heroCtaPrimary: "Ver catálogo",
  heroCtaSecondary: "Escribinos",
  heroImages: "[]",

  // ══════════════════════════════════════════════════════════════════════════════
  // Featured Products
  // ══════════════════════════════════════════════════════════════════════════════
  featuredTitle: "Últimos Ingresos",
  featuredSubtitle: "Los productos más buscados por nuestros clientes",

  // ══════════════════════════════════════════════════════════════════════════════
  // Testimonials
  // ══════════════════════════════════════════════════════════════════════════════
  testimonialsTitle: "Lo que dicen nuestros clientes",
  testimonialsSubtitle: "Miles de personas ya confiaron en nosotros",
  testimonialsRatingText: "4.9/5 basado en +500 ventas",
  testimonialsInstagramCta: "Seguinos en Instagram",
  testimonialsInstagramUrl: "https://instagram.com/applestore",

  // ══════════════════════════════════════════════════════════════════════════════
  // Información del negocio
  // ══════════════════════════════════════════════════════════════════════════════
  storeName: "Apple Store",
  storeWhatsapp: "+54 9 11 5555-0000",
  storeAddress: "Av. Corrientes 1234",
  storeNeighborhood: "Microcentro",
  storeCity: "Buenos Aires, Argentina",
  storePhone: "+54 11 5555-0000",
  storeSchedule:
    "Lunes a viernes: 09:00 - 20:30\nSábado: 10:00 - 15:00\nDomingo: Cerrado",
  storeInstagram: "applestore",
  storeEmail: "hola@applestore.com",

  storeFeatures: [
    {
      title: "Garantía",
      description: "Todos nuestros productos incluyen garantía",
    },
    { title: "Envío Rápido", description: "Entregas en 24-48hs" },
    {
      title: "Atención Personal",
      description: "Te ayudamos a elegir el mejor equipo",
    },
    { title: "Precio Justo", description: "Los mejores precios del mercado" },
  ],

  storeFinancingTitle: "¡Financiación disponible!",
  storeFinancingSubtitle: "Cuotas sin interés con tarjeta de crédito",

  // ══════════════════════════════════════════════════════════════════════════════
  // Métodos de pago
  // ══════════════════════════════════════════════════════════════════════════════
  paymentMethods: JSON.stringify([
    { name: "Efectivo", icon: "💵" },
    { name: "Transferencia", icon: "🏦" },
    { name: "Tarjeta Débito", icon: "💳" },
    { name: "Mercado Pago", icon: "📱" },
    { name: "Cuotas sin interés", icon: "📆" },
  ]),

  // ══════════════════════════════════════════════════════════════════════════════
  // CTA Final
  // ══════════════════════════════════════════════════════════════════════════════
  ctaTitle: "¿No encontrás lo que buscas?",
  ctaSubtitle: "Nosotros te lo conseguimos",
  ctaDescription:
    "Miles de clientes satisfechos ya confiaron en nosotros. Unite al grupo y recibí atención personalizada por WhatsApp.",
  ctaButtonText: "Escribinos",
  ctaBadge1: "Garantía incluida",
  ctaBadge2: "Envío en 24-48hs",
  ctaBadge3: "+1000 clientes",

  // ══════════════════════════════════════════════════════════════════════════════
  // SEO
  // ══════════════════════════════════════════════════════════════════════════════
  seoTitle: "Apple Store | iPhones y Productos Apple",
  seoDescription:
    "iPhones, iPads, Macs y accesorios Apple nuevos y usados con garantía. Reparaciones profesionales y plan canje.",

  // ══════════════════════════════════════════════════════════════════════════════
  // Footer
  // ══════════════════════════════════════════════════════════════════════════════
  footerBrand: "Apple Store",
  footerText: "Tu mejor opción en iPhones nuevos y usados con garantía.",
} as const;
