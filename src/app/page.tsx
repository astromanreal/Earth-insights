
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, BarChart3, Sprout, Recycle, Lightbulb, Settings2, ThermometerSun, AlertTriangle, Leaf, Globe, Github, Mail, Twitter, Instagram, Users, FileText, TrendingUp, Goal, BookOpen } from 'lucide-react';

const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: "Earth Insights: Explore Our Planet's Future & Take Action",
  description: "Your gateway to understanding climate change, Earth's ecosystems, and sustainable solutions. Explore real-time data, green innovations, and how to live sustainably.",
  keywords: ["earth insights", "climate change education", "environmental awareness", "sustainability portal", "ecosystem exploration", "green technology trends", "climate data visualization", "sustainable living tips"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Earth Insights: Explore Our Planet's Future & Take Action",
    description: "Your gateway to climate knowledge and sustainable futures. Explore data, ecosystems, solutions, and innovations shaping our planet.",
    url: '/',
    type: 'website',
    images: [
      {
        url: `${siteURL}/og-homepage.png`, // Specific OG image for homepage
        width: 1200,
        height: 630,
        alt: 'Earth Insights - Visualizing a Sustainable Future for Our Planet',
        'data-ai-hint': 'earth abstract globe',
      },
    ],
  },
  twitter: {
    title: "Earth Insights: Explore Our Planet's Future & Take Action",
    description: "Your gateway to climate knowledge and sustainable futures. Explore data, ecosystems, solutions, and innovations shaping our planet.",
    images: [{
        url: `${siteURL}/twitter-homepage.png`, // Specific Twitter card image for homepage
        alt: 'Earth Insights Homepage - Your Portal to Climate Knowledge',
        'data-ai-hint': 'homepage social banner',
    }],
  },
};

const topicTiles = [
  { title: 'Climate Metrics', icon: BarChart3, description: 'Track key global climate indicators.', href: '/climate-change' },
  { title: 'Ecosystems & Biodiversity', icon: Sprout, description: 'Discover diverse habitats and life.', href: '/ecosystems' },
  { title: 'Sustainable Living', icon: Recycle, description: 'Learn eco-friendly practices.', href: '/sustainability' },
  { title: 'Green Technology', icon: Settings2, description: 'Explore innovative solutions.', href: '/green-tech' },
];

const thematicExplorerItems = [
  { title: 'Climate Dashboard', icon: ThermometerSun, href: '/climate-change', description: 'Visualize global climate trends.' },
  { title: 'Explore Ecosystems', icon: Sprout, href: '/ecosystems', description: 'Journey through Earth\'s diverse biomes.' },
  { title: 'Environmental Challenges', icon: AlertTriangle, href: '/challenges', description: 'Understand pressing ecological issues.' },
  { title: 'Sustainable Practices', icon: Leaf, href: '/sustainability', description: 'Adopt an eco-conscious lifestyle.' },
  { title: 'Green Technology', icon: Lightbulb, href: '/green-tech', description: 'Discover innovations for a greener future.' },
  { title: 'Global Climate Efforts', icon: Globe, href: '/global-efforts', description: 'See international environmental actions.' },
];

const quickLinksItems = [
  { href: "/climate-change", label: "Climate", icon: ThermometerSun },
  { href: "/ecosystems", label: "Ecosystems", icon: Sprout },
  { href: "/green-tech", label: "Green Tech", icon: Lightbulb },
  { href: "/resources", label: "Resources", icon: BookOpen },
  { href: "/contact", label: "Contact Us", icon: Mail },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col overflow-x-hidden">
      {/* 1. Hero Section: Earth in Focus */}
      <section className="w-full flex items-center justify-center text-center bg-gradient-to-b from-background to-muted/20 py-24 md:py-32">
        <div className="p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
            Welcome to Earth Insights
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            Explore the data, ecosystems, solutions, and innovations shaping our planet’s future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#what-is-earth-insights">Start Exploring</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#quick-links">Quick Jump to Sections</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. What Is Earth Insights? (Intro Pitch) */}
      <section id="what-is-earth-insights" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-primary">What is Earth Insights?</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-10 text-md md:text-lg">
            Earth Insights is your gateway to climate knowledge and sustainable futures. We present real-time data, explain critical environmental challenges, showcase global solutions, and guide conscious living for a resilient planet.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topicTiles.map((tile) => {
              const IconComponent = tile.icon;
              return (
                <Card key={tile.title} className="text-center p-6 hover:shadow-xl transition-shadow duration-300">
                  <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl mb-2">{tile.title}</CardTitle>
                  <CardDescription className="text-sm">{tile.description}</CardDescription>
                   <Button variant="link" asChild className="mt-3">
                      <Link href={tile.href}>Learn More <ArrowRight className="ml-1 h-4 w-4" /></Link>
                   </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Thematic Explorer Grid (Navigation Tiles) */}
      <section id="thematic-explorer" className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-primary">Explore Our Core Sections</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {thematicExplorerItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link href={item.href} key={item.title} className="block group">
                  <Card className="p-6 h-full flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    <IconComponent className="h-10 w-10 text-accent mb-4 transition-transform group-hover:rotate-12" />
                    <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                    <CardDescription className="text-xs flex-grow">{item.description}</CardDescription>
                    <Button variant="ghost" size="sm" className="mt-4 text-primary group-hover:underline">
                      Dive In <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Highlighted Insights / Data Visual Teaser */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-primary">See the Planet in Numbers</h2>
          <p className="text-muted-foreground mb-10 text-md">Live visuals from the climate frontlines.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Global Temperature Rise', icon: TrendingUp, hint: 'temperature graph showing upward trend', image: 'https://placehold.co/600x400.png?text=Temp+Rise' },
              { title: 'CO₂ Concentration', icon: BarChart3, hint: 'CO2 chart showing increasing levels', image: 'https://placehold.co/600x400.png?text=CO2+Levels' },
              { title: 'Renewable Energy Growth', icon: Goal, hint: 'renewable energy sources expanding', image: 'https://placehold.co/600x400.png?text=Renewables' },
            ].map(item => {
              const IconComponent = item.icon;
              return (
              <Card key={item.title} className="overflow-hidden p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow">
                <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden">
                   <img src={item.image} alt={`Visual representation of ${item.title}`} className="absolute inset-0 w-full h-full object-cover" data-ai-hint={item.hint} />
                </div>
                <IconComponent className="h-10 w-10 text-accent mb-3" />
                <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
              </Card>
            );
            })}
          </div>
           <Button variant="outline" asChild className="mt-10">
              <Link href="/climate-change">Explore All Climate Data</Link>
           </Button>
        </div>
      </section>

      {/* 6. Global Action & Hope (Inspire + Involve) */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-primary">Global Action & Hope</h2>
          <div className="grid md:grid-cols-1 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4 text-secondary text-center">🌏 Solutions Already Working</h3>
              <p className="text-muted-foreground mb-6 text-center ">
                Positive change is happening worldwide. From large-scale renewable energy projects to community-led conservation, discover initiatives making a real difference.
              </p>
              <div className="space-y-4 md:flex md:gap-4 md:space-y-0">
                <Card className="p-4 bg-background flex-1">
                  <h4 className="font-semibold">India's Solar Expansion</h4>
                  <p className="text-xs text-muted-foreground">Rapid growth in solar capacity, driving towards a cleaner energy future.</p>
                </Card>
                <Card className="p-4 bg-background flex-1">
                  <h4 className="font-semibold">Bhutan: Carbon Negative</h4>
                  <p className="text-xs text-muted-foreground">A nation prioritizing conservation, absorbing more CO₂ than it emits.</p>
                </Card>
                 <Card className="p-4 bg-background flex-1">
                  <h4 className="font-semibold">Urban Farming Revolution</h4>
                  <p className="text-xs text-muted-foreground">Communities transforming urban spaces into productive green havens.</p>
                </Card>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
             <h3 className="text-2xl font-semibold mb-4 text-secondary">🤝 What You Can Do</h3>
             <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
               Every action, big or small, contributes to a healthier planet. Explore ways to get involved and make a positive impact.
             </p>
            <Button asChild size="lg">
              <Link href="/sustainability">See Sustainable Practices</Link>
            </Button>
            <span className="mx-2 text-muted-foreground">or</span>
             <Button asChild variant="outline" size="lg">
                <Link href="/global-efforts">Explore Global Efforts</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* 7. Get Involved / Quick Links Panel */}
      <section id="quick-links" className="py-12 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 text-primary">Quick Links</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {quickLinksItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Button
                  variant="outline"
                  asChild
                  key={item.href}
                  className="flex flex-col items-center justify-center h-28 text-center p-3 transition-transform hover:scale-105 bg-background hover:bg-accent/10"
                >
                  <Link href={item.href}>
                    <IconComponent className="h-8 w-8 mb-2 text-primary" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Footer Section (Homepage Specific) */}
      <footer className="py-8 bg-muted text-muted-foreground text-center">
        <div className="container mx-auto px-4">
          <div className="mb-4">
            <Link href="/" className="flex items-center justify-center gap-2 font-semibold text-lg text-primary mb-2" aria-label="Earth Insights Home">
                <Leaf className="h-6 w-6" />
                <span>Earth Insights</span>
            </Link>
            <p className="text-xs max-w-md mx-auto">Your gateway to understanding climate change, exploring ecosystems, and discovering sustainable solutions for a healthier planet.</p>
          </div>
          <div className="flex justify-center gap-6 mb-4">
            <Link href="https://twitter.com/Sathyamsarthak" target="_blank" rel="noopener noreferrer" aria-label="Earth Insights on Twitter @Sathyamsarthak" className="hover:text-primary"><Twitter className="h-6 w-6" /></Link>
            <Link href="https://www.instagram.com/srishikharji/" target="_blank" rel="noopener noreferrer" aria-label="Earth Insights on Instagram @srishikharji" className="hover:text-primary"><Instagram className="h-6 w-6" /></Link>
            <Link href="https://github.com/astromanreal" target="_blank" rel="noopener noreferrer" aria-label="Earth Insights on GitHub astromanreal" className="hover:text-primary"><Github className="h-6 w-6" /></Link>
          </div>
           <form className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto mb-6">
              <input type="email" placeholder="Subscribe to EcoAlerts" className="flex-1 bg-background p-2 border rounded-md text-sm" aria-label="Email for newsletter"/>
              <Button type="submit" variant="default" size="sm">
                Subscribe
              </Button>
            </form>
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Earth Insights. All rights reserved.
          </p>
          <p className="text-xs mt-1">
            <Link href="/legal#privacy-policy" className="hover:underline">Privacy Policy</Link> | <Link href="/legal#terms-of-service" className="hover:underline">Terms of Service</Link>
          </p>
           <p className="text-xs mt-2">
            Built with passion for a sustainable future.
          </p>
        </div>
      </footer>
    </main>
  );
}
