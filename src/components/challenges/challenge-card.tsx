
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Flame, Waves, ThermometerSun, CloudRainWind, Trash2, AlertCircle } from 'lucide-react'; // Import used icons
import type { LucideProps } from 'lucide-react';

// Define a type for the icon mapping
type IconMap = {
  [key: string]: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
};

// Map icon names (strings) to actual Lucide components
const iconComponents: IconMap = {
  Flame: Flame,
  Waves: Waves,
  ThermometerSun: ThermometerSun,
  CloudRainWind: CloudRainWind,
  Trash2: Trash2,
  AlertCircle: AlertCircle, // Default/fallback icon
};


interface ChallengeCardProps {
  title: string;
  icon: string; // Icon name as string
  description: string;
  causes: string;
  effects: string;
  impact: string;
  caseStudy: string;
  imageUrl: string;
  aiHint: string;
}

export default function ChallengeCard({
  title,
  icon,
  description,
  causes,
  effects,
  impact,
  caseStudy,
  imageUrl,
  aiHint,
}: ChallengeCardProps) {
  // Dynamically select the icon component based on the string name, fallback to AlertCircle
  const IconComponent = iconComponents[icon] || iconComponents['AlertCircle'];

  return (
    <Card className="flex flex-col overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-40 w-full">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          data-ai-hint={aiHint}
        />
      </div>
      <CardHeader className="flex flex-row items-start gap-3 pb-4">
        <IconComponent className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow pt-0">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="details">
            <AccordionTrigger className="text-sm pt-0">View Details</AccordionTrigger>
            <AccordionContent className="text-xs space-y-3">
              <div>
                <h4 className="font-semibold mb-1 text-foreground">Causes:</h4>
                <p className="text-muted-foreground">{causes}</p>
              </div>
               <div>
                 <h4 className="font-semibold mb-1 text-foreground">Effects:</h4>
                 <p className="text-muted-foreground">{effects}</p>
               </div>
              <div>
                <h4 className="font-semibold mb-1 text-foreground">Impact:</h4>
                <p className="text-muted-foreground">{impact}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="bg-muted/30 p-3 text-xs text-muted-foreground">
        <span className="font-medium mr-1">Case Study Note:</span> {caseStudy}
      </CardFooter>
    </Card>
  );
}
