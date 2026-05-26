import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/shared/lib/utils";
import { TooltipProvider } from "@/shared/components/ui/tooltip";
import { Toaster } from "@/shared/components/ui/sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://apple-store-demo.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Apple Store | iPhones y Productos Apple",
  description:
    "iPhones, iPads, Macs y accesorios Apple nuevos y usados con garantía. Reparaciones profesionales y plan canje.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Apple Store | iPhones y Productos Apple",
    description:
      "iPhones, iPads, Macs y accesorios Apple nuevos y usados con garantía. Reparaciones profesionales y plan canje.",
    url: SITE_URL,
    siteName: "Apple Store",
    images: [
      {
        url: `${SITE_URL}/preview.webp`,
        width: 1200,
        height: 630,
        alt: "Apple Store — iPhones y Productos Apple",
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Apple Store | iPhones y Productos Apple",
    description:
      "iPhones, iPads, Macs y accesorios Apple nuevos y usados con garantía. Reparaciones profesionales y plan canje.",
    images: [`${SITE_URL}/preview.webp`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MobilePhoneStore", "ElectronicsStore", "RepairShop"],
  name: "Apple Store",
  description:
    "Venta de productos Apple nuevos y usados, reparaciones profesionales y plan canje",
  url: SITE_URL,
  telephone: "+54-11-5555-0000",
  email: "hola@applestore.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Corrientes 1234",
    addressLocality: "Microcentro",
    addressRegion: "Buenos Aires",
    postalCode: "C1043",
    addressCountry: "AR",
  },
  priceRange: "$$",
  image: `${SITE_URL}/preview.webp`,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios Apple Store",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "iPhones nuevos y usados",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "iPads y Macs",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Reparaciones Apple",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Plan canje",
          description:
            "Entregá tu equipo Apple usado como parte de pago por uno nuevo",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={cn("font-sans", inter.variable)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
