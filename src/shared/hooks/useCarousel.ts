"use client";

import { useRef, useState, useCallback, useEffect } from "react";

interface UseCarouselOptions {
  /** Gap entre cards en px. Default: 24 (equivalente a gap-6) */
  gap?: number;
  /** Selector CSS para medir el ancho de la card. Default: "[data-carousel-item]" */
  itemSelector?: string;
}

export function useCarousel({
  gap = 24,
  itemSelector = "[data-carousel-item]",
}: UseCarouselOptions = {}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const keyboardHelpId = "carousel-keyboard-help";
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Drag state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftRef = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    const ro = new ResizeObserver(updateArrows);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      ro.disconnect();
    };
  }, [updateArrows]);

  const scrollByDirection = useCallback(
    (direction: "left" | "right") => {
      const el = trackRef.current;
      if (!el) return;
      const cardEl = el.querySelector<HTMLElement>(itemSelector);
      const cardWidth = cardEl ? cardEl.offsetWidth + gap : 340;
      el.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    },
    [gap, itemSelector],
  );

  // ── Keyboard navigation ───────────────────────────────────────
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (!isFocused) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollByDirection("left");
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollByDirection("right");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFocused, scrollByDirection]);

  // ── Drag to scroll ────────────────────────────────────────────
  const onMouseDown = (e: React.MouseEvent) => {
    const el = trackRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = scrollLeftRef.current - (x - startX.current);
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  // ── Focus handlers ────────────────────────────────────────────
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleMouseEnter = () => setIsFocused(true);
  const handleMouseLeave = () => setIsFocused(false);

  return {
    /** Ref para el contenedor del track scrolleable */
    trackRef,
    /** Ref para la section contenedora (focus management) */
    sectionRef,
    /** Si hay contenido para scrollear a la izquierda */
    canScrollLeft,
    /** Si hay contenido para scrollear a la derecha */
    canScrollRight,
    /** Indica si el componente ya se montó (para animations) */
    mounted,
    /** Ref que indica si el usuario está arrastrando actualmente */
    isDragging,
    /** ID único para aria-describedby del keyboard help */
    keyboardHelpId,
    /** Desplaza el track una card hacia la dirección indicada */
    scrollByDirection,
    /** Recalcula el estado de las arrows */
    updateArrows,
    /** Mouse handler: inicio del drag */
    onMouseDown,
    /** Mouse handler: movimiento durante drag */
    onMouseMove,
    /** Mouse handler: fin del drag */
    stopDrag,
    /** Focus handler */
    handleFocus,
    /** Blur handler */
    handleBlur,
    /** Mouse enter handler */
    handleMouseEnter,
    /** Mouse leave handler */
    handleMouseLeave,
  };
}
