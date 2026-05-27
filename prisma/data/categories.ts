export const CATEGORIES = [
  // Apple
  { name: "iPhone", slug: "iphone", brandSlug: "apple" },
  { name: "Mac", slug: "mac", brandSlug: "apple" },
  { name: "iPad", slug: "ipad", brandSlug: "apple" },
  { name: "Watch", slug: "watch", brandSlug: "apple" },
  // Samsung
  { name: "Smartphones", slug: "samsung-smartphones", brandSlug: "samsung" },
  // Sony
  { name: "PlayStation 5", slug: "playstation-5", brandSlug: "sony" },
] as const;

export type Category = (typeof CATEGORIES)[number];
