
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ContentCard from '@/components/content/content-card';

const modernPractices = [
  {
    title: 'Circular Economy Principles',
    description: 'Designing out waste and pollution, keeping products and materials in use.',
    imageUrl: 'https://placehold.co/400x200.png',
    aiHint: 'recycling loop graphic',
    type: 'Concept',
    link: '#',
  },
  {
    title: 'Minimalist Living',
    description: 'Intentionally living with only the things you truly need.',
    imageUrl: 'https://placehold.co/400x200.png',
    aiHint: 'simple clean room',
    type: 'Lifestyle',
    link: '#',
  },
  {
    title: 'Community Supported Agriculture (CSA)',
    description: 'Connecting consumers directly with local farms for fresh, seasonal produce.',
    imageUrl: 'https://placehold.co/400x200.png',
    aiHint: 'vegetable box farm',
    type: 'Model',
    link: '#',
  },
   {
    title: 'Urban Gardening & Green Spaces',
    description: 'Cultivating plants in cities for food, biodiversity, and well-being.',
    imageUrl: 'https://placehold.co/400x200.png',
    aiHint: 'rooftop garden city',
    type: 'Practice',
    link: '#',
  },
];

const ancientPractices = [
  {
    title: 'Traditional Farming Methods',
    description: 'Age-old techniques like crop rotation and terracing that promote soil health.',
    imageUrl: 'https://placehold.co/400x200.png',
    aiHint: 'rice terraces',
    type: 'Practice',
    link: '#',
  },
  {
    title: 'Sacred Groves',
    description: 'Forest patches protected by local communities for religious and cultural reasons, preserving biodiversity.',
    imageUrl: 'https://placehold.co/400x200.png',
    aiHint: 'ancient tree',
    type: 'Conservation',
    link: '#',
  },
  {
    title: 'Indigenous Knowledge Systems',
    description: 'Traditional ecological knowledge passed down through generations, offering sustainable solutions.',
    imageUrl: 'https://placehold.co/400x200.png',
    aiHint: 'tribal elder',
    type: 'Knowledge',
    link: '#',
  },
    {
    title: 'Water Harvesting',
    description: 'Ancient techniques for collecting and storing rainwater in arid and semi-arid regions.',
    imageUrl: 'https://placehold.co/400x200.png',
    aiHint: 'stepwell india',
    type: 'Technique',
    link: '#',
  },
];

export default function SustainabilityTabs() {
  return (
    <Tabs defaultValue="modern-practices">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="modern-practices">Modern Practices</TabsTrigger>
        <TabsTrigger value="ancient-practices">Ancient Wisdom</TabsTrigger>
      </TabsList>
      <TabsContent value="modern-practices">
         <p className="text-muted-foreground mb-4 mt-2">
           Contemporary approaches and lifestyles focused on reducing environmental impact.
         </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {modernPractices.map((item, index) => (
            <ContentCard
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              aiHint={item.aiHint}
              type={item.type}
              link={item.link}
            />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="ancient-practices">
        <p className="text-muted-foreground mb-4 mt-2">
           Timeless wisdom from past civilizations on living in balance with nature.
         </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {ancientPractices.map((item, index) => (
            <ContentCard
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              aiHint={item.aiHint}
              type={item.type}
              link={item.link}
            />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
