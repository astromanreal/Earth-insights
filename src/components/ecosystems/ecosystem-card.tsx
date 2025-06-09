
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ShieldCheck, Leaf, AlertTriangle, Info, Globe, CheckCircle, ListTree, Target } from 'lucide-react';

interface QuickFacts {
  biodiversity: string;
  climate: string;
  area: string;
}

interface EcosystemDetails {
    introduction: string;
    importance: string[];
    threatsExplained: string;
    conservationEfforts: string;
}

interface EcosystemCardProps {
  name: string;
  type: string; // For badge or other display
  shortDescription: string;
  imageUrl: string;
  aiHint: string;
  quickFacts: QuickFacts;
  keyChallenges: string[];
  conservationStatus: string;
  focusTopic: string;
  details: EcosystemDetails;
}

export default function EcosystemCard({
  name,
  type,
  shortDescription,
  imageUrl,
  aiHint,
  quickFacts,
  keyChallenges,
  conservationStatus,
  focusTopic,
  details
}: EcosystemCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <div className="relative h-52 w-full">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          data-ai-hint={aiHint}
        />
        <Badge variant="secondary" className="absolute top-2 right-2 capitalize">{type}</Badge>
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl text-primary">{name}</CardTitle>
        <CardDescription className="text-sm">{shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pt-0 text-xs space-y-3">
        <div>
            <h4 className="font-semibold mb-1 text-foreground flex items-center"><Info className="mr-2 h-4 w-4 text-secondary"/>Quick Facts:</h4>
            <ul className="list-disc pl-5 space-y-0.5 text-muted-foreground">
                <li><strong>Biodiversity:</strong> {quickFacts.biodiversity}</li>
                <li><strong>Climate:</strong> {quickFacts.climate}</li>
                <li><strong>Area:</strong> {quickFacts.area}</li>
            </ul>
        </div>
         <div>
            <h4 className="font-semibold mb-1 text-foreground flex items-center"><AlertTriangle className="mr-2 h-4 w-4 text-destructive"/>Key Challenges:</h4>
            <p className="text-muted-foreground">{keyChallenges.join(', ')}.</p>
        </div>


        <Accordion type="single" collapsible className="w-full text-xs">
          <AccordionItem value="details-overview">
            <AccordionTrigger className="text-xs pt-1 font-medium hover:text-primary">Detailed Overview</AccordionTrigger>
            <AccordionContent className="space-y-3 text-muted-foreground">
                <p><strong className="text-foreground">Introduction:</strong> {details.introduction}</p>
                <div>
                    <h5 className="font-semibold mb-1 text-foreground flex items-center"><ListTree className="mr-2 h-4 w-4 text-green-600"/>Importance:</h5>
                    <ul className="list-disc pl-5 space-y-0.5">
                        {details.importance.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
                 <div>
                    <h5 className="font-semibold mb-1 text-foreground flex items-center"><AlertTriangle className="mr-2 h-4 w-4 text-orange-500"/>Threats Explained:</h5>
                    <p>{details.threatsExplained}</p>
                </div>

            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="conservation">
            <AccordionTrigger className="text-xs pt-1 font-medium hover:text-primary">Conservation Insights</AccordionTrigger>
            <AccordionContent className="space-y-3 text-muted-foreground">
                 <div>
                    <h5 className="font-semibold mb-1 text-foreground flex items-center"><ShieldCheck className="mr-2 h-4 w-4 text-accent"/>Conservation Status:</h5>
                    <p>{conservationStatus}</p>
                </div>
                 <div>
                    <h5 className="font-semibold mb-1 text-foreground flex items-center"><Target className="mr-2 h-4 w-4 text-blue-500"/>Focus Topic:</h5>
                    <p>{focusTopic}</p>
                </div>
                <div>
                    <h5 className="font-semibold mb-1 text-foreground flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-teal-500"/>Conservation Efforts:</h5>
                    <p>{details.conservationEfforts}</p>
                </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </CardContent>
       <CardFooter className="bg-muted/20 p-3 mt-auto">
            <p className="text-[11px] text-muted-foreground italic">Learn more through dedicated resources and research.</p>
       </CardFooter>
    </Card>
  );
}
