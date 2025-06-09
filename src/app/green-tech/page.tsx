
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Leaf, Lightbulb, Zap, Users, BookOpen, ExternalLink, Sun, Wind, Car, Tractor, Building2, Home, Recycle, Bike, Droplets, TrendingUp, HelpCircle, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: "Green Technology Innovations & Sustainable Solutions | Earth Insights",
  description: "Explore breakthrough green technologies: solar power, wind energy, electric vehicles (EVs), regenerative agriculture, smart cities, and green buildings. Discover innovations transforming our planet.",
  keywords: ["green technology", "sustainable solutions", "renewable energy innovation", "solar power advancements", "wind energy technology", "electric vehicles (EVs)", "regenerative agriculture practices", "smart city solutions", "green building design", "climate tech", "environmental innovation"],
  alternates: {
    canonical: '/green-tech',
  },
  openGraph: {
    title: "Green Technology Innovations & Sustainable Solutions | Earth Insights",
    description: "Explore breakthrough green technologies like solar, wind, EVs, and regenerative agriculture. Discover innovations transforming our planet towards sustainability.",
    url: `${siteURL}/green-tech`,
    type: 'website',
    images: [
      {
        url: `${siteURL}/og-green-tech.png`, // Specific OG image
        width: 1200,
        height: 630,
        alt: 'Montage of Green Technology Innovations like Solar Panels and Wind Turbines',
        'data-ai-hint': 'green tech future',
      },
    ],
  },
  twitter: {
    title: "Green Technology Innovations & Sustainable Solutions | Earth Insights",
    description: "Explore breakthrough green technologies: solar, wind, EVs, regenerative agriculture. Discover innovations transforming our planet.",
    images: [{
        url: `${siteURL}/twitter-green-tech.png`, // Specific Twitter card image
        alt: 'Earth Insights Green Technology and Innovations Banner',
        'data-ai-hint': 'tech innovation banner',
    }],
  },
};

const solutions = [
  {
    title: 'Solar Energy',
    description: 'Harnessing the sun\'s power for clean electricity generation, vital for reducing carbon emissions.',
    icon: Sun,
    details: {
        howItWorks: "Photovoltaic (PV) panels convert sunlight directly into electricity, while concentrated solar power (CSP) uses mirrors to concentrate sunlight to generate heat, which then drives turbines.",
        benefits: "Reduces reliance on fossil fuels, lowers greenhouse gas emissions, can provide energy independence, decreasing energy costs over time.",
        challenges: "Intermittency (requires storage or grid balancing), land use for large-scale farms, initial investment costs, manufacturing impacts.",
    },
    deepDiveLink: "https://www.seia.org/solar-industry-research-data"
  },
  {
    title: 'Wind Turbines',
    description: 'Converting wind kinetic energy into sustainable electricity using large turbines.',
    icon: Wind,
    details: {
        howItWorks: "Wind turns propeller-like blades around a rotor, which spins a generator to create electricity. Can be onshore or offshore.",
        benefits: "Abundant renewable resource, low operating emissions, can be integrated into agricultural land use.",
        challenges: "Visual and noise impact, potential harm to wildlife (birds, bats), intermittency, suitable site availability.",
    },
    deepDiveLink: "https://www.energy.gov/eere/wind/how-do-wind-turbines-work"
  },
  {
    title: 'Electric Vehicles (EVs)',
    description: 'Paving the way for zero tailpipe-emission transportation systems.',
    icon: Car,
    details: {
        howItWorks: "Use electric motors powered by rechargeable batteries instead of internal combustion engines. Charged via dedicated stations or home outlets.",
        benefits: "No tailpipe emissions (improving air quality), lower running costs (electricity vs. gasoline), quieter operation, reduced reliance on oil.",
        challenges: "Battery production (resource extraction, energy intensity), charging infrastructure availability, range anxiety (improving), higher upfront cost.",
    },
    deepDiveLink: "https://www.epa.gov/greenvehicles/electric-vehicle-myths"
  },
  {
    title: 'Regenerative Agriculture',
    description: 'Farming practices that restore soil health, enhance biodiversity, and sequester carbon.',
    icon: Tractor, 
    details: {
        howItWorks: "Emphasizes no-till farming, cover cropping, crop rotation, composting, and integrating livestock to improve soil structure, water retention, and nutrient cycling.",
        benefits: "Sequesters atmospheric CO2 in soil, improves water quality, increases resilience to drought/floods, enhances biodiversity, can reduce need for synthetic inputs.",
        challenges: "Transition period can be challenging for farmers, requires new knowledge and practices, market support for regeneratively grown products is still developing.",
    },
    deepDiveLink: "https://regenerationinternational.org/why-regenerative-agriculture/"
  },
  {
    title: 'Smart Cities',
    description: 'Using technology for efficient, sustainable, and livable urban environments.',
    icon: Building2,
    details: {
        howItWorks: "Integrates IoT, data analytics, and AI to optimize energy use, traffic flow, waste management, water distribution, public safety, and citizen services.",
        benefits: "Improved resource efficiency, reduced pollution and congestion, enhanced public services, better quality of life for residents.",
        challenges: "High initial investment, data privacy and security concerns, digital divide (ensuring equitable access), complexity of integration.",
    },
    deepDiveLink: "https://www.smartcitiesdive.com/news/what-is-a-smart-city/529691/"
  },
  {
    title: 'Green Buildings',
    description: 'Energy-efficient, resource-conserving, and healthy architectural designs and construction.',
    icon: Home,
    details: {
        howItWorks: "Incorporates passive design strategies (orientation, natural light), high-performance insulation, renewable energy systems (solar), water-efficient fixtures, sustainable materials, and green roofs/walls.",
        benefits: "Reduced energy and water consumption, lower operational costs, improved indoor air quality and occupant health, minimized environmental impact.",
        challenges: "Potentially higher upfront construction costs (though often offset by long-term savings), availability of skilled labor and sustainable materials, need for integrated design processes.",
    },
    deepDiveLink: "https://www.worldgbc.org/what-green-building"
  },
];

const caseStudies = [
  {
    id: "india-solar",
    title: "India's Solar Revolution",
    description: 'Rapid expansion of solar energy capacity, aiming for ambitious renewable energy targets and becoming a global leader in solar power deployment.',
    type: 'National Initiative',
    link: 'https://www.irena.org/Energy-Transition/Country-Support-and-Partnerships/India', 
    icon: Sun,
  },
  {
    id: "bhutan-carbon-negative",
    title: "Bhutan: Carbon Negative Nation",
    description: 'A unique model for environmental stewardship, constitutionally mandated to maintain forest cover and absorbing more CO₂ than it emits, showcasing a commitment to ecological balance.',
    type: 'National Policy',
    link: 'https://www.worldbank.org/en/news/feature/2021/10/27/bhutan-s-journey-to-carbon-negativity',
    icon: ShieldCheck,
  },
  {
    id: "germany-energiewende",
    title: "Germany's Energiewende",
    description: 'An ambitious national commitment to transition towards a renewable energy economy, systematically phasing out nuclear and fossil fuels while investing heavily in wind and solar.',
    type: 'Energy Transition',
    link: 'https://www.cleanenergywire.org/what-energiewende',
    icon: Zap,
  },
];

const userActions = [
  { title: 'Switch to Green Energy', description: 'Explore renewable energy providers or installing solar panels for your home.', link: 'https://www.epa.gov/green-power-markets/us-electricity-grid-regions', icon: Zap, impact: "Reduces household carbon footprint significantly.", type: 'Action' },
  { title: 'Start Composting', description: 'Reduce landfill waste by composting food scraps and yard waste, creating nutrient-rich soil.', link: 'https://www.epa.gov/recycle/composting-home', icon: Recycle, impact: "Lowers methane emissions from landfills.", type: 'Action' },
  { title: 'Choose Sustainable Transport', description: 'Opt for walking, cycling, public transport, or EVs to reduce your travel emissions.', link: 'https://www.transit.dot.gov/about/news/benefits-public-transportation', icon: Bike, impact: "Improves air quality and lowers carbon output.", type: 'Action' },
  { title: 'Reduce Water Consumption', description: 'Implement water-saving habits, fix leaks, and install efficient fixtures to conserve water.', link: 'https://www.epa.gov/watersense/start-saving', icon: Droplets, impact: "Saves a precious resource and energy used for water treatment.", type: 'Action' },
];

const linkLibrary = [
  {
    id: "startup-directory",
    title: 'Green Tech Startups Directory',
    description: 'Discover innovative companies leading the charge in sustainability and environmental technology.',
    type: 'Directory',
    link: 'https://www.startus-insights.com/innovators-guide/top-10-green-technology-trends-innovations-in-2024/',
  },
  {
    id: "diy-guides",
    title: 'DIY Sustainability Guides',
    description: 'Practical tips, projects, and tutorials for incorporating greener practices into your daily life.',
    type: 'Guides',
    link: 'https://www.treehugger.com/easy-diy-sustainability-projects-4858563',
  },
  {
    id: "green-investing",
    title: 'Invest in Green Futures',
    description: 'Learn about opportunities for sustainable and impact investments in the green technology sector.',
    type: 'Investment',
    link: 'https://www.investopedia.com/terms/g/green-investing.asp',
  },
];

const faqData = [
    {
        question: "Is green technology too expensive for average consumers?",
        answer: "While some green technologies, like EVs or solar panels, have higher upfront costs, many are becoming more affordable. Governments often offer incentives, and long-term savings on energy or fuel can offset initial investments. Simpler actions like composting or using LEDs are very low cost and widely accessible."
    },
    {
        question: "How effective is individual action in combating climate change?",
        answer: "Individual actions, when adopted collectively, create significant impact. They drive demand for sustainable products, influence policy through consumer behavior, and contribute to a broader cultural shift towards environmental responsibility. Every action, no matter how small, contributes to the larger solution."
    },
    {
        question: "What if I don't have space for solar panels or a garden?",
        answer: "There are many ways to contribute even without personal space for large installations. You can switch to a green energy provider through your utility company, support community solar projects, join community gardens, reduce energy consumption at home with efficient appliances, make sustainable food choices, and advocate for green policies in your community."
    },
    {
        question: "Are electric vehicles truly 'green' considering battery production?",
        answer: "Battery production for EVs does have an environmental footprint, primarily related to mineral extraction and manufacturing. However, the overall lifecycle emissions of EVs are typically lower than gasoline cars, especially when charged with renewable energy. The industry is continuously working on improving battery recycling processes and sourcing more sustainable materials to further reduce this impact."
    }
];


export default function GreenTechPage() {
  return (
    <main className="flex flex-1 flex-col gap-6 p-4 md:gap-8 md:p-8">
      {/* 1. Hero Section */}
      <section className="w-full flex items-center justify-center text-center bg-gradient-to-b from-primary/10 to-background py-16 md:py-24 rounded-lg">
        <div className="p-4">
            <Lightbulb className="h-16 w-16 md:h-20 md:w-20 text-primary mx-auto mb-6" />
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-3">
                Innovations for a Greener Future
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Explore breakthrough technologies and solutions transforming our planet for the better. This page highlights key green innovations, inspiring success stories, and ways you can contribute to a sustainable tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                    <Link href="#innovative-solutions">
                        <Zap className="mr-2 h-5 w-5" /> Discover Technologies
                    </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                    <Link href="#success-stories">
                        <TrendingUp className="mr-2 h-5 w-5" /> See Success Stories
                    </Link>
                </Button>
            </div>
        </div>
      </section>

      {/* 2. Cutting-Edge Technologies (Innovative Solutions) */}
      <Card id="innovative-solutions">
        <CardHeader className="flex flex-row items-start gap-4">
            <Zap className="h-8 w-8 text-primary mt-1" />
            <div>
                <CardTitle className="text-2xl"><h2>Cutting-Edge Green Technologies</h2></CardTitle>
                <CardDescription>A look at key innovations driving the green transition, their mechanisms, benefits, and challenges.</CardDescription>
            </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => {
              const IconComponent = solution.icon;
              return (
                <Card key={solution.title} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-2 pt-6 flex flex-col items-center text-center">
                     {IconComponent && <IconComponent className="h-10 w-10 text-primary mb-3" />}
                     <CardTitle className="text-lg">{solution.title}</CardTitle>
                     <CardDescription className="text-xs pt-1">{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow text-xs space-y-3 px-4">
                     <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="how-it-works">
                            <AccordionTrigger className="text-xs py-2 font-medium hover:text-primary text-left">How it Works</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-left">{solution.details.howItWorks}</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="benefits">
                            <AccordionTrigger className="text-xs py-2 font-medium hover:text-primary text-left">Benefits</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-left">{solution.details.benefits}</AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="challenges">
                            <AccordionTrigger className="text-xs py-2 font-medium hover:text-primary text-left">Challenges</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-left">{solution.details.challenges}</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                  </CardContent>
                   <CardFooter className="pt-3 pb-4">
                     <Button variant="link" size="sm" asChild className="text-xs p-0 h-auto mx-auto">
                       <Link href={solution.deepDiveLink} target="_blank" rel="noopener noreferrer"><span>Deep Dive into {solution.title} <ExternalLink className="ml-1 h-3 w-3"/></span></Link>
                     </Button>
                   </CardFooter>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* 3. Success Stories Around the Globe */}
      <Card id="success-stories">
        <CardHeader className="flex flex-row items-start gap-4">
            <Users className="h-8 w-8 text-accent mt-1" />
            <div>
                <CardTitle className="text-2xl"><h3>Inspiring Green Tech Success Stories</h3></CardTitle>
                <CardDescription>Examples of impactful green technology implementation and environmental policies from around the world.</CardDescription>
            </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => {
              const IconComponent = study.icon;
              return (
              <Card key={study.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                     {IconComponent && <IconComponent className="h-6 w-6 text-primary" />}
                     <CardTitle className="text-lg">{study.title}</CardTitle>
                    </div>
                    <Badge variant="secondary" className="shrink-0">{study.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pt-0">
                  <CardDescription className="text-sm">{study.description}</CardDescription>
                </CardContent>
                <CardFooter className="mt-auto pt-4">
                  <Button asChild variant="outline" size="sm" className="w-full" disabled={study.link === '#'}>
                    <Link href={study.link} target="_blank" rel="noopener noreferrer">
                      <span>Read More <ExternalLink className="ml-2 h-4 w-4" /></span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );})}
          </div>
        </CardContent>
      </Card>

      {/* 4. How You Can Switch Today (Actionable Steps) */}
      <Card id="user-actions">
        <CardHeader className="flex flex-row items-start gap-4">
            <Leaf className="h-8 w-8 text-secondary mt-1" />
            <div>
                <CardTitle className="text-2xl"><h3>Adopt Green Solutions Today</h3></CardTitle>
                <CardDescription>Practical steps and resources to incorporate green technologies and sustainable habits into your daily life.</CardDescription>
            </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {userActions.map((action) => {
              const IconComponent = action.icon;
              return (
                <Card key={action.title} className="flex flex-col items-center text-center p-4 hover:shadow-xl transition-shadow duration-300">
                   <IconComponent className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-md mb-1">{action.title}</CardTitle>
                  <p className="text-xs text-muted-foreground mb-2 flex-grow">{action.description}</p>
                  <p className="text-xs font-semibold text-green-600 dark:text-green-400 mb-3">{action.impact}</p>
                  <Button variant="outline" size="sm" asChild disabled={action.link === '#'}>
                    <Link href={action.link} target={action.link === '#' ? '_self' : '_blank'} rel="noopener noreferrer"><span>Learn How <ExternalLink className="ml-1 h-3 w-3"/></span></Link>
                  </Button>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* 5. Tools, Guides & Investment Ideas */}
      <Card id="tools-guides">
        <CardHeader className="flex flex-row items-start gap-4">
            <BookOpen className="h-8 w-8 text-primary mt-1" />
            <div>
                <CardTitle className="text-2xl"><h3>Explore Green Tech Resources</h3></CardTitle>
                <CardDescription>Deepen your knowledge and involvement in the green technology space with these curated resources.</CardDescription>
            </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {linkLibrary.map((item) => (
               <Card key={item.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                     <Badge variant="outline">{item.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pt-0">
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardContent>
                <CardFooter className="mt-auto pt-4">
                  <Button asChild variant="outline" size="sm" className="w-full" disabled={item.link === '#'}>
                    <Link href={item.link} target="_blank" rel="noopener noreferrer">
                      <span>Explore Resource <ExternalLink className="ml-2 h-4 w-4" /></span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 6. FAQ and Myth Busting */}
      <Card id="faq-myth-busting">
        <CardHeader className="flex flex-row items-start gap-4">
            <HelpCircle className="h-8 w-8 text-accent mt-1" />
            <div>
                <CardTitle className="text-2xl"><h3>Green Tech FAQs & Myth Busting</h3></CardTitle>
                <CardDescription>Addressing common questions and misconceptions about green technologies and sustainable practices.</CardDescription>
            </div>
        </CardHeader>
        <CardContent>
            <Accordion type="single" collapsible className="w-full">
                {faqData.map((faqItem, index) => (
                    <AccordionItem value={`faq-${index}`} key={index}>
                        <AccordionTrigger>{faqItem.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            {faqItem.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </CardContent>
      </Card>
    </main>
  );
}
