
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ThermometerSun, Info, CloudRainWind, Users, HelpCircle, CheckCircle, MapPin, ExternalLink, Wheat, Waves as WavesIcon, Fish, Megaphone, Share2, Twitter, Facebook, Linkedin, Mail } from 'lucide-react';
import ClimateDataCharts from '@/components/climate-change/climate-data-charts';
import Link from 'next/link';

const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: "Climate Change Data Dashboard & Impact Insights | Earth Insights",
  description: "Track global temperature anomalies, CO₂ levels, sea level rise, and extreme weather patterns. Understand their impact and explore comprehensive climate science resources.",
  keywords: ["climate data", "global warming statistics", "temperature anomaly chart", "CO2 emissions tracker", "sea level rise data", "extreme weather events", "climate science", "environmental data analysis", "climate impact assessment"],
  alternates: {
    canonical: '/climate-change',
  },
  openGraph: {
    title: "Climate Change Data Dashboard & Impact Insights | Earth Insights",
    description: "Explore interactive charts on key climate indicators like temperature, CO2, and sea levels. Learn about extreme weather and the real-world impacts of climate change.",
    url: `${siteURL}/climate-change`,
    type: 'website', // or 'article' if more appropriate
    images: [
      {
        url: `${siteURL}/og-climate-change.png`, // Specific OG image
        width: 1200,
        height: 630,
        alt: 'Climate Change Data Visualization showing graphs and world map',
        'data-ai-hint': 'climate data graphs',
      },
    ],
  },
  twitter: {
    title: "Climate Change Data Dashboard & Impact Insights | Earth Insights",
    description: "Track global temperature, CO₂ levels, sea level rise, and understand their impact with interactive data visualizations.",
    images: [{
        url: `${siteURL}/twitter-climate-change.png`, // Specific Twitter card image
        alt: 'Earth Insights Climate Change Data Dashboard Preview',
        'data-ai-hint': 'climate dashboard social',
    }],
  },
};

const impactData = [
  { title: 'Heatwaves & Health Risks', description: 'Rising temperatures lead to more frequent and intense heatwaves, posing risks to vulnerable populations, agriculture, and ecosystems.', icon: ThermometerSun, color: 'text-red-500' },
  { title: 'Agricultural Shifts', description: 'Changes in temperature and precipitation patterns disrupt traditional farming, affecting crop yields and food security.', icon: Wheat, color: 'text-yellow-600' },
  { title: 'Coastal Flooding & Erosion', description: 'Sea level rise increases the risk of coastal flooding, saltwater intrusion into freshwater sources, and loss of coastal habitats.', icon: WavesIcon, color: 'text-blue-500' },
  { title: 'Ocean Acidification & Marine Life', description: 'Increased CO₂ absorption by oceans leads to acidification, harming shell-forming organisms like corals and shellfish, disrupting marine food webs.', icon: Fish, color: 'text-teal-500' },
];

export default function ClimateChangePage() {
  const pageUrl = `${siteURL}/climate-change`;
  const shareTitle = metadata.title as string || "Climate Change Data & Insights | Earth Insights";
  const shareDescription = metadata.description || "Track global temperature anomalies, CO₂ levels, sea level rise, and understand their impact.";

  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareTitle)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(shareTitle)}&summary=${encodeURIComponent(shareDescription)}`;
  const emailShareUrl = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareDescription + "\n\nRead more at: " + pageUrl)}`;

  return (
    <main className="flex flex-1 flex-col gap-6 p-4 md:gap-8 md:p-8">
      {/* Header Card */}
      <Card>
        <CardHeader className="flex flex-row items-start gap-4">
          <ThermometerSun className="h-8 w-8 text-primary mt-1" />
          <div>
            <CardTitle><h1>Climate Data Dashboard</h1></CardTitle>
            <CardDescription>
              Tracking our changing planet: Explore key global environmental metrics and understand their impact.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Climate change refers to long-term shifts in temperatures and weather patterns, primarily driven by human activities since the 1800s. This dashboard presents data on critical indicators like temperature anomalies, CO₂ levels, and sea level rise to make these changes tangible.
          </p>
        </CardContent>
      </Card>

      {/* Climate Data Charts (Temp, CO2, Sea Level) */}
      <ClimateDataCharts />

      {/* Extreme Weather Events */}
      <Card>
        <CardHeader className="flex flex-row items-start gap-4">
          <CloudRainWind className="h-8 w-8 text-destructive mt-1" />
          <div>
            <CardTitle><h2>Extreme Weather Events: A Closer Look</h2></CardTitle>
            <CardDescription>Understanding the increasing frequency and intensity of extreme weather phenomena linked to climate change.</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 border rounded-lg bg-muted/30 text-center">
            <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
             <p className="text-sm text-muted-foreground">Extreme weather events like hurricanes, droughts, and floods are becoming more common and intense due to rising global temperatures and altered weather patterns, impacting communities and ecosystems worldwide.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="explanation-extreme-weather">
              <AccordionTrigger>Understanding Extreme Weather Trends</AccordionTrigger>
              <AccordionContent className="space-y-2 text-sm">
                <p><strong>Simple:</strong> Climate change is like adding fuel to the weather engine. It doesn't cause every single storm, but it makes many extreme events like heatwaves, heavy rain, and powerful hurricanes stronger and more common than they used to be. This means more risk for communities and nature.</p>
                <p><strong>Expert:</strong> Attribution science increasingly links anthropogenic climate change to alterations in the frequency, intensity, and duration of extreme weather and climate events. Rising global mean temperatures increase atmospheric moisture-holding capacity (Clausius-Clapeyron relation), potentially intensifying precipitation events. Changes in atmospheric circulation patterns, jet stream behavior, and ocean heat content also contribute to shifts in storm tracks, drought prevalence, and heatwave characteristics. For detailed assessments, refer to IPCC reports and NOAA data.</p>
                <Button variant="link" size="sm" asChild className="p-0 h-auto">
                  <Link href="https://www.ipcc.ch/" target="_blank" rel="noopener noreferrer">
                    Visit IPCC <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
                <span className="mx-1 text-muted-foreground">|</span>
                <Button variant="link" size="sm" asChild className="p-0 h-auto">
                  <Link href="https://www.noaa.gov/climate" target="_blank" rel="noopener noreferrer">
                    Explore NOAA Climate <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button variant="outline" asChild>
            <Link href="/challenges">Learn More About Environmental Challenges <ExternalLink className="ml-2 h-4 w-4" /></Link>
          </Button>
        </CardContent>
      </Card>

      {/* What These Numbers Mean for You */}
      <Card>
        <CardHeader className="flex flex-row items-start gap-4">
          <Info className="h-8 w-8 text-accent mt-1" />
          <div>
            <CardTitle><h3>What These Numbers Mean for You</h3></CardTitle>
            <CardDescription>Connecting global data to local impacts and daily life.</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {impactData.map((impact, index) => {
              const IconComponent = impact.icon;
              return (
                <Card key={index} className="p-4 flex flex-col items-center text-center bg-muted/30 hover:shadow-md transition-shadow">
                  <IconComponent className={`h-10 w-10 mb-2 ${impact.color}`} />
                  <h4 className="font-semibold text-md mb-1 text-foreground">{impact.title}</h4>
                  <p className="text-xs text-muted-foreground">{impact.description}</p>
                </Card>
              );
            })}
          </div>
          
          <div>
            <p className="text-muted-foreground mb-4">
              Rising temperatures aren't just abstract figures; they translate to more frequent heatwaves, altered growing seasons, and stress on infrastructure. Increased CO₂ contributes to ocean acidification, impacting marine life and fisheries. Sea level rise directly threatens coastal communities and ecosystems. Understanding these connections helps us grasp the urgency and prepare for the future. These global trends have local consequences; stay informed about your region's climate projections and adaptation plans for resilience.
            </p>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1 text-sm">
              <li>Increased risk of heat-related illnesses during heatwaves.</li>
              <li>Changes in local weather patterns affecting agriculture and water availability.</li>
              <li>Potential for higher insurance premiums in coastal or flood-prone areas.</li>
              <li>Impacts on biodiversity and natural landscapes we enjoy.</li>
            </ul>
             <div className="mt-4 p-4 border rounded-lg bg-muted/30 text-center">
              <Info className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Stay informed about your region's climate projections and adaptation plans to better understand and prepare for local impacts.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action / Engagement Section */}
      <Card>
        <CardHeader className="flex flex-row items-start gap-4">
          <Megaphone className="h-8 w-8 text-primary mt-1" />
          <div>
            <CardTitle><h3>Get Involved & Stay Informed</h3></CardTitle>
            <CardDescription>Take action and deepen your understanding of climate change.</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 border rounded-lg bg-muted/30">
             <h4 className="font-semibold text-foreground mb-2 flex items-center"><CheckCircle className="mr-2 h-5 w-5 text-accent"/>See Global Responses</h4>
            <p className="text-sm text-muted-foreground mb-3">Explore how countries and organizations are working together to address climate change.</p>
            <Button variant="outline" asChild>
              <Link href="/global-efforts">
                <span>Explore Global Efforts <ExternalLink className="ml-2 h-4 w-4"/></span>
              </Link>
            </Button>
          </div>
           <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold text-foreground mb-2 flex items-center"><Users className="mr-2 h-5 w-5 text-accent"/>Community & Discussion</h4>
            <p className="text-sm text-muted-foreground mb-3">Connect with others, share insights, and discuss climate solutions. (Future Feature)</p>
            <Button variant="outline" disabled>Join the Conversation</Button>
          </div>
          <div className="p-4 border rounded-lg bg-muted/30">
            <h4 className="font-semibold text-foreground mb-2 flex items-center">
              <Share2 className="mr-2 h-5 w-5 text-accent"/>Spread Awareness
            </h4>
            <p className="text-sm text-muted-foreground mb-3">
              Share this page to help others understand the urgency and impact of climate change.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
                  <Twitter className="mr-2 h-4 w-4" /> Tweet
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer">
                  <Facebook className="mr-2 h-4 w-4" /> Share
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> Post
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={emailShareUrl}>
                  <Mail className="mr-2 h-4 w-4" /> Email
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
