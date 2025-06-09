
'use client';

import EcosystemCard from '@/components/ecosystems/ecosystem-card';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sprout, Globe, LifeBuoy, HeartHandshake, Users, GitBranch, HelpCircle, Droplets, Mountain, Trees, Waves as WavesIcon, LandPlot, Sun, ThermometerSun, Zap, ShieldAlert, CloudCog, Recycle, Filter, Bone, Search, PackageOpen, MapPin, Shield, Info, Share2 } from 'lucide-react';
import Link from 'next/link';

// Metadata is handled by src/app/ecosystems/layout.tsx

const ecosystemsData = [
  {
    name: 'Forests',
    type: 'Forests',
    heroImage: 'https://placehold.co/1200x400.png',
    heroAiHint: 'dense forest canopy',
    shortDescription: 'Vital ecosystems covering 31% of Earth\'s land, crucial for biodiversity and climate regulation.',
    imageUrl: 'https://i.pinimg.com/736x/39/88/cd/3988cdeca4f5939ca14eec43661396c1.jpg',
    aiHint: 'lush forest path sunlight',
    altText: 'Sunlight filtering through a lush green forest path.',
    quickFacts: {
      biodiversity: 'Extremely High (e.g., Amazon rainforest hosts millions of species)',
      climate: 'Varies: Tropical, Temperate, Boreal',
      area: 'Approx. 4.06 billion hectares globally (FAO 2020)',
    },
    keyChallenges: ['Deforestation (agriculture, logging)', 'Wildfires (climate change induced)', 'Habitat Fragmentation', 'Invasive Species'],
    conservationStatus: 'Varies; many old-growth forests critically endangered.',
    focusTopic: 'Reforestation, Sustainable Forestry & Indigenous Land Rights',
    details: {
      introduction: "Forests are complex, dynamic ecosystems dominated by trees, playing a pivotal role in Earth's carbon cycle, water regulation, and as biodiversity hotspots.",
      importance: [
        "Produce a significant portion of the Earth's oxygen.",
        "Act as major carbon sinks, mitigating climate change.",
        "Regulate global and regional weather patterns and water cycles.",
        "Home to over 80% of terrestrial biodiversity.",
        "Provide essential resources: timber, food, medicinal plants, and livelihoods for millions."
      ],
      threatsExplained: "Rampant deforestation for agriculture (palm oil, soy, cattle), unsustainable logging, urban expansion, and mining are primary drivers of forest loss. Climate change exacerbates these threats through increased frequency and intensity of wildfires, droughts, and pest outbreaks.",
      conservationEfforts: "Global efforts include establishing protected areas (National Parks, Reserves), promoting sustainable forest management certifications (e.g., FSC), reforestation and afforestation projects, combating illegal logging, and empowering local and indigenous communities in forest stewardship."
    }
  },
  {
    name: 'Oceans',
    type: 'Oceans',
    heroImage: 'https://placehold.co/1200x400.png',
    heroAiHint: 'ocean waves aerial',
    shortDescription: 'Covering over 70% of the planet, oceans drive weather, regulate temperature, and support diverse marine life.',
    imageUrl: 'https://i.pinimg.com/736x/a7/c3/93/a7c393000144261bd93d4160db288ecc.jpg',
    aiHint: 'vibrant coral reef fish',
    altText: 'Colorful fish swimming among vibrant coral reefs in the ocean.',
    quickFacts: {
      biodiversity: 'Vast (from plankton to whales), much still undiscovered',
      climate: 'Major global climate regulator',
      area: 'Approx. 361 million sq km (71% of Earth\'s surface)',
    },
    keyChallenges: ['Plastic Pollution', 'Overfishing', 'Ocean Acidification', 'Coral Bleaching', 'Dead Zones'],
    conservationStatus: 'Many marine ecosystems are severely threatened.',
    focusTopic: 'Marine Protected Areas (MPAs) & Sustainable Fisheries',
    details: {
      introduction: "Oceans are the planet's largest ecosystem, vital for regulating climate, producing oxygen, and supporting a vast array of life from microscopic plankton to the largest whales.",
      importance: [
        "Generate about 50% of the oxygen we breathe (primarily by phytoplankton).",
        "Absorb about 25% of anthropogenic CO2 emissions.",
        "Drive weather systems and ocean currents that distribute heat globally.",
        "Support immense biodiversity and provide food for billions.",
        "Source of livelihoods through fishing, tourism, and shipping."
      ],
      threatsExplained: "Plastic pollution chokes marine life and enters the food chain. Overfishing depletes fish stocks and damages habitats. Ocean acidification, caused by CO2 absorption, harms shell-forming organisms. Rising sea temperatures lead to widespread coral bleaching and disrupt marine ecosystems.",
      conservationEfforts: "Includes establishing Marine Protected Areas (MPAs), implementing sustainable fishing quotas and practices, reducing plastic waste through international agreements and innovation, combating illegal fishing, and research into coral reef restoration and resilience."
    }
  },
  {
    name: 'Polar Regions',
    type: 'Polar',
    heroImage: 'https://placehold.co/1200x400.png',
    heroAiHint: 'arctic aurora borealis',
    shortDescription: 'Arctic and Antarctic regions characterized by ice, snow, and unique wildlife adapted to extreme cold.',
    imageUrl: 'https://i.pinimg.com/736x/82/08/f4/8208f4d66c71ce6a7206e503d51b693a.jpg',
    aiHint: 'polar bear ice landscape',
    altText: 'Polar bear standing on an ice floe in a vast icy landscape.',
    quickFacts: {
      biodiversity: 'Specialized (e.g., Polar Bears, Penguins, Seals, Krill)',
      climate: 'Extreme Cold; critical for global climate regulation (albedo effect)',
      area: 'Arctic: ~14 million sq km; Antarctic: ~14 million sq km (continent)',
    },
    keyChallenges: ['Rapid Ice Melt (sea ice & glaciers)', 'Sea Level Rise Contribution', 'Permafrost Thaw', 'Threats to Specialized Wildlife', 'Geopolitical Resource Competition'],
    conservationStatus: 'Highly vulnerable to climate change; significant habitat loss.',
    focusTopic: 'Climate Change Impacts & Arctic/Antarctic Treaty Systems',
    details: {
      introduction: "The Polar Regions, encompassing the Arctic (North Pole) and Antarctic (South Pole), are Earth's coldest and iciest ecosystems. They are critical for regulating global climate and home to unique, highly adapted wildlife.",
      importance: [
        "Reflect solar radiation (albedo effect), helping to cool the planet.",
        "Store vast amounts of fresh water in ice sheets and glaciers.",
        "Influence ocean currents and atmospheric circulation.",
        "Support unique food webs dependent on ice (e.g., krill supporting whales, seals, penguins).",
        "Sites for critical scientific research (climate, astronomy, geology)."
      ],
      threatsExplained: "Climate change is causing rapid warming in polar regions, leading to accelerated melting of sea ice, glaciers, and ice sheets, contributing significantly to sea-level rise. Permafrost thaw releases potent greenhouse gases. These changes severely threaten wildlife dependent on ice for hunting, breeding, and resting. Increased human activity (shipping, resource extraction) also poses risks.",
      conservationEfforts: "International agreements like the Antarctic Treaty System aim to preserve Antarctica for peace and science. Efforts focus on mitigating global greenhouse gas emissions, monitoring ice melt and wildlife populations, establishing protected areas (e.g., Ross Sea MPA), and regulating human activities. Research into adaptation strategies for polar species is also crucial."
    }
  },
  {
    name: 'Grasslands',
    type: 'Grasslands',
    heroImage: 'https://placehold.co/1200x400.png',
    heroAiHint: 'savanna plain sunset',
    shortDescription: 'Dominated by grasses, these ecosystems support large herbivores and are vital for agriculture.',
    imageUrl: 'https://i.pinimg.com/736x/85/65/a1/8565a1f20b280b5400a8e6bb75c52a82.jpg',
    aiHint: 'bison on prairie field',
    altText: 'Herd of bison grazing on a vast prairie under a blue sky.',
    quickFacts: {
      biodiversity: 'Moderate to High (grazing mammals, birds, insects)',
      climate: 'Temperate or Tropical; seasonal rainfall',
      area: 'Historically ~40% of land, much converted to agriculture',
    },
    keyChallenges: ['Conversion to Agriculture', 'Overgrazing', 'Desertification', 'Fire Suppression/Alteration', 'Invasive Species'],
    conservationStatus: 'Among the most endangered ecosystems globally.',
    focusTopic: 'Sustainable Grazing & Prairie Restoration',
    details: {
      introduction: "Grasslands, including savannas, prairies, and steppes, are ecosystems dominated by grasses with few trees or shrubs. They are crucial for biodiversity, soil health, and support many grazing animals.",
      importance: [
        "Support large populations of herbivores and their predators.",
        "Store significant amounts of carbon in their soils.",
        "Are vital for agriculture and livestock grazing in many parts ofhe world.",
        "Contribute to water infiltration and aquifer recharge.",
        "Host unique plant and animal species adapted to open environments."
      ],
      threatsExplained: "Vast areas of grasslands have been converted to croplands or urban areas. Overgrazing by livestock can lead to land degradation and desertification. Altered fire regimes (either suppression or too frequent human-set fires) can change species composition. Invasive plant species can outcompete native grasses.",
      conservationEfforts: "Focus on promoting sustainable grazing practices, restoring native prairie ecosystems, creating protected grassland reserves, controlling invasive species, and reintroducing natural fire regimes where appropriate. Conservation easements and partnerships with private landowners are also critical."
    }
  },
   {
    name: 'Wetlands',
    type: 'Wetlands',
    heroImage: 'https://placehold.co/1200x400.png',
    heroAiHint: 'marsh sunrise mist',
    shortDescription: 'Areas saturated with water, like marshes and swamps, providing flood control and rich habitats.',
    imageUrl: 'https://i.pinimg.com/736x/d6/b9/aa/d6b9aa1a1f9713b61ae8b1e249feab69.jpg',
    aiHint: 'mangrove forest roots water',
    altText: 'Intricate root system of a mangrove forest at the water\'s edge.',
    quickFacts: {
      biodiversity: 'Very High (critical for birds, fish, amphibians)',
      climate: 'Varies; found in diverse climatic zones',
      area: 'Declining rapidly; cover ~6% of Earth\'s land surface',
    },
    keyChallenges: ['Drainage for Agriculture/Development', 'Pollution (run-off)', 'Water Diversion', 'Invasive Species', 'Sea Level Rise (coastal wetlands)'],
    conservationStatus: 'Critically threatened worldwide; high rates of loss.',
    focusTopic: 'Ramsar Convention & Wetland Restoration',
    details: {
      introduction: "Wetlands are areas where water covers the soil, or is present either at or near the surface of the soil all year or for varying periods of time during the year, including marshes, swamps, bogs, and fens. They are among the world's most productive ecosystems.",
      importance: [
        "Act as natural sponges, absorbing floodwaters and reducing flood damage.",
        "Filter pollutants and improve water quality.",
        "Provide critical habitats for a wide array of species, especially migratory birds.",
        "Support fisheries and provide resources like peat and reeds.",
        "Sequester significant amounts of carbon (especially peatlands)."
      ],
      threatsExplained: "Wetlands are often drained or filled for agriculture, urban development, and infrastructure projects. Pollution from agricultural runoff and industrial discharge degrades water quality. Water diversion for irrigation or other uses can dry out wetlands. Invasive species can disrupt native communities. Coastal wetlands are threatened by sea-level rise.",
      conservationEfforts: "The Ramsar Convention on Wetlands is an international treaty for their conservation and wise use. Efforts include wetland restoration projects, creating buffer zones to reduce pollution, managing water resources sustainably, controlling invasive species, and public awareness campaigns about their value."
    }
  },
   {
    name: 'Deserts',
    type: 'Deserts',
    heroImage: 'https://placehold.co/1200x400.png',
    heroAiHint: 'desert dunes sunset colors',
    shortDescription: 'Arid regions with scarce rainfall, home to specialized plants and animals adapted to harsh conditions.',
    imageUrl: 'https://i.pinimg.com/736x/a1/05/5c/a1055ca0b3e05c5d66adc6369524c7d1.jpg',
    aiHint: 'desert cactus blooming flower',
    altText: 'Desert cactus with a vibrant blooming flower under a clear sky.',
    quickFacts: {
      biodiversity: 'Specialized and surprisingly diverse (reptiles, insects, resilient plants)',
      climate: 'Arid to Hyper-Arid; extreme temperature fluctuations',
      area: 'Cover ~20% of Earth\'s land surface',
    },
    keyChallenges: ['Desertification (expansion due to land degradation)', 'Water Scarcity (over-extraction of groundwater)', 'Habitat Degradation (off-road vehicles, development)', 'Climate Change (increased aridity)'],
    conservationStatus: 'Fragile; slow recovery rates from disturbances.',
    focusTopic: 'Combating Desertification & Sustainable Water Management',
    details: {
      introduction: "Deserts are arid or hyper-arid ecoregions that receive very little precipitation. Despite harsh conditions, they support a variety of specialized plants and animals uniquely adapted to survive with minimal water and extreme temperatures.",
      importance: [
        "Home to unique species found nowhere else.",
        "Contain valuable mineral resources.",
        "Important for scientific research into adaptation and extremophiles.",
        "Offer opportunities for renewable energy (solar).",
        "Cultural significance for many indigenous communities."
      ],
      threatsExplained: "Desertification, the process by which fertile land becomes desert, typically as a result of drought, deforestation, or inappropriate agriculture, is a major threat, often impacting areas adjacent to existing deserts. Over-extraction of limited groundwater resources for agriculture and urban use is unsustainable. Off-road vehicle use can damage fragile desert soils and vegetation. Climate change may increase aridity and expand desert areas.",
      conservationEfforts: "Focus on combating desertification through sustainable land management practices, reforestation in semi-arid zones, efficient water use and harvesting techniques, protecting sensitive desert habitats and species, and regulating development and tourism. Promoting drought-resistant crops and alternative livelihoods can also help."
    }
  }
];

const globalThreatsData = [
  {
    title: 'Climate Change',
    icon: ThermometerSun,
    description: 'Driven by greenhouse gas emissions, causing rising temperatures, sea-level rise, and extreme weather, impacting all ecosystems.',
  },
  {
    title: 'Deforestation & Habitat Loss',
    icon: Trees,
    description: 'Clearing forests for agriculture, urbanization, and logging, leading to biodiversity loss and reduced carbon sequestration.',
  },
  {
    title: 'Pollution',
    icon: Recycle,
    description: 'Contamination of air, water, and soil by plastics, chemicals, and industrial waste, harming wildlife and human health.',
  },
  {
    title: 'Biodiversity Loss',
    icon: Bone,
    description: 'The decline in the variety of life forms within an ecosystem, often driven by habitat destruction, climate change, and overexploitation.',
  },
];


export default function EcosystemsPage() {
  return (
    <main className="flex flex-1 flex-col gap-6 p-4 md:gap-8 md:p-8">
      {/* 1. Hero Section */}
      <section className="w-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24 rounded-lg">
        <Globe className="h-16 w-16 md:h-20 md:w-20 text-primary mx-auto mb-6" />
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-3">Explore Earth's Ecosystems</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Understand their beauty, balance, and the urgency to protect them.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="#ecosystem-gallery">
              <PackageOpen className="mr-2 h-5 w-5" /> Browse Ecosystems
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
             <Link href="#what-is-ecosystem">
                <HelpCircle className="mr-2 h-5 w-5" /> What Is an Ecosystem?
             </Link>
          </Button>
        </div>
      </section>

      {/* 2. What Is an Ecosystem? */}
      <Card id="what-is-ecosystem">
         <CardHeader className="flex flex-row items-start gap-4">
           <GitBranch className="h-10 w-10 text-primary mt-1" />
           <div>
             <CardTitle className="text-2xl"><h2>What Is an Ecosystem?</h2></CardTitle>
             <CardDescription>
               A community of living organisms (plants, animals, microbes) interacting with their physical environment (sunlight, water, soil, air).
             </CardDescription>
           </div>
         </CardHeader>
          <CardContent className="grid md:grid-cols-1 gap-6 items-center">
            <div>
                <p className="text-muted-foreground mb-4">
                  Ecosystems can be vast, like a desert or an ocean, or small, like a pond or a fallen log. Each component plays a role, from the smallest bacteria breaking down organic matter to the largest predators maintaining population balance. They provide essential services like clean air and water, pollination, and climate regulation.
                </p>
                <p className="text-muted-foreground">
                  For example, in a coral reef, the corals provide structure, algae provide food through photosynthesis, fish graze on algae and are prey for larger fish, and the water provides nutrients and a medium for life.
                </p>
            </div>
            <div className="p-4 border rounded-lg bg-muted/30 text-center">
                <Info className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Ecosystems are intricate networks of life and environment in balance.</p>
            </div>
          </CardContent>
       </Card>

      {/* 3. The Web of Life: Interdependence */}
       <Card>
         <CardHeader className="flex flex-row items-start gap-4">
            <Globe className="h-10 w-10 text-secondary mt-1" />
            <div>
                <CardTitle className="text-2xl"><h3>The Web of Life: Interdependence</h3></CardTitle>
                <CardDescription>No ecosystem exists in isolation; they are all connected, influencing global health.</CardDescription>
            </div>
         </CardHeader>
          <CardContent className="space-y-4">
             <p className="text-muted-foreground">
               Damage to one ecosystem can have cascading effects across the globe. Understanding these connections highlights the need for holistic conservation efforts.
             </p>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg bg-background shadow">
                    <h4 className="font-semibold text-lg mb-2 text-primary flex items-center"><Trees className="mr-2 h-5 w-5"/>Forests & Rainfall</h4>
                    <p className="text-sm text-muted-foreground">Tropical forests influence regional and even global rainfall patterns, crucial for agriculture far beyond their borders.</p>
                </div>
                <div className="p-4 border rounded-lg bg-background shadow">
                    <h4 className="font-semibold text-lg mb-2 text-secondary flex items-center"><WavesIcon className="mr-2 h-5 w-5"/>Oceans & Climate</h4>
                    <p className="text-sm text-muted-foreground">Ocean currents like the Gulf Stream regulate temperatures, making distant lands habitable. Oceans absorb vast amounts of CO2.</p>
                </div>
                 <div className="p-4 border rounded-lg bg-background shadow">
                    <h4 className="font-semibold text-lg mb-2 text-accent flex items-center"><Droplets className="mr-2 h-5 w-5"/>Wetlands & Water Quality</h4>
                    <p className="text-sm text-muted-foreground">Wetlands act as natural filters, purifying water that flows into rivers and seas, benefiting downstream ecosystems and human water sources.</p>
                </div>
             </div>
             <div className="mt-4 p-4 border rounded-lg bg-muted/30 text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">The health of local ecosystems contributes to the overall well-being of our planet.</p>
             </div>
          </CardContent>
       </Card>

      {/* 4. Ecosystem Gallery */}
      <Card id="ecosystem-gallery">
        <CardHeader>
            <CardTitle className="text-2xl"><h2>Ecosystem Gallery</h2></CardTitle>
            <CardDescription>Dive into diverse ecosystems from around the world. Explore their unique characteristics, inhabitants, and the challenges they face.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {ecosystemsData.map((eco) => (
                    <EcosystemCard
                      key={eco.name}
                      name={eco.name}
                      shortDescription={eco.shortDescription}
                      imageUrl={eco.imageUrl}
                      aiHint={eco.aiHint}
                      altText={eco.altText || `Image of ${eco.name} ecosystem`}
                      quickFacts={eco.quickFacts}
                      keyChallenges={eco.keyChallenges}
                      conservationStatus={eco.conservationStatus}
                      focusTopic={eco.focusTopic}
                      details={eco.details}
                      type={eco.type}
                    />
                  ))}
            </div>
        </CardContent>
      </Card>
      
      {/* 6. Global Threats Overview */}
      <Card>
        <CardHeader className="flex flex-row items-start gap-4">
            <ShieldAlert className="h-10 w-10 text-destructive mt-1" />
            <div>
                <CardTitle className="text-2xl"><h3>Global Threats to Ecosystems</h3></CardTitle>
                <CardDescription>Understanding the major cross-cutting threats impacting ecosystems worldwide.</CardDescription>
            </div>
        </CardHeader>
        <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {globalThreatsData.map((threat) => {
                    const IconComponent = threat.icon;
                    return (
                        <Card key={threat.title} className="flex flex-col p-4 items-center text-center hover:shadow-lg transition-shadow">
                            {IconComponent && <IconComponent className="h-10 w-10 text-destructive mb-3 mt-2" />}
                            <CardTitle className="text-lg mb-2">{threat.title}</CardTitle>
                            <p className="text-sm text-muted-foreground flex-grow">{threat.description}</p>
                        </Card>
                    );
                })}
            </div>
             <p className="text-xs text-muted-foreground text-center mt-6">Explore specific <Link href="/challenges" className="text-primary hover:underline">Environmental Challenges</Link> for more detailed information on these threats.</p>
        </CardContent>
      </Card>

      {/* 7. Take Action: Get Involved */}
        <Card>
            <CardHeader className="flex flex-row items-start gap-4">
                <HeartHandshake className="h-10 w-10 text-accent mt-1"/>
                <div>
                    <CardTitle className="text-2xl"><h3>Take Action: Get Involved</h3></CardTitle>
                    <CardDescription>Empower yourself to make a difference. Every action counts towards protecting our planet's precious ecosystems.</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <Button variant="outline" size="lg" asChild className="h-auto py-4 flex flex-col items-center text-center">
                        <Link href="https://www.worldwildlife.org/species" target="_blank" rel="noopener noreferrer">
                            <Users className="mb-2 h-8 w-8"/>
                            <span className="font-semibold">Adopt a Species</span>
                            <span className="text-xs text-muted-foreground mt-1">Support wildlife conservation programs.</span>
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild className="h-auto py-4 flex flex-col items-center text-center">
                        <Link href="https://www.trilliontreecampaign.org/" target="_blank" rel="noopener noreferrer">
                            <Sprout className="mb-2 h-8 w-8"/>
                            <span className="font-semibold">Fund a Tree Project</span>
                            <span className="text-xs text-muted-foreground mt-1">Contribute to reforestation efforts globally.</span>
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild className="h-auto py-4 flex flex-col items-center text-center">
                        <Link href="https://oceanconservancy.org/action/" target="_blank" rel="noopener noreferrer">
                            <Zap className="mb-2 h-8 w-8"/>
                            <span className="font-semibold">Join Local Cleanups</span>
                            <span className="text-xs text-muted-foreground mt-1">Find and participate in initiatives near you.</span>
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>

        {/* 8. Further Exploration */}
        <Card>
            <CardHeader className="flex flex-row items-start gap-4">
                <Search className="h-8 w-8 text-primary mt-1" />
                <div>
                    <CardTitle className="text-xl"><h3>Continue Your Exploration</h3></CardTitle>
                    <CardDescription>Deepen your understanding and engagement with ecosystem conservation.</CardDescription>
                </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-4">
                <p>
                  Detailed information for each ecosystem can be found by expanding the 'Detailed Overview' and 'Conservation Insights' sections within their respective cards in the <Link href="#ecosystem-gallery" className="underline hover:text-primary">Ecosystem Gallery</Link>.
                </p>
                <p>
                  Consider exploring related topics on our platform, such as <Link href="/challenges" className="underline hover:text-primary">Environmental Challenges</Link> which often directly impact these ecosystems, or <Link href="/sustainability" className="underline hover:text-primary">Sustainable Practices</Link> that can help mitigate threats. Our <Link href="/resources" className="underline hover:text-primary">Resources</Link> page also offers links to external organizations and data.
                </p>
                <div className="flex items-center gap-2 mt-6">
                   <Share2 className="h-5 w-5 text-accent"/>
                   <span>Share this page or follow us via <Link href="/contact" className="underline hover:text-primary">social media links</Link> using #EarthInsights to spread awareness.</span>
                </div>
            </CardContent>
        </Card>
    </main>
  );
}
