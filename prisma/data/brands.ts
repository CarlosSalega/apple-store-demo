export const BRANDS = [
  { name: "Apple", slug: "apple" },
  { name: "Samsung", slug: "samsung" },
  { name: "Sony", slug: "sony" },
] as const;

export type Brand = (typeof BRANDS)[number];