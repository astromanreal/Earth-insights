
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Leaf,
  Globe,
  Users,
  HeartHandshake,
  BookOpen,
  Sprout,
  Zap,
  Bike,
  ShoppingCart,
  Award,
  Lightbulb,
  MapPin,
  Settings2,
  FileText,
  Video,
  CalendarDays,
  Send,
  Share2,
  Recycle,
  Home,
  Droplets,
  Trees,
  Shield,
  ExternalLink,
  Info,
  Quote
} from 'lucide-react';

const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: "Sustainable Living Practices & Ancient Wisdom | Earth Insights",
  description: "Explore practical choices for sustainable living, blending modern eco-friendly practices with timeless ancient wisdom to shape a healthier Earth. Learn, act, and make a difference.",
  keywords: ["sustainable living guide", "eco-friendly practices", "modern sustainability tips", "ancient environmental wisdom", "zero waste lifestyle", "energy efficiency", "plant-based eating", "sustainable transport", "indigenous knowledge", "community sustainability"],
  alternates: {
    canonical: '/sustainability',
  },
  openGraph: {
    title: "Live Sustainably, Impact Globally: Modern & Ancient Practices | Earth Insights",
    description: "Discover how to make sustainable choices today for a healthier planet tomorrow. Explore modern eco-friendly practices and timeless ancient wisdom with Earth Insights.",
    url: `${siteURL}/sustainability`,
    type: 'article', // This page is content-rich like an article
    images: [
      {
        url: `${siteURL}/og-sustainability.png`, // Specific OG image
        width: 1200,
        height: 630,
        alt: 'Inspiring Sustainable Lifestyles - Modern and Ancient Wisdom Collage',
        'data-ai-hint': 'sustainable lifestyle collage',
      },
    ],
  },
  twitter: {
    title: "Live Sustainably, Impact Globally: Modern & Ancient Practices | Earth Insights",
    description: "Discover how to make sustainable choices today for a healthier planet tomorrow. Explore modern and ancient practices.",
    images: [{
        url: `${siteURL}/twitter-sustainability.png`, // Specific Twitter card image
        alt: 'Earth Insights Sustainability Page Banner showing green living concepts',
        'data-ai-hint': 'sustainability banner green',
    }],
  },
};

const modernPractices = [
  {
    title: 'Zero Waste Lifestyle',
    icon: Recycle,
    description: 'Embrace the 5 Rs: Refuse, Reduce, Reuse, Recycle, Rot (Compost). Aim to send minimal waste to landfills.',
    actions: 'Conduct a waste audit, switch to reusables (bags, bottles, containers), compost food scraps, buy in bulk.',
    impact: 'Reduces landfill burden, conserves resources, lessens pollution.',
    resourcesLink: 'https://zerowastehome.com/tips/',
    imageUrl: 'https://i.pinimg.com/736x/b1/20/bf/b120bfcea463fb6cc8cabeb38dff432a.jpg',
    aiHint: 'reusable shopping bags products',
    altText: 'Collection of reusable shopping bags, water bottles, and containers symbolizing a zero waste lifestyle.'
  },
  {
    title: 'Energy Efficiency at Home',
    icon: Home,
    description: 'Optimize energy use in your household to reduce consumption and lower carbon emissions.',
    actions: 'Switch to LED lighting, improve insulation, use smart thermostats, unplug unused electronics, choose energy-efficient appliances.',
    impact: 'Lowers utility bills, reduces greenhouse gas emissions, conserves energy resources.',
    resourcesLink: 'https://www.energy.gov/energysaver/energy-saver',
    imageUrl: 'https://i.pinimg.com/736x/36/ef/06/36ef06eb4fd2a2d7c33a2a7585110bda.jpg',
    aiHint: 'smart home energy devices',
    altText: 'Smart home devices like a thermostat and LED bulbs illustrating energy efficiency.'
  },
  {
    title: 'Plant-Forward Eating',
    icon: Sprout,
    description: 'Prioritize plant-based foods, reducing meat and dairy consumption for environmental and health benefits.',
    actions: 'Incorporate more fruits, vegetables, legumes, and grains. Explore plant-based recipes, support local farmers markets.',
    impact: 'Lowers carbon footprint (less land/water use), improves biodiversity, can enhance personal health.',
    resourcesLink: 'https://www.forksoverknives.com/how-tos/plant-based-primer-beginners-guide-to-starting-a-plant-based-diet/',
    imageUrl: 'https://i.pinimg.com/736x/7b/e5/61/7be5613cfa649e560e3211d773cc737f.jpg',
    aiHint: 'colorful vegetables plate meal',
    altText: 'A vibrant plate full of colorful vegetables, fruits, and legumes representing plant-forward eating.'
  },
  {
    title: 'Sustainable Transport',
    icon: Bike,
    description: 'Choose greener transportation options to reduce air pollution and carbon emissions.',
    actions: 'Walk, cycle, or use public transport. Consider carpooling or electric vehicles for longer distances.',
    impact: 'Reduces air pollution, lessens traffic congestion, improves public health, cuts greenhouse gases.',
    resourcesLink: 'https://www.epa.gov/transportation-air-pollution-and-climate-change/what-you-can-do-reduce-pollution-vehicles-and',
    imageUrl: 'https://i.pinimg.com/736x/8a/bd/f9/8abdf9728101d12a51c246f12ebad549.jpg',
    aiHint: 'cyclist riding city street',
    altText: 'A cyclist riding a bike on a city street, an example of sustainable transport.'
  },
  {
    title: 'Eco-Friendly Products',
    icon: ShoppingCart,
    description: 'Make conscious purchasing decisions by choosing products that are sustainably sourced, made, and packaged.',
    actions: 'Look for certifications (Fair Trade, Organic, FSC), choose minimal/plastic-free packaging, support sustainable brands, repair items instead of replacing.',
    impact: 'Reduces waste, supports ethical production, conserves natural resources, minimizes pollution.',
    resourcesLink: 'https://www.ethicalconsumer.org/',
    imageUrl: 'https://i.pinimg.com/736x/f6/bf/28/f6bf28fc5ca59538ad8d7698efa7d840.jpg',
    aiHint: 'eco friendly cleaning products',
    altText: 'A collection of eco-friendly cleaning products and household items with sustainable packaging.'
  },
];

const ancientPractices = [
  {
    title: 'Traditional Farming Methods',
    icon: Trees, 
    description: 'Age-old techniques like crop rotation, terracing, intercropping, and organic inputs that promote soil health and biodiversity.',
    modernEquivalent: 'Permaculture, Regenerative Agriculture',
    practicedWhere: 'Many indigenous communities globally, parts of Asia, Africa, Latin America.',
    communityLink: 'https://www.fao.org/traditional-agricultural-heritage/en/',
    imageUrl: 'https://i.pinimg.com/736x/18/ea/e1/18eae1ebb07d6d53e71491e64821c95e.jpg',
    aiHint: 'asian rice terraces landscape',
    altText: 'Lush green terraced rice paddies in Asia, showcasing traditional farming methods.'
  },
  {
    title: 'Sacred Groves & Forest Guardianship',
    icon: Shield, 
    description: 'Forest patches protected by local communities for spiritual, cultural, or ancestral reasons, acting as natural biodiversity reservoirs.',
    modernEquivalent: 'Community Conserved Areas, Indigenous Protected and Conserved Areas (IPCAs)',
    practicedWhere: 'India, parts of Africa, Southeast Asia, indigenous territories worldwide.',
    communityLink: 'https://www.communityconserve.org/',
    imageUrl: 'https://i.pinimg.com/736x/55/f5/d7/55f5d7c35df382cd0e3816e34ac72157.jpg',
    aiHint: 'ancient serene forest trees',
    altText: 'A serene ancient forest with tall trees, representing sacred groves and forest guardianship.'
  },
  {
    title: 'Water Harvesting Techniques',
    icon: Droplets,
    description: 'Ancient and traditional methods for collecting, storing, and managing rainwater and surface water in arid and semi-arid regions (e.g., stepwells, qanats, check dams).',
    modernEquivalent: 'Rainwater harvesting systems, micro-irrigation, watershed management',
    practicedWhere: 'India (stepwells), Middle East (qanats), many dryland farming communities.',
    communityLink: 'https://www.rainwaterharvesting.org/urban/traditional.htm',
    imageUrl: 'https://i.pinimg.com/736x/2a/1c/22/2a1c2228888ff8c534f11b01393ae62f.jpg',
    aiHint: 'indian stepwell architecture water',
    altText: 'An ancient Indian stepwell with intricate architecture for water harvesting.'
  },
  {
    title: 'Indigenous Knowledge Systems (IKS)',
    icon: BookOpen, 
    description: 'Holistic traditional ecological knowledge (TEK) passed down through generations, offering insights into sustainable resource management, local biodiversity, climate adaptation, and ethnomedicine.',
    modernEquivalent: 'Citizen science, participatory research, ethnobotany',
    practicedWhere: 'Indigenous communities globally, integral to their cultural identity and survival.',
    communityLink: 'https://www.unesco.org/en/indigenous-peoples/knowledge-systems',
    imageUrl: 'https://i.pinimg.com/736x/34/62/03/346203e521264460c3bc38690d4ee0e0.jpg',
    aiHint: 'indigenous elder teaching tradition',
    altText: 'An indigenous elder sharing traditional knowledge with a younger person in a natural setting.'
  },
];

const successStories = [
    {
        quote: "The greatest threat to our planet is the belief that someone else will save it.",
        author: "Robert Swan, OBE",
        type: "quote",
        sourceName: "Environmentalist & Explorer",
        sourceLink: "#",
    },
    {
        story: "Costa Rica reversed its deforestation and now generates over 98% of its electricity from renewable sources, proving that national commitment to nature can drive profound progress.",
        type: "story",
        sourceName: "National Geographic",
        sourceLink: "https://www.nationalgeographic.com/environment/article/costa-rica-renewable-energy-electricity",
    },
    {
        story: "The Green Belt Movement, founded by Wangari Maathai in Kenya, empowered women to plant over 51 million trees, transforming landscapes, livelihoods, and environmental consciousness.",
        type: "story",
        sourceName: "The Green Belt Movement",
        sourceLink: "https://www.greenbeltmovement.org/who-we-are/our-history",
    },
    {
        quote: "What you do makes a difference, and you have to decide what kind of difference you want to make.",
        author: "Dr. Jane Goodall",
        type: "quote",
        sourceName: "Primatologist & Anthropologist",
        sourceLink: "#",
    }
];

const ArticleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Live Sustainably, Impact Globally: Modern & Ancient Practices",
  "description": "Explore practical choices for sustainable living, blending modern eco-friendly practices with timeless ancient wisdom to shape a healthier Earth.",
  "image": `${siteURL}/og-sustainability.png`, // Main image for the article
  "author": {
    "@type": "Organization",
    "name": "Earth Insights",
    "url": siteURL
  },
  "publisher": {
    "@type": "Organization",
    "name": "Earth Insights",
    "logo": {
      "@type": "ImageObject",
      "url": `${siteURL}/logo.png` // Assuming you have a logo
    }
  },
  "datePublished": "2023-10-26", // Example date
  "dateModified": new Date().toISOString(),
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `${siteURL}/sustainability`
  },
  "keywords": "sustainable living, eco-friendly practices, modern sustainability, ancient wisdom, zero waste, energy efficiency, plant-based eating, indigenous knowledge"
};


export default function SustainabilityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ArticleSchema) }}
      />
      <main className="flex flex-1 flex-col gap-6 p-4 md:gap-8 md:p-8">
        {/* 1. Hero Section */}
        <section className="w-full flex items-center justify-center text-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24 rounded-lg">
          <div className="p-4">
              <Leaf className="h-16 w-16 md:h-20 md:w-20 text-primary mx-auto mb-6" />
              <h1 className="text-3xl md:text-5xl font-bold text-primary mb-3">
                Live Sustainably, Impact Globally
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Practical choices today shape a healthier Earth tomorrow. Discover how modern innovations and timeless wisdom can guide us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#modern-practices">
                    <Lightbulb className="mr-2 h-5 w-5" /> Start Sustainable Living
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#ancient-wisdom">
                      <BookOpen className="mr-2 h-5 w-5" /> Explore Ancient Practices
                  </Link>
                </Button>
              </div>
          </div>
        </section>

        {/* 2. What is Sustainability? */}
        <Card id="what-is-sustainability">
          <CardHeader className="flex flex-row items-start gap-4">
            <Globe className="h-10 w-10 text-primary mt-1" />
            <div>
              <CardTitle className="text-2xl"><h2>What is Sustainability?</h2></CardTitle>
              <CardDescription>
                Understanding the core principles for a balanced future.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-1 gap-6 items-center">
              <div>
                <p className="text-muted-foreground mb-4">
                  Sustainability focuses on meeting the needs of the present without compromising the ability of future generations to meet their own needs. It's built on three interconnected pillars:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <div className="flex items-center gap-2 p-3 border rounded-md bg-muted/30 flex-1">
                    <Leaf className="h-6 w-6 text-green-600" />
                    <div>
                      <h3 className="font-semibold">Environment</h3>
                      <p className="text-xs">Protecting natural resources & biodiversity.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 border rounded-md bg-muted/30 flex-1">
                    <Users className="h-6 w-6 text-blue-600" />
                    <div>
                      <h3 className="font-semibold">Society</h3>
                      <p className="text-xs">Ensuring social equity & well-being.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 border rounded-md bg-muted/30 flex-1">
                    <Zap className="h-6 w-6 text-yellow-600" />
                    <div>
                      <h3 className="font-semibold">Economy</h3>
                      <p className="text-xs">Promoting viable & inclusive growth.</p>
                    </div>
                  </div>
                </div>
                <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground text-sm">
                  "Sustainable development is development that meets the needs of the present without compromising the ability of future generations to meet their own needs." - Brundtland Commission, 1987
                </blockquote>
              </div>
              <div className="p-4 border rounded-lg bg-muted/30 text-center">
                  <Info className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Sustainability is about finding balance for long-term well-being across environmental, social, and economic spheres.</p>
              </div>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="sustainability-explanation">
                <AccordionTrigger>Toggle Explanation: Simple / Expert</AccordionTrigger>
                <AccordionContent className="space-y-2 text-sm">
                  <p><strong>Simple:</strong> Sustainability means living in a way that Earth's resources (like water, air, forests) can last for a very long time, so future kids and grandkids can enjoy them too. It's about being fair to people and the planet, ensuring everyone has what they need now and in the future.</p>
                  <p><strong>Expert:</strong> Sustainability integrates environmental stewardship, social equity, and economic viability. It involves complex systems thinking, lifecycle assessments, resource management, policy development, and stakeholder engagement to ensure long-term ecological balance and human prosperity within planetary boundaries. Key frameworks include the UN Sustainable Development Goals (SDGs), circular economy models, and planetary boundaries science.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* 3. Modern Sustainable Practices */}
        <Card id="modern-practices">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Lightbulb className="h-8 w-8 text-secondary" />
              <div>
                <CardTitle className="text-2xl"><h3>Modern Sustainable Practices</h3></CardTitle>
                <CardDescription>Actionable steps you can take today for a greener lifestyle.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modernPractices.map((practice) => {
                const IconComponent = practice.icon;
                return (
                  <Card key={practice.title} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40 w-full">
                      <Image src={practice.imageUrl} alt={practice.altText} fill objectFit="cover" data-ai-hint={practice.aiHint} />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 mb-1">
                        <IconComponent className="h-6 w-6 text-primary" />
                        <CardTitle className="text-lg">{practice.title}</CardTitle>
                      </div>
                      <CardDescription className="text-xs">{practice.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow text-xs space-y-3">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="actions">
                          <AccordionTrigger className="text-xs py-2 font-medium hover:text-primary">What You Can Do</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">{practice.actions}</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="impact">
                          <AccordionTrigger className="text-xs py-2 font-medium hover:text-primary">Impact</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">{practice.impact}</AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                    <CardFooter className="pt-3">
                      <Button variant="link" size="sm" asChild className="text-xs p-0 h-auto">
                        <Link href={practice.resourcesLink} target="_blank" rel="noopener noreferrer">Resources to Learn More <ExternalLink className="ml-1 h-3 w-3"/></Link>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* 4. Ancient Wisdom & Indigenous Knowledge */}
        <Card id="ancient-wisdom">
          <CardHeader>
            <div className="flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-accent" />
              <div>
                <CardTitle className="text-2xl"><h3>Ancient Wisdom & Indigenous Knowledge</h3></CardTitle>
                <CardDescription>Timeless sustainable thinking bridged with modern needs.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ancientPractices.map((practice) => {
                const IconComponent = practice.icon;
                return (
                  <Card key={practice.title} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40 w-full">
                      <Image src={practice.imageUrl} alt={practice.altText} fill objectFit="cover" data-ai-hint={practice.aiHint} />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 mb-1">
                        <IconComponent className="h-6 w-6 text-primary" />
                        <CardTitle className="text-lg">{practice.title}</CardTitle>
                      </div>
                      <CardDescription className="text-xs">{practice.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow text-xs space-y-3">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="modern-equivalent">
                          <AccordionTrigger className="text-xs py-2 font-medium hover:text-primary">Modern Connection</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">{practice.modernEquivalent}</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="practiced-where">
                          <AccordionTrigger className="text-xs py-2 font-medium hover:text-primary">Legacy & Practice</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                              {practice.practicedWhere}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                    <CardFooter className="pt-3">
                      <Button variant="link" size="sm" asChild className="text-xs p-0 h-auto">
                        <Link href={practice.communityLink} target="_blank" rel="noopener noreferrer">Learn from the Community <ExternalLink className="ml-1 h-3 w-3"/></Link>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* 5. Community Actions & Movements */}
        <Card id="community-actions">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <CardTitle className="text-2xl"><h3>Community Actions & Movements</h3></CardTitle>
                <CardDescription>Scaling sustainability from individuals to collective impact.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Individual actions are powerful, but community efforts amplify impact. Explore ways to get involved or initiate change locally.
            </p>
            <div className="p-4 border rounded-lg bg-muted/30 text-center">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">
                Search online for local initiatives like community gardens, repair cafes, zero-waste shops, and environmental advocacy groups in your area. Platforms like Meetup or local government websites can be good starting points.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button variant="outline" size="lg" className="h-auto py-3">
                  <Sprout className="mr-2 h-5 w-5"/> Start/Join a Community Garden
              </Button>
              <Button variant="outline" size="lg" className="h-auto py-3">
                  <Recycle className="mr-2 h-5 w-5"/> Participate in Local Cleanups
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 6. Tools & Resources Hub */}
        <Card id="tools-resources">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Settings2 className="h-8 w-8 text-secondary" />
              <div>
                <CardTitle className="text-2xl"><h3>Tools & Resources Hub</h3></CardTitle>
                <CardDescription>Equip yourself with actionable resources for a greener life.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Sustainable Living Guides", icon: FileText, type: "Guides", link: "https://www.epa.gov/environmental-topics/greener-living", aiHint: "checklist document", altText: "Icon for Sustainable Living Guides" },
                { title: "Eco Footprint Calculator", icon: Zap, type: "Tool", link: "https://www.footprintcalculator.org/", aiHint: "calculator user interface", altText: "Icon for Eco Footprint Calculator" },
                { title: "Top Books on Sustainability", icon: BookOpen, type: "List", link: "https://www.goodreads.com/list/show/18870.Best_Books_on_Sustainability", aiHint: "stack of books", altText: "Icon for Top Books on Sustainability" },
                { title: "Video Series: Live Greener", icon: Video, type: "Videos", link: "https://www.youtube.com/results?search_query=sustainable+living+tips", aiHint: "video play button", altText: "Icon for Video Series on Greener Living" }
              ].map(item => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="p-4 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                    <Icon className="h-10 w-10 text-primary mb-3" aria-hidden="true" />
                    <h4 className="font-semibold text-md mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mb-3">({item.type})</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={item.link} target="_blank" rel="noopener noreferrer" aria-label={`Access ${item.title} ${item.type}`}><span>Access Resource <ExternalLink className="ml-1 h-3 w-3"/></span></Link>
                    </Button>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* 7. Success Stories */}
          <Card id="success-stories">
              <CardHeader>
                  <div className="flex items-center gap-3">
                      <Award className="h-8 w-8 text-accent" />
                      <div>
                          <CardTitle className="text-2xl"><h3>Inspiring Success Stories</h3></CardTitle>
                          <CardDescription>Examples of impactful sustainable action and thought.</CardDescription>
                      </div>
                  </div>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                  {successStories.map((item, index) => (
                      <Card key={index} className="p-6 bg-muted/40 shadow-sm">
                          {item.type === "quote" ? (
                              <blockquote className="text-center">
                                  <Quote className="h-8 w-8 text-primary mx-auto mb-3 opacity-70" />
                                  <p className="text-lg italic text-foreground mb-3">"{item.quote}"</p>
                                  <footer className="text-sm text-muted-foreground">- {item.author}, <cite>{item.sourceName}</cite></footer>
                              </blockquote>
                          ) : (
                              <div>
                                  <p className="text-md text-foreground mb-2">{item.story}</p>
                                  {item.sourceLink && item.sourceLink !== "#" && (
                                      <Button variant="link" size="sm" asChild className="text-xs p-0 h-auto">
                                          <Link href={item.sourceLink} target="_blank" rel="noopener noreferrer">
                                              Learn more from {item.sourceName} <ExternalLink className="ml-1 h-3 w-3" />
                                          </Link>
                                      </Button>
                                  )}
                              </div>
                          )}
                      </Card>
                  ))}
              </CardContent>
          </Card>

        {/* 8. Get Involved / Final CTA */}
        <Card id="get-involved">
          <CardHeader>
            <div className="flex items-center gap-3">
              <HeartHandshake className="h-8 w-8 text-primary" />
              <div>
                <CardTitle className="text-2xl"><h3>Get Involved & Stay Connected</h3></CardTitle>
                <CardDescription>Your journey towards a sustainable lifestyle starts now.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 border rounded-lg bg-muted/30">
              <h4 className="font-semibold text-foreground mb-2 flex items-center"><Send className="mr-2 h-5 w-5 text-accent"/>Subscribe for Monthly Eco Wisdom</h4>
              <p className="text-sm text-muted-foreground mb-3">Get tips, news, and inspiration for sustainable living directly to your inbox.</p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input type="email" placeholder="Enter your email" className="flex-1 bg-background p-2 border rounded-md text-sm" aria-label="Email for newsletter"/>
                <Button type="submit" variant="default" size="sm">
                  Subscribe
                </Button>
              </form>
            </div>
            <div className="p-4 border rounded-lg bg-muted/30">
              <h4 className="font-semibold text-foreground mb-2 flex items-center"><CalendarDays className="mr-2 h-5 w-5 text-accent"/>Find Events & Workshops</h4>
              <p className="text-sm text-muted-foreground mb-3">Discover local and global events related to sustainability, climate action, and green living.</p>
              <Button variant="outline" asChild>
                  <Link href="https://www.eventbrite.com/d/online/sustainability-workshops/" target="_blank" rel="noopener noreferrer">
                      Find Events <ExternalLink className="ml-2 h-4 w-4"/>
                  </Link>
              </Button>
            </div>
            <div className="p-4 border rounded-lg bg-muted/30 text-center">
              <Share2 className="h-6 w-6 text-accent mx-auto mb-2"/>
              <h4 className="font-semibold text-foreground mb-1">Spread the Word!</h4>
              <p className="text-sm text-muted-foreground mb-3">Which sustainable practice inspired you most? Share this page using #EarthInsights.</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
