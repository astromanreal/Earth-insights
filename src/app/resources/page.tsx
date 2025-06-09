
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Library, FileText, Globe2, Lightbulb, BookMarked, Cpu, Send, ExternalLink, BookOpen } from 'lucide-react';
import Link from 'next/link';

const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: "Climate Change & Sustainability Learning Resources | Earth Insights",
  description: "Explore curated reports, data portals, tools, courses, and books from leading organizations like IPCC, NASA, WWF to deepen your understanding of climate change and sustainable practices.",
  keywords: ["environmental learning resources", "climate science reports", "sustainability education", "IPCC data", "NASA climate portal", "WWF conservation information", "online climate courses", "best climate change books", "sustainability tools and guides"],
  alternates: {
    canonical: '/resources',
  },
  openGraph: {
    title: "Trusted Climate & Sustainability Learning Resources | Earth Insights",
    description: "Curated links to reports, portals, tools, and courses from leading organizations. Empower your learning journey on climate change and sustainability.",
    url: `${siteURL}/resources`,
    type: 'website',
    images: [
      {
        url: `${siteURL}/og-resources.png`, // Specific OG image
        width: 1200,
        height: 630,
        alt: 'A collection of books and digital icons representing learning resources for climate change and sustainability.',
        'data-ai-hint': 'books computer screen',
      },
    ],
  },
  twitter: {
    title: "Explore Climate & Sustainability Resources | Earth Insights",
    description: "Curated links to reports, portals, and tools from leading organizations to help you learn, act, and inspire change for our planet.",
    images: [{
        url: `${siteURL}/twitter-resources.png`, // Specific Twitter card image
        alt: 'Earth Insights Learning Resources Banner showing books and icons.',
        'data-ai-hint': 'education resources banner',
    }],
  },
};

const keyReports = [
  {
    title: 'IPCC Reports',
    description: 'The Intergovernmental Panel on Climate Change provides comprehensive scientific assessments on climate change.',
    type: 'Report Series',
    link: 'https://www.ipcc.ch/reports/',
    icon: FileText,
  },
  {
    title: 'UNEP Emissions Gap Report',
    description: 'Annual assessment of the gap between anticipated emissions and levels consistent with climate targets.',
    type: 'Annual Report',
    link: 'https://www.unep.org/resources/emissions-gap-report',
    icon: FileText,
  },
  {
    title: 'National Climate Assessment (U.S.)',
    description: 'Summarizes the impacts of climate change on the United States, now and in the future.',
    type: 'National Report',
    link: 'https://nca2023.globalchange.gov/',
    icon: FileText,
  },
];

const interactiveWebsites = [
  {
    title: 'NASA Climate Change Portal',
    description: 'Vital signs of the planet: global climate data, visualizations, news, and educational resources.',
    type: 'Data Portal',
    link: 'https://climate.nasa.gov/',
    icon: Globe2,
  },
  {
    title: 'Climate.gov (NOAA)',
    description: 'Provides timely and authoritative scientific data and information about climate science and services.',
    type: 'Science Hub',
    link: 'https://www.climate.gov/',
    icon: Globe2,
  },
  {
    title: 'Our World in Data – Climate',
    description: 'Research and data visualizations on global issues including climate change, emissions, and energy.',
    type: 'Data Visualization',
    link: 'https://ourworldindata.org/climate-change',
    icon: Globe2,
  },
];

const solutionsResources = [
  {
    title: 'Project Drawdown',
    description: 'A leading resource for information and insight about climate solutions that can achieve drawdown.',
    type: 'Solutions Hub',
    link: 'https://drawdown.org/',
    icon: Lightbulb,
  },
  {
    title: 'WWF Conservation Hub',
    description: 'Information on wildlife conservation, biodiversity protection efforts, and sustainable practices.',
    type: 'Conservation Info',
    link: 'https://www.worldwildlife.org/initiatives',
    icon: Lightbulb,
  },
  {
    title: 'CDP Climate Disclosure',
    description: 'Global disclosure system for investors, companies, cities, states and regions to manage their environmental impacts.',
    type: 'Disclosure Platform',
    link: 'https://www.cdp.net/en',
    icon: Lightbulb,
  },
];

const coursesPlatforms = [
  {
    title: 'Coursera – Climate Science & Sustainability',
    description: 'University-led online courses on climate change, environmental science, and sustainable development.',
    type: 'Online Courses',
    link: 'https://www.coursera.org/browse/physical-science-and-engineering/environmental-science-and-sustainability',
    icon: BookMarked,
  },
  {
    title: 'edX – Sustainable Development Courses',
    description: 'Learn from global institutions about sustainability, renewable energy, and environmental policy.',
    type: 'Online Courses',
    link: 'https://www.edx.org/learn/sustainable-development',
    icon: BookMarked,
  },
  {
    title: 'UN CC:e-Learn',
    description: 'Free online courses on climate change and green economy topics from the United Nations.',
    type: 'Free UN Courses',
    link: 'https://www.uncclearn.org/courses/',
    icon: BookMarked,
  },
];

const booksForReading = [
  {
    title: 'The Uninhabitable Earth: Life After Warming',
    description: 'By David Wallace-Wells. A stark and gripping overview of possible climate futures if action is not taken.',
    type: 'Book',
    link: 'https://www.goodreads.com/book/show/41552686-the-uninhabitable-earth',
    icon: BookOpen,
  },
  {
    title: 'Braiding Sweetgrass: Indigenous Wisdom, Scientific Knowledge and the Teachings of Plants',
    description: 'By Robin Wall Kimmerer. A profound look at ecological awareness through Indigenous wisdom and botany.',
    type: 'Book',
    link: 'https://www.goodreads.com/book/show/17465709-braiding-sweetgrass',
    icon: BookOpen,
  },
  {
    title: 'All We Can Save: Truth, Courage, and Solutions for the Climate Crisis',
    description: 'Edited by Ayana Elizabeth Johnson & Katharine K. Wilkinson. An anthology of essays by women at the forefront of the climate movement.',
    type: 'Book',
    link: 'https://www.goodreads.com/book/show/53249009-all-we-can-save',
    icon: BookOpen,
  },
  {
    title: 'Drawdown: The Most Comprehensive Plan Ever Proposed to Reverse Global Warming',
    description: 'Edited by Paul Hawken. A detailed look at 100 substantive, existing solutions to climate change.',
    type: 'Book',
    link: 'https://www.goodreads.com/book/show/31634139-drawdown',
    icon: BookOpen,
  }
];

const resourceSections = [
  { id: 'key-reports', title: 'Key Reports & Scientific Assessments', data: keyReports, icon: FileText },
  { id: 'interactive-websites', title: 'Interactive Websites & Data Portals', data: interactiveWebsites, icon: Globe2 },
  { id: 'solutions-resources', title: 'Solutions & Action Resources', data: solutionsResources, icon: Lightbulb },
  { id: 'courses-platforms', title: 'Courses & Learning Platforms', data: coursesPlatforms, icon: BookMarked },
  { id: 'books-reading', title: 'Books for Deeper Reading', data: booksForReading, icon: BookOpen },
];


export default function ResourcesPage() {
  return (
    <main className="flex flex-1 flex-col gap-6 p-4 md:gap-8 md:p-8">
      <Card className="bg-muted/30">
        <CardHeader className="flex flex-col items-center text-center gap-3">
          <Library className="h-12 w-12 text-primary" />
          <div>
            <CardTitle className="text-2xl md:text-3xl"><h1>Explore Trusted Climate & Sustainability Resources</h1></CardTitle>
            <CardDescription className="mt-2 text-md md:text-lg max-w-2xl mx-auto">
              Curated links to reports, portals, tools, courses, and books from leading organizations. Deepen your understanding of our planet and the path to a sustainable future.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>

      {resourceSections.map(section => {
        const SectionIcon = section.icon;
        return (
          <Card key={section.id}>
            <CardHeader className="flex flex-row items-center gap-3">
              <SectionIcon className="h-6 w-6 text-primary" />
              <CardTitle className="text-xl"><h2>{section.title}</h2></CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {section.data.map((item) => {
                  const ItemIcon = item.icon || section.icon; // Use item-specific icon if available
                  return (
                  <Card key={item.title} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                         <div className="flex items-center gap-2">
                           {ItemIcon && <ItemIcon className="h-5 w-5 text-accent shrink-0" />}
                           <CardTitle className="text-lg">{item.title}</CardTitle>
                         </div>
                        <Badge variant="secondary" className="shrink-0">{item.type}</Badge>
                      </div>
                      <CardDescription className="text-sm pt-1">{item.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto pt-4">
                      <Button asChild variant="outline" size="sm" className="w-full" disabled={item.link === '#'}>
                        <Link href={item.link} target="_blank" rel="noopener noreferrer">
                          <span>{item.type === 'Book' ? 'Find this Book' : 'Learn More'} <ExternalLink className="ml-2 h-4 w-4" /></span>
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                );})}
              </div>
              {section.id === 'books-reading' && (
                 <p className="text-xs text-muted-foreground mt-4">Note: Book links direct to Goodreads for more information. Please search for these titles at your favorite bookseller or library.</p>
              )}
            </CardContent>
          </Card>
        );
      })}
      
      <Card>
        <CardHeader className="flex flex-row items-center gap-3">
          <Cpu className="h-6 w-6 text-secondary" />
          <CardTitle className="text-xl"><h2>Tools & Widgets (Conceptual)</h2></CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            This section is envisioned for future interactive tools to enhance your engagement with sustainability. Potential features include a Carbon Footprint Calculator, a Personal Sustainability Checklist, or an Interactive Climate Impact Map. These tools would aim to provide personalized insights and actionable steps. Stay tuned for these enhancements as Earth Insights evolves!
          </CardDescription>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center gap-3">
          <Send className="h-6 w-6 text-accent" />
          <CardTitle className="text-xl"><h3>Suggest a Resource</h3></CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <CardDescription>
            Know a great climate or sustainability resource we missed? Help us expand our library! We welcome suggestions for high-quality, reliable information from reputable sources.
          </CardDescription>
          <Button variant="outline" asChild>
             <Link href="/contact">
                Suggest a Resource <ExternalLink className="ml-2 h-4 w-4" />
             </Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
