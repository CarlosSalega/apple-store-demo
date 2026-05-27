export const VARIANTS = [
  "64GB",
  "128GB",
  "256GB",
  "512GB",
  "1TB",
  "512GB SSD",
  "1TB SSD",
  "825GB",
] as const;

export type Variant = (typeof VARIANTS)[number];
