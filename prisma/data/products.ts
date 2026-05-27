export interface SeedProduct {
  title?: string;
  modelSlug: string;
  variantName: string;
  condition: "NEW" | "USED";
  price: number;
  description: string;
  isFeatured?: boolean;
  color?: string;
  /** Ruta a la imagen principal del producto */
  imageUrl: string;
}

export const PRODUCTS: SeedProduct[] = [
  // ══════════════════════════════════════════════════════════════════════════════
  // iPhone 11 Pro Max — 256GB (USED)
  // ══════════════════════════════════════════════════════════════════════════════
  {
    modelSlug: "iphone-11-pro-max",
    variantName: "256GB",
    condition: "USED",
    price: 380,
    description: "Usado. Excelente estado. Batería 83%+.",
    isFeatured: true,
    imageUrl: "/images/iphone-11-pro-max-256.jpeg",
  },

  // ══════════════════════════════════════════════════════════════════════════════
  // iPhone 12 — 128GB (USED)
  // ══════════════════════════════════════════════════════════════════════════════
  {
    modelSlug: "iphone-12",
    variantName: "128GB",
    condition: "USED",
    price: 420,
    description: "Usado. Excelente estado. Batería 85%+.",
    isFeatured: true,
    imageUrl: "/images/iphone-12-128.jpg",
  },

  // ══════════════════════════════════════════════════════════════════════════════
  // iPhone 13 — 128GB (USED)
  // ══════════════════════════════════════════════════════════════════════════════
  {
    modelSlug: "iphone-13",
    variantName: "128GB",
    condition: "USED",
    price: 480,
    description: "Usado. Muy buen estado. Sin detalles.",
    isFeatured: true,
    imageUrl: "/images/iphone-13-128.avif",
  },

  // ══════════════════════════════════════════════════════════════════════════════
  // iPhone 13 — 256GB (USED)
  // ══════════════════════════════════════════════════════════════════════════════
  {
    modelSlug: "iphone-13",
    variantName: "256GB",
    condition: "USED",
    price: 550,
    description: "Usado. Muy buen estado. Batería 88%+.",
    isFeatured: true,
    imageUrl: "/images/iphone-13-256.jpg",
  },

  // ══════════════════════════════════════════════════════════════════════════════
  // iPhone 13 — Base (USED)
  // ══════════════════════════════════════════════════════════════════════════════
  {
    modelSlug: "iphone-13",
    variantName: "64GB",
    condition: "USED",
    price: 420,
    description: "Usado. Buen estado. Batería 82%+.",
    isFeatured: true,
    imageUrl: "/images/iphone-13.webp",
  },

  // ══════════════════════════════════════════════════════════════════════════════
  // iPhone 14 — 128GB (USED)
  // ══════════════════════════════════════════════════════════════════════════════
  {
    modelSlug: "iphone-14",
    variantName: "128GB",
    condition: "USED",
    price: 550,
    description: "Usado. Excelente estado. Sin detalles. Incluye cargador.",
    isFeatured: true,
    imageUrl: "/images/iphone-14-128.webp",
  },

  // ══════════════════════════════════════════════════════════════════════════════
  // iPhone 14 Pro — 128GB (USED)
  // ══════════════════════════════════════════════════════════════════════════════
  {
    modelSlug: "iphone-14-pro",
    variantName: "128GB",
    condition: "USED",
    price: 650,
    description: "Usado. Batería 90%+. Excelente estado.",
    isFeatured: true,
    imageUrl: "/images/iphone-14-pro-128.webp",
  },

  // ══════════════════════════════════════════════════════════════════════════════
  // iPhone 15 — 128GB (USED)
  // ══════════════════════════════════════════════════════════════════════════════
  {
    modelSlug: "iphone-15",
    variantName: "128GB",
    condition: "USED",
    price: 700,
    description: "Usado. Batería 92%+. Sin detalles.",
    isFeatured: true,
    imageUrl: "/images/iphone-15-128.jpg",
  },

  // ══════════════════════════════════════════════════════════════════════════════
  // iPhone 15 Pro — 256GB (USED)
  // ══════════════════════════════════════════════════════════════════════════════
  {
    modelSlug: "iphone-15-pro",
    variantName: "256GB",
    condition: "USED",
    price: 1000,
    description: "Usado. Batería 87%+. Excelente estado.",
    isFeatured: true,
    imageUrl: "/images/iphone-15-pro-256.webp",
  },

  // ══════════════════════════════════════════════════════════════════════════════
  // iPhone 16 — 128GB (NEW)
  // ══════════════════════════════════════════════════════════════════════════════
  {
    modelSlug: "iphone-16",
    variantName: "128GB",
    condition: "NEW",
    price: 899,
    description: "Nuevo sellado. Garantía Apple 1 año.",
    isFeatured: true,
    imageUrl: "/images/iphone-16-128.avif",
  },

  // ══════════════════════════════════════════════════════════════════════════════
  // iPhone 16e — 128GB (NEW)
  // ══════════════════════════════════════════════════════════════════════════════
  {
    modelSlug: "iphone-16e",
    variantName: "128GB",
    condition: "NEW",
    price: 599,
    description: "Nuevo sellado. Garantía Apple 1 año.",
    isFeatured: true,
    imageUrl: "/images/iphone-16e-128.webp",
  },

  // ══════════════════════════════════════════════════════════════════════════════
  // iPhone 17 — 256GB (NEW)
  // ══════════════════════════════════════════════════════════════════════════════
  {
    modelSlug: "iphone-17",
    variantName: "256GB",
    condition: "NEW",
    price: 1049,
    description: "Nuevo sellado. Garantía Apple 1 año.",
    isFeatured: true,
    imageUrl: "/images/iphone-17-256.jpg",
  },

  // ══════════════════════════════════════════════════════════════════════════════
  // iPhone 17 Pro Max — 256GB (NEW)
  // ══════════════════════════════════════════════════════════════════════════════
  {
    modelSlug: "iphone-17-pro-max",
    variantName: "256GB",
    condition: "NEW",
    price: 1299,
    description: "Nuevo sellado. Garantía Apple 1 año.",
    isFeatured: true,
    imageUrl: "/images/iphone-17-pro-max-256.webp",
  },

  // ══════════════════════════════════════════════════════════════════════════════
  // iPhone Air — 128GB (NEW)
  // ══════════════════════════════════════════════════════════════════════════════
  {
    modelSlug: "iphone-air",
    variantName: "128GB",
    condition: "NEW",
    price: 799,
    description: "Nuevo sellado. Garantía Apple 1 año. Equipo ultra delgado.",
    isFeatured: true,
    imageUrl: "/images/iphone-air-128.webp",
  },
];
