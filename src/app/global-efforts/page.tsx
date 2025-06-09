
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, Users, Handshake, FileText, Landmark, TrendingUp, Goal, AlertOctagon, Megaphone, HeartHandshake, ExternalLink, Map, BarChart3, CheckCircle, ShieldCheck, Zap, Leaf } from 'lucide-react';
import Link from 'next/link';

const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: "Global Environmental Efforts & Climate Agreements | Earth Insights",
  description: "Explore key international treaties, conventions, and frameworks like the Paris Agreement, SDGs, and UNFCCC COP Conferences, aimed at global cooperation for climate action, biodiversity conservation, and sustainable development.",
  keywords: ["global environmental efforts", "international climate agreements", "Paris Agreement summary", "Sustainable Development Goals (SDGs)", "UNFCCC COP", "biodiversity conventions", "climate action cooperation", "environmental policy"],
  alternates: {
    canonical: '/global-efforts',
  },
  openGraph: {
    title: "Global Environmental Efforts & Climate Agreements | Earth Insights",
    description: "Explore key international treaties, conventions, and frameworks aimed at global cooperation for a sustainable future. Understand the Paris Agreement, SDGs, and more.",
    url: `${siteURL}/global-efforts`,
    type: 'website',
    images: [
      {
        url: `${siteURL}/og-global-efforts.png`, // Specific OG image
        width: 1200,
        height: 630,
        alt: 'Global Cooperation for Environmental Protection - Hands Around Globe',
        'data-ai-hint': 'hands holding globe',
      },
    ],
  },
  twitter: {
    title: "Global Environmental Efforts & Climate Agreements | Earth Insights",
    description: "Explore key international treaties like the Paris Agreement & SDGs. Learn about global cooperation for a sustainable future.",
    images: [{
        url: `${siteURL}/twitter-global-efforts.png`, // Specific Twitter card image
        alt: 'Earth Insights Global Efforts and Climate Agreements Banner',
        'data-ai-hint': 'global agreements banner',
    }],
  },
};

const globalEffortsData = [
  {
    id: "paris-agreement",
    title: 'The Paris Agreement',
    type: 'Treaty',
    adoptedYear: 2015,
    description: 'A landmark international treaty aiming to limit global warming to well below 2°C, preferably to 1.5°C, compared to pre-industrial levels. It requires countries to set and report on their emission reduction targets (Nationally Determined Contributions - NDCs).',
    link: 'https://unfccc.int/process-and-meetings/the-paris-agreement',
    icon: ShieldCheck,
  },
  {
    id: "convention-biodiversity",
    title: 'Convention on Biological Diversity (CBD)',
    type: 'Convention',
    adoptedYear: 1992,
    description: 'An international legal instrument for the conservation of biological diversity, the sustainable use of its components, and the fair and equitable sharing of benefits arising from genetic resources. It guides national biodiversity strategies and action plans.',
    link: 'https://www.cbd.int/',
    icon: Leaf,
  },
  {
    id: "sustainable-development-goals",
    title: 'Sustainable Development Goals (SDGs)',
    type: 'Framework',
    adoptedYear: 2015,
    description: 'A set of 17 interlinked global goals designed as a "blueprint to achieve a better and more sustainable future for all." They cover social, economic, and environmental dimensions, including climate action (SDG 13), life below water (SDG 14), and life on land (SDG 15).',
    link: 'https://sdgs.un.org/goals',
    icon: Goal,
  },
   {
    id: "unfccc-cop",
    title: 'UNFCCC COP Conferences',
    type: 'Event Series',
    description: 'The Conference of the Parties (COP) is the supreme decision-making body of the UN Framework Convention on Climate Change (UNFCCC). These annual conferences bring nations together to negotiate and assess progress on climate action, host declarations, and climate finance pledges.',
    adoptedYear: null,
    link: 'https://unfccc.int/process/bodies/supreme-bodies/conference-of-the-parties-cop',
    icon: Users,
  },
];

const ongoingChallengesList = [
    { title: 'Ensuring Accountability & Transparency', description: 'Strengthening mechanisms for countries to meet their commitments and transparently report progress.' },
    { title: 'Bridging the Emissions Gap', description: 'Current pledges are often insufficient to meet global temperature targets, requiring more ambition.' },
    { title: 'Mobilizing Climate Finance', description: 'Securing adequate financial resources, especially for developing nations, for mitigation and adaptation.' },
    { title: 'Technology Transfer & Capacity Building', description: 'Facilitating the spread of green technologies and expertise to all countries.' },
    { title: 'Addressing Loss and Damage', description: 'Supporting vulnerable countries already experiencing irreversible impacts of climate change.' },
    { title: 'Integrating Indigenous Knowledge & Local Solutions', description: 'Recognizing and incorporating diverse perspectives in climate action.' },
];


export default function GlobalEffortsPage() {
  return (
    <main className="flex flex-1 flex-col gap-6 p-4 md:gap-8 md:p-8">
      {/* 1. Hero Section: Introducing Global Cooperation */}
      <section className="w-full flex items-center justify-center text-center bg-gradient-to-b from-primary/10 to-background py-16 md:py-24 rounded-lg">
        <div className="p-4">
            <Globe className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-3">Global Efforts for a Sustainable Future</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Tackling climate change, biodiversity loss, and ecosystem degradation demands international cooperation. Explore the treaties and frameworks uniting nations to protect our planet.
            </p>
        </div>
      </section>

      {/* 2. Why International Agreements Matter */}
      <Card>
        <CardHeader className="flex flex-row items-start md:items-center gap-4">
          <Users className="h-10 w-10 text-primary mt-1 md:mt-0" />
          <div>
            <CardTitle className="text-2xl"><h2>Why International Agreements Matter</h2></CardTitle>
            <CardDescription>Turning shared challenges into shared solutions.</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-muted-foreground">
              Environmental crises like climate change, pollution, and biodiversity loss don't respect national borders. Ocean currents carry plastic worldwide, air pollution drifts across continents, and migratory species depend on habitats in multiple countries.
            </p>
            <p className="text-muted-foreground mt-3">
              No single nation can solve these global challenges alone. International agreements provide crucial legal and strategic frameworks. They help countries coordinate actions, set shared goals, mobilize funding and technology, and hold each other accountable—transforming complex global problems into opportunities for collective progress and shared solutions.
            </p>
          </div>
          <div className="p-6 border rounded-lg bg-muted/30 text-center flex flex-col items-center justify-center min-h-[150px]">
            <Handshake className="h-12 w-12 text-muted-foreground mb-3" />
            <p className="text-sm text-muted-foreground">Global cooperation is key to addressing interconnected environmental challenges effectively.</p>
          </div>
        </CardContent>
      </Card>

      {/* 3. Interactive Visualization (Placeholder) */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Map className="h-8 w-8 text-secondary" />
          <div>
            <CardTitle><h3>Visualizing Global Cooperation</h3></CardTitle>
            <CardDescription>Understanding treaty participation and milestones. (Conceptual)</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="text-center p-6 min-h-[150px] flex flex-col items-center justify-center">
          <BarChart3 className="h-16 w-16 text-muted-foreground mb-4" />
          <p className="text-muted-foreground">
            An interactive map displaying treaty participation by country or a timeline of major global environmental milestones will be featured here to make global cooperation tangible and visual in future updates.
          </p>
        </CardContent>
      </Card>

      {/* 4. Key Global Environmental Agreements */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <FileText className="h-8 w-8 text-accent" />
          <div>
            <CardTitle className="text-2xl"><h3>Key Global Environmental Agreements</h3></CardTitle>
            <CardDescription>
             Explore some of the world’s most important environmental agreements shaping our planet's future.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {globalEffortsData.map((item) => {
              const IconComponent = item.icon;
              return (
              <Card key={item.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex items-center gap-2">
                      {IconComponent && <IconComponent className="h-6 w-6 text-primary" />}
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                    <Badge variant="secondary" className="whitespace-nowrap shrink-0">
                      {item.type} {item.adoptedYear ? `(${item.adoptedYear})` : ''}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
                <CardFooter className="mt-auto pt-4">
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href={item.link} target="_blank" rel="noopener noreferrer">
                      <span>Learn More <ExternalLink className="ml-2 h-4 w-4" /></span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );})}
          </div>
        </CardContent>
      </Card>

      {/* 5. Tracking Global Progress */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <TrendingUp className="h-8 w-8 text-primary" />
          <div>
            <CardTitle className="text-2xl"><h3>Tracking Global Progress</h3></CardTitle>
            <CardDescription>Monitoring our collective journey toward environmental commitments.</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="text-center p-6 min-h-[150px] flex flex-col items-center justify-center">
          <Goal className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground mb-4">
            Agreements are only as powerful as the action they inspire. Track progress on Sustainable Development Goals (SDGs), COP outcomes, and global emissions trends via official UN dashboards and data portals.
          </p>
          <Button variant="outline" asChild>
            <Link href="https://sdgs.un.org/goals/tracking" target="_blank" rel="noopener noreferrer">
                <span>Visit UN SDG Tracker <ExternalLink className="ml-2 h-4 w-4"/></span>
            </Link>
          </Button>
        </CardContent>
      </Card>

      {/* 6. Ongoing Challenges & The Road Ahead */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <AlertOctagon className="h-8 w-8 text-destructive" />
          <div>
            <CardTitle className="text-2xl"><h3>Ongoing Challenges & The Road Ahead</h3></CardTitle>
            <CardDescription>Navigating the complexities of global environmental governance.</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            While global frameworks provide a roadmap, significant hurdles remain in achieving universal environmental sustainability. Addressing these challenges requires continuous effort, innovation, and strengthened international collaboration. Key areas include:
          </p>
          <ul className="space-y-3">
            {ongoingChallengesList.map(challenge => (
               <li key={challenge.title} className="flex items-start gap-3">
                 <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0" />
                 <div>
                   <h4 className="font-semibold text-foreground">{challenge.title}</h4>
                   <p className="text-sm text-muted-foreground">{challenge.description}</p>
                 </div>
               </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* 7. Your Role in Global Environmental Action */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Megaphone className="h-8 w-8 text-accent" />
          <div>
            <CardTitle className="text-2xl"><h3>Your Role in Global Environmental Action</h3></CardTitle>
            <CardDescription>Governments lead, but individuals matter too. You can be part of the movement.</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            Individual actions, when amplified by many, contribute to a global wave of change. Advocate for stronger policies, support organizations working on global environmental issues, make sustainable choices in your daily life, and stay informed. Every contribution helps build momentum for a healthier planet.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Button variant="outline" asChild className="h-auto py-3">
              <Link href="https://www.un.org/sustainabledevelopment/takeaction/" target="_blank" rel="noopener noreferrer">
                <HeartHandshake className="mr-2 h-5 w-5" /> Support Global NGOs
              </Link>
            </Button>
            <Button variant="outline" asChild className="h-auto py-3">
              <Link href="https://www.citizensclimatelobby.org/" target="_blank" rel="noopener noreferrer">
                <Landmark className="mr-2 h-5 w-5" /> Advocate for Climate Policies
              </Link>
            </Button>
            <Button variant="outline" asChild className="h-auto py-3">
              <Link href="/resources">
                <FileText className="mr-2 h-5 w-5" /> Learn More (Resources)
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

       {/* 8. Source Attribution Note */}
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="text-lg">Source Attribution & Disclaimer</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
            <p className="text-xs text-muted-foreground">
            The information presented on this page regarding international agreements, goals, and conferences is compiled for educational purposes and references publicly available data from authoritative sources such as the United Nations Framework Convention on Climate Change (UNFCCC), the Convention on Biological Diversity (CBD), and the United Nations Sustainable Development Goals (SDGs) program. For official details, full text of agreements, and the most current information, please consult the respective organizational websites, many of which are linked within the "Key Global Environmental Agreements" section. Earth Insights aims to provide an accessible overview and does not represent these organizations directly. All trademarks and logos of mentioned organizations are property of their respective owners.
            </p>
        </CardContent>
      </Card>
    </main>
  );
}
