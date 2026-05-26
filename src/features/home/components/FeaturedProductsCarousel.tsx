"use client";
import { useEffect, useState } from "react";
import { ProductCard } from "@/features/catalog/components/ProductCard";
import type { Product } from "@/features/catalog/types/product";
import { cn } from "@/shared/lib/utils";
import { useScrollRevealMultiple } from "@/shared/hooks/useScrollReveal";

interface FeaturedProductsCarouselProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function FeaturedProductsCarousel({
  products,
  subtitle,
  className,
}: FeaturedProductsCarouselProps) {
  const [mounted, setMounted] = useState(false);
  const { refs: cardRefs, visibleItems: cardVisible } = useScrollRevealMultiple(
    products.length,
  );

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {subtitle && (
        <div className={cn("mb-4", className)}>
          <p className="text-text-secondary text-base">{subtitle}</p>
        </div>
      )}

      {/* 
        - touch-pan-y: le dice al navegador que el scroll vertical tiene prioridad
        - overflow-x-auto: solo en eje X
        - overflow-y-visible: evita crear scroll container en Y
        - [scrollbar-width:none] + [&::-webkit-scrollbar]:hidden: oculta scrollbar cross-browser sin depender de scrollbar-hide plugin
      */}
      <div
        className={cn(
          "flex gap-5 pb-4",
          "touch-pan-y",
          "overflow-x-auto overflow-y-visible",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        )}
      >
        {products.map((product, i) => (
          <div
            key={product.id}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className={cn(
              // Ancho responsivo
              "w-[calc(100vw-2rem)] shrink-0 snap-start",
              "sm:w-[calc(50%-1.25rem)]",
              "lg:w-[calc(33.333%-1rem)]",
              // overflow-hidden para que el card no desborde el slide
              "overflow-hidden",
            )}
          >
            <div
              className={cn(
                "h-full transition-all duration-700",
                mounted && cardVisible[i]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0",
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
