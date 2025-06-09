
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Scale, TrendingUp, BarChart3, ExternalLink } from 'lucide-react';
import ChallengeCard from '@/components/challenges/challenge-card';
import Link from 'next/link';

const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: "Environmental Challenges & Ecological Crises Facing Our Planet | Earth Insights",
  description: "Explore major ecological threats: wildfires, floods, pollution, hurricanes, and droughts. Understand their causes, impacts, climate justice implications, and global disaster trends.",
  keywords: ["environmental challenges", "ecological crisis", "wildfires impact", "flood causes", "drought effects", "pollution solutions", "climate justice explained", "environmental disaster trends", "hurricanes"],
  alternates: {
    canonical: '/challenges',
  },
  openGraph: {
    title: "Environmental Challenges & Ecological Crises Facing Our Planet | Earth Insights",
    description: "Learn about major ecological threats like wildfires, floods, pollution, and their impact. Understand climate justice and disaster trends with Earth Insights.",
    url: `${siteURL}/challenges`,
    type: 'website',
    images: [
      {
        url: `${siteURL}/og-challenges.png`, // Specific OG image
        width: 1200,
        height: 630,
        alt: 'Depiction of Various Environmental Challenges Collage',
        'data-ai-hint': 'environmental hazard collage',
      },
    ],
  },
  twitter: {
    title: "Environmental Challenges & Ecological Crises | Earth Insights",
    description: "Explore major ecological threats: wildfires, floods, pollution, hurricanes. Understand their impact and climate justice implications.",
    images: [{
        url: `${siteURL}/twitter-challenges.png`, // Specific Twitter card image
        alt: 'Earth Insights Environmental Challenges Overview Banner',
        'data-ai-hint': 'hazard collage banner',
    }],
  },
};

const challenges = [
  {
    title: 'Wildfires',
    icon: 'Flame',
    description: 'Uncontrolled fires spreading through wildland areas, often exacerbated by climate change.',
    causes: 'Dry conditions, high temperatures, human activity (accidental or arson), lightning strikes.',
    effects: 'Habitat destruction, air pollution, loss of life and property, soil erosion.',
    impact: 'Disrupts ecosystems, releases large amounts of CO₂, threatens communities.',
    caseStudy: 'Recent major wildfires in California and Australia highlight the increasing scale and frequency.',
    imageUrl: 'https://i.pinimg.com/736x/ed/eb/03/edeb030610310f587f5146bffcdf7661.jpg',
    aiHint: 'forest fire intensity',
    altText: 'Intense forest fire with large flames consuming trees.'
  },
  {
    title: 'Floods',
    icon: 'Waves',
    description: 'Overflow of water that submerges land which is usually dry, caused by heavy rainfall, storms, or dam failures.',
    causes: 'Intense precipitation, storm surges, snowmelt, dam breaches, poor urban planning.',
    effects: 'Water contamination, infrastructure damage, displacement of people, agricultural losses.',
    impact: 'Economic disruption, public health risks, long-term environmental damage to floodplains.',
    caseStudy: 'Increased urban flooding events globally due to extreme weather and inadequate drainage.',
    imageUrl: 'https://i.pinimg.com/736x/2c/2d/2a/2c2d2a573e1b03862924aee6630ace8e.jpg',
    aiHint: 'city street flooding cars',
    altText: 'Flooded city street with cars partially submerged in water.'
  },
  {
    title: 'Droughts',
    icon: 'ThermometerSun',
    description: 'Prolonged periods of abnormally low rainfall, leading to a shortage of water.',
    causes: 'Lack of precipitation, high temperatures, climate patterns (e.g., El Niño), overuse of water resources.',
    effects: 'Water scarcity, crop failure, famine, ecosystem stress, increased risk of wildfires.',
    impact: 'Impacts agriculture, water supply for communities, energy production (hydropower), and biodiversity.',
    caseStudy: 'Extended droughts in regions like the Sahel and parts of the American Southwest.',
    imageUrl: 'https://i.pinimg.com/736x/5c/84/c9/5c84c92823e75a066e53baa987bf888c.jpg',
    aiHint: 'dry cracked earth ground',
    altText: 'Dry, cracked earth landscape symbolizing drought conditions.'
  },
  {
    title: 'Hurricanes & Cyclones',
    icon: 'CloudRainWind',
    description: 'Intense tropical storms with strong winds and heavy rain, forming over warm ocean waters.',
    causes: 'Warm sea surface temperatures, atmospheric moisture, low pressure systems.',
    effects: 'Coastal erosion, storm surges, high winds causing destruction, heavy rainfall leading to floods.',
    impact: 'Devastating impact on coastal communities, infrastructure, and natural habitats like coral reefs.',
    caseStudy: 'Increasing intensity of Atlantic hurricanes observed in recent decades.',
    imageUrl: 'https://i.pinimg.com/736x/b3/db/24/b3db245dc27a5c49e558f43e93995aae.jpg',
    aiHint: 'hurricane satellite view storm',
    altText: 'Satellite view of a powerful hurricane swirling over the ocean.'
  },
  {
    title: 'Pollution',
    icon: 'Trash2',
    description: 'Introduction of harmful materials into the environment (air, water, land).',
    causes: 'Industrial emissions, vehicle exhaust, plastic waste, agricultural runoff, improper waste disposal.',
    effects: 'Health problems (respiratory, waterborne diseases), ecosystem damage, biodiversity loss, climate change contribution.',
    impact: 'Affects human health, contaminates food and water sources, degrades natural environments globally.',
    caseStudy: 'The Great Pacific Garbage Patch as a stark example of plastic pollution in oceans.',
    imageUrl: 'https://i.pinimg.com/736x/e5/02/d4/e502d4d14b5506280e8fe560ca985996.jpg',
    aiHint: 'industrial smoke pollution factory',
    altText: 'Industrial factory emitting smoke into the atmosphere, symbolizing air pollution.'
  },
];

export default function EnvironmentalChallengesPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <AlertTriangle className="h-8 w-8 text-destructive" />
          <div>
            <CardTitle><h1>Environmental Challenges: Crises We Face</h1></CardTitle>
            <CardDescription>
              Understanding the major ecological threats impacting our planet and their interconnected causes and effects.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Our planet faces numerous environmental crises, many intensified by human activity and climate change. This section explores some of the most critical challenges, examining their roots, consequences, and the urgent need for solutions.
          </p>
        </CardContent>
      </Card>

      {/* Topic Grid */}
      <section aria-labelledby="environmental-challenges-grid">
        <h2 id="environmental-challenges-grid" className="sr-only">Detailed Environmental Challenges</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge, index) => (
            <ChallengeCard
              key={index}
              title={challenge.title}
              icon={challenge.icon}
              description={challenge.description}
              causes={challenge.causes}
              effects={challenge.effects}
              impact={challenge.impact}
              caseStudy={challenge.caseStudy}
              imageUrl={challenge.imageUrl}
              aiHint={challenge.aiHint}
            />
          ))}
        </div>
      </section>

      {/* Data & Trends Section */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
           <TrendingUp className="h-8 w-8 text-secondary" />
           <div>
             <CardTitle><h2>Data & Trends in Environmental Challenges</h2></CardTitle>
             <CardDescription>Understanding the scale and impact through data.</CardDescription>
           </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <BarChart3 className="h-10 w-10 text-muted-foreground mt-1 shrink-0" />
            <p className="text-muted-foreground">
              Visualizing data is key to grasping the magnitude and progression of environmental challenges. While specific trend charts for each challenge are not displayed here, you can explore related global climate metrics and data visualizations on our <Link href="/climate-change" className="text-primary hover:underline">Climate Change page</Link>.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/climate-change" rel="noopener noreferrer">
              Explore Climate Data <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>


      {/* Climate Justice Section */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Scale className="h-8 w-8 text-accent" />
          <div>
            <CardTitle><h3>Climate Justice: Unequal Impacts</h3></CardTitle>
            <CardDescription>
              Understanding how environmental challenges disproportionately affect vulnerable communities.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            The impacts of climate change and environmental degradation are not felt equally. Vulnerable populations, including low-income communities, indigenous groups, and developing nations, often bear the brunt of these crises despite contributing the least to their causes. Climate justice seeks to address these inequities by promoting fair treatment and meaningful involvement of all people in environmental decision-making and ensuring equitable distribution of burdens and benefits.
          </p>
           <ul className="list-disc pl-5 mt-4 text-muted-foreground space-y-1 text-sm">
                <li>Disproportionate exposure to pollution and environmental hazards.</li>
                <li>Greater vulnerability to extreme weather events due to inadequate infrastructure.</li>
                <li>Limited access to resources for adaptation and recovery.</li>
                <li>Loss of traditional livelihoods dependent on stable ecosystems.</li>
              </ul>
        </CardContent>
      </Card>
    </main>
  );
}
