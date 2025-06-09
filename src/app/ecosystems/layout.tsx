
import type { Metadata } from 'next';

const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: "Explore Earth's Ecosystems & Biodiversity | Conservation Insights",
  description: "Discover diverse global ecosystems like forests, oceans, polar regions, grasslands, wetlands, and deserts. Learn about their unique biodiversity, key challenges, and conservation efforts.",
  keywords: ["ecosystems", "biodiversity conservation", "forest ecology", "ocean habitats", "polar wildlife", "grassland species", "wetland importance", "desert adaptation", "conservation efforts", "environmental science"],
  alternates: {
    canonical: '/ecosystems',
  },
  openGraph: {
    title: "Explore Earth's Ecosystems & Biodiversity | Earth Insights",
    description: "Discover diverse ecosystems like forests, oceans, and polar regions. Learn about biodiversity, endangered species, and vital conservation efforts with Earth Insights.",
    url: `${siteURL}/ecosystems`,
    type: 'website',
    images: [
      {
        url: `${siteURL}/og-ecosystems.png`, // Specific OG image
        width: 1200,
        height: 630,
        alt: 'Montage of Diverse Earth Ecosystems - Forests, Oceans, Deserts',
        'data-ai-hint': 'ecosystem collage nature',
      },
    ],
  },
  twitter: {
    title: "Explore Earth's Ecosystems & Biodiversity | Earth Insights",
    description: "Discover diverse ecosystems and learn about conservation efforts for forests, oceans, polar regions, and more.",
    images: [{
        url: `${siteURL}/twitter-ecosystems.png`, // Specific Twitter card image
        alt: 'Earth Insights Ecosystems Exploration Banner',
        'data-ai-hint': 'ecosystem banner variety',
    }],
  },
};

export default function EcosystemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
