"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ChevronLeft, ChevronRight } from "@/shared/components/ui";
import { useCarousel } from "@/shared/hooks/useCarousel";
import type { Product } from "@/features/catalog/types/product";
import { ProductCard } from "@/features/catalog/components/ProductCard";

interface FeaturedProductsSliderProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  id?: string;
}

export function FeaturedProductsSlider({
  products,
  title = "Productos Destacados",
  subtitle,
  id,
}: FeaturedProductsSliderProps) {
  const {
    trackRef,
    sectionRef,
    canScrollLeft,
    canScrollRight,
    mounted,
    isDragging,
    keyboardHelpId,
    scrollByDirection,
    onMouseDown,
    onMouseMove,
    stopDrag,
    handleFocus,
    handleBlur,
    handleMouseEnter,
    handleMouseLeave,
  } = useCarousel({ itemSelector: "[data-product-slide]" });

  return (
    <section
      ref={sectionRef}
      id={id}
      className="bg-surface relative w-full overflow-x-clip px-4 py-16 md:px-16 lg:px-24"
      tabIndex={0}
      aria-label={title || "Productos destacados"}
      aria-describedby={keyboardHelpId}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <p id={keyboardHelpId} className="sr-only">
        Usá las flechas izquierda y derecha para desplazarte por los productos.
      </p>

      {/* ── Header ─────────────────────────────────────────────── */}
      <div
        className={`mx-auto mb-10 flex max-w-7xl items-end justify-between transition-all duration-700 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1">
          {title && (
            <h2 className="text-text-primary text-2xl font-bold md:text-3xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-text-secondary mt-1">{subtitle}</p>
          )}
        </div>

        {products.length > 0 && (
          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={() => scrollByDirection("left")}
              disabled={!canScrollLeft}
              aria-label="Anterior"
              className="border-border bg-surface text-text-primary hover:bg-surface-muted disabled:hover:bg-surface flex h-11 w-11 items-center justify-center rounded-full border transition-all hover:scale-105 active:scale-95 disabled:cursor-default disabled:opacity-25 disabled:hover:scale-100"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollByDirection("right")}
              disabled={!canScrollRight}
              aria-label="Siguiente"
              className="border-border bg-surface text-text-primary hover:bg-surface-muted disabled:hover:bg-surface flex h-11 w-11 items-center justify-center rounded-full border transition-all hover:scale-105 active:scale-95 disabled:cursor-default disabled:opacity-25 disabled:hover:scale-100"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>

      {/* ── Viewport + Track ───────────────────────────────────── */}
      {products.length > 0 && (
        <div className="mx-auto max-w-7xl">
          <div
            ref={trackRef}
            className="flex [scroll-snap-type:x_mandatory] gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
          >
            {products.map((product, i) => (
              <div
                key={product.id}
                data-product-slide
                className={`w-[clamp(260px,78vw,320px)] shrink-0 snap-start transition-all duration-700 sm:w-[clamp(280px,40vw,320px)] lg:w-[clamp(280px,22vw,320px)] ${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: mounted ? `${i * 60}ms` : "0ms" }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Footer CTA ─────────────────────────────────────────── */}
      {products.length > 0 && (
        <div
          className={`mx-auto mt-12 flex max-w-7xl flex-col items-center gap-4 transition-all delay-500 duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="text-text-secondary text-sm">
            Explorá todos los productos en nuestro catálogo
          </p>
          <Link
            href="/catalogo"
            className="group flex h-12 items-center gap-2 rounded-full border border-[--color-brand] px-6 text-sm font-semibold text-[--color-brand] transition-all hover:scale-105 hover:bg-brand/5 active:scale-95"
          >
            Ver todos los productos
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      )}
    </section>
  );
}
