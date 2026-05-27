"use client";

import { ChevronLeft, ChevronRight } from "@/shared/components/ui";
import { useCarousel } from "@/shared/hooks/useCarousel";
import { ButtonLinkGhost } from "@/shared/components/ui/button-link";

interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  product?: string;
  date: string;
}

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  instagramCta?: string;
  instagramUrl?: string;
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="#FFD60A"
      stroke="#FFD60A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function TestimonialCard({
  name,
  avatar,
  rating,
  text,
  product,
  date,
}: Testimonial) {
  return (
    <article className="border-border bg-card flex aspect-4/3 flex-col rounded-2xl border p-6 transition-shadow hover:shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-brand flex aspect-square size-10 items-center justify-center rounded-full font-semibold text-white">
            {avatar}
          </div>
          <div>
            <p className="text-text-primary font-semibold">{name}</p>
            <p className="text-text-secondary text-sm">{date}</p>
          </div>
        </div>
        <div className="flex gap-0.5" aria-label={`${rating} de 5 estrellas`}>
          {Array.from({ length: rating }).map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
      </div>

      <p className="text-text-secondary line-clamp-4">{text}</p>

      {product && (
        <div className="bg-surface-muted mt-auto flex items-center gap-2 rounded-lg px-3 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-text-secondary"
            aria-hidden="true"
          >
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
            <path d="M12 18h.01" />
          </svg>
          <span className="text-text-primary text-sm font-medium">
            {product}
          </span>
        </div>
      )}
    </article>
  );
}

function InstagramIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.1 0 1.8.2 2.2.4.6.3.9.6 1.2 1.1.4.4.8 1 1.1 1.2.2.4.4 1.1.4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c0 1.1-.2 1.8-.4 2.2-.3.6-.6.9-1.1 1.2-.4.4-1 .8-1.2 1.1-.4.2-1.1.4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.1 0-1.8-.2-2.2-.4-.6-.3-.9-.6-1.2-1.1-.4-.4-.8-1-1.1-1.2-.2-.4-.4-1.1-.4-2.2-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c0-1.1.2-1.8.4-2.2.3-.6.6-.9 1.1-1.2.4-.4 1-.8 1.2-1.1.4-.2 1.1-.4 2.2-.4 1.2-.1 1.6-.1 4.8-.1M12 0C8.7 0 8.3 0 7.1.1 5.9.2 4.8.5 4 .9c-.8.4-1.6.9-2.3 1.6C1 3.2.5 4 0 4.9-.4 5.8-.2 6.9-.1 8.1 0 9.3 0 9.7 0 12s0 2.7.1 3.9c0 1.2.3 2.3.7 3.1.4.8.9 1.6 1.6 2.3.7.7 1.5 1.2 2.3 1.6.8.4 1.9.7 3.1.7 1.2.1 1.6.1 3.9.1s2.7 0 3.9-.1c1.2 0 2.3-.3 3.1-.7.8-.4 1.6-.9 2.3-1.6.7-.7 1.2-1.5 1.6-2.3.4-.8.7-1.9.7-3.1.1-1.2.1-1.6.1-3.9s0-2.7-.1-3.9c0-1.2-.3-2.3-.7-3.1-.4-.8-.9-1.6-1.6-2.3-.7-.7-1.5-1.2-2.3-1.6C19.2.5 18.1.2 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.8a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z" />
    </svg>
  );
}

export function TestimonialsSlider({
  testimonials,
  title,
  subtitle,
  instagramCta = "Seguinos en Instagram",
  instagramUrl = "https://instagram.com",
}: TestimonialsSliderProps) {
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
  } = useCarousel({ itemSelector: "[data-testimonial-slide]" });

  return (
    <section
      ref={sectionRef}
      className="bg-surface relative w-full overflow-x-clip px-4 py-16 md:px-16 lg:px-24"
      tabIndex={0}
      aria-label={title || "Testimonios"}
      aria-describedby={keyboardHelpId}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <p id={keyboardHelpId} className="sr-only">
        Usá las flechas izquierda y derecha para desplazarte por los testimonios.
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

        {testimonials.length > 0 && (
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
      {testimonials.length > 0 && (
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
            {testimonials.map((testimonial, i) => (
              <div
                key={testimonial.id}
                data-testimonial-slide
                className={`w-[clamp(300px,85vw,380px)] shrink-0 snap-start transition-all duration-700 ${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: mounted ? `${i * 60}ms` : "0ms" }}
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Footer Instagram ───────────────────────────────────── */}
      {testimonials.length > 0 && (
        <div
          className={`mx-auto mt-10 flex max-w-7xl flex-col items-center transition-all delay-500 duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <ButtonLinkGhost
            href={instagramUrl}
            external
            icon={<InstagramIconSvg />}
          >
            {instagramCta}
          </ButtonLinkGhost>
        </div>
      )}
    </section>
  );
}
