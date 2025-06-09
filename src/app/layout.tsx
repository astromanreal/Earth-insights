
import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { cn } from '@/lib/utils';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import Header from '@/components/layout/header';
import SidebarNav from '@/components/layout/sidebar-nav';
import { Toaster } from '@/components/ui/toaster';

const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteURL),
  title: {
    default: 'Earth Insights - Understand Our Planet, Inspire Action',
    template: '%s | Earth Insights',
  },
  description: 'Explore climate data, ecosystems, environmental challenges, and sustainable solutions. Your portal to understanding and protecting Planet Earth through knowledge and action.',
  keywords: ['climate change', 'environment', 'sustainability', 'ecosystems', 'earth science', 'conservation', 'global warming', 'green technology', 'environmental data', 'climate action', 'sustainable living', 'planet earth insights'],
  authors: [{ name: 'Earth Insights Team' }],
  creator: 'Earth Insights Team',
  publisher: 'Earth Insights',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteURL,
    siteName: 'Earth Insights',
    title: {
      default: 'Earth Insights - Understand Our Planet, Inspire Action',
      template: '%s | Earth Insights',
    },
    description: 'Your comprehensive portal to understanding climate change, exploring Earth\'s ecosystems, discovering sustainable solutions, and taking meaningful environmental action.',
    images: [
      {
        url: '/og-image.png', // Assuming you will add a default OG image to /public
        width: 1200,
        height: 630,
        alt: 'Earth Insights: Understanding Our Planet, Inspiring Action for a Sustainable Future',
        'data-ai-hint': 'earth abstract logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@EarthInsights', // Replace with actual Twitter handle if available
    creator: '@EarthInsightsDev', // Replace if different
    title: {
      default: 'Earth Insights - Understand Our Planet, Inspire Action',
      template: '%s | Earth Insights',
    },
    description: 'Explore climate data, ecosystems, environmental challenges, and sustainable solutions. Your portal to understanding and protecting Planet Earth.',
    images: [{
        url: '/twitter-card-image.png', // Assuming you will add a Twitter card image to /public
        alt: 'Earth Insights - Engaging with Climate Data and Sustainable Solutions',
       'data-ai-hint': 'social banner earth',
    }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // icons: { // Favicon causes issues in Studio, disabling for now
  //   icon: '/favicon.ico',
  //   apple: '/apple-touch-icon.png', // Example for apple touch icon
  // },
  manifest: '/site.webmanifest', // Assuming you will add a webmanifest
  verification: {
    google: 'your-google-site-verification-code', // Add your Google verification code
    // yandex: 'your-yandex-verification-code',
    // other: {
    //   me: ['your-email@example.com', 'your-link'],
    // },
  },
  alternates: {
    canonical: '/',
    // languages: { // If you add internationalization
    //   'en-US': '/en-US',
    //   'es-ES': '/es-ES',
    // },
  },
  category: 'education',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#388E3C' }, // Earthy Green for light mode
    { media: '(prefers-color-scheme: dark)', color: '#1A202C' }, // Dark background for dark mode
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, // Optional: good for accessibility but can be 2 or 5
  userScalable: true, // Optional: good for accessibility
}

const WebSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Earth Insights",
  "url": siteURL,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${siteURL}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  "description": "Explore climate data, ecosystems, environmental challenges, and sustainable solutions. Your portal to understanding and protecting Planet Earth."
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        <meta name="google-site-verification" content="mac7aLjz9hgBPOeatEJp8fZ6RL2GRi8PeWQfgcITzFU" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WebSiteSchema) }}
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased overflow-x-hidden',
          GeistSans.variable
        )}
      >
        <SidebarProvider>
          <Sidebar collapsible="icon" side="left">
            <SidebarNav />
          </Sidebar>
          <SidebarInset>
             <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex-1">
                    {children}
                </div>
             </div>
          </SidebarInset>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
