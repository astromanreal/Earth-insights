import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react'; // Changed to ExternalLink for clarity

interface ContentCardProps {
  title: string;
  description: string;
  imageUrl: string;
  aiHint: string;
  type: 'Article' | 'Video' | 'Infographic' | string; // Allow other types
  link: string;
}

export default function ContentCard({ title, description, imageUrl, aiHint, type, link }: ContentCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full"> {/* Added h-full for consistent height in grids */}
      <div className="relative h-40 w-full">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          data-ai-hint={aiHint}
        />
         <Badge variant="secondary" className="absolute top-2 right-2">{type}</Badge>
      </div>
      <CardHeader className="pb-3"> {/* Adjusted padding */}
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow pt-0"> {/* Ensure content area can grow */}
        <CardDescription className="text-sm">{description}</CardDescription> {/* Removed line-clamp-2 */}
      </CardContent>
      <CardFooter className="mt-auto pt-4"> {/* Ensure footer is at the bottom */}
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href={link} target="_blank" rel="noopener noreferrer"> {/* Added target blank for external links */}
            <span>Learn More <ExternalLink className="ml-2 h-4 w-4" /></span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
