"use client";

import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/features/social/data/testimonials";
import { TestimonialsSlider } from "./TestimonialsSlider";
import { prisma } from "@/shared/lib/prisma";

interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  product?: string;
  date: string;
}

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  ratingText?: string;
  instagramCta?: string;
  instagramUrl?: string;
  id?: string;
}

async function getTestimonialsFromDB(): Promise<Testimonial[]> {
  try {
    const testimonials = await prisma.testimonial.findMany({
      where: { isActive: true },
      orderBy: { order: "asc" },
    });
    return testimonials.map((t) => ({
      id: t.id,
      name: t.name,
      avatar: t.avatar,
      rating: t.rating,
      text: t.text,
      product: t.product || undefined,
      date: t.date || "Hace poco",
    }));
  } catch {
    return [];
  }
}

export function TestimonialsSection({
  title = "Lo que dicen nuestros clientes",
  subtitle = "Miles de personas ya confiaron en nosotros",
  instagramCta = "Seguinos en Instagram",
  instagramUrl = "https://instagram.com",
}: TestimonialsSectionProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS);

  useEffect(() => {
    getTestimonialsFromDB().then((data) => {
      if (data.length > 0) {
        setTestimonials(data);
      }
    });
  }, []);

  return (
    <TestimonialsSlider
      testimonials={testimonials}
      title={title}
      subtitle={subtitle}
      instagramCta={instagramCta}
      instagramUrl={instagramUrl}
    />
  );
}
