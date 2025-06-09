'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
     <main className="flex flex-1 flex-col items-center justify-center gap-4 p-4 md:gap-8 md:p-8">
        <Card className="w-full max-w-md text-center">
           <CardHeader>
              <div className="flex justify-center mb-4">
                  <AlertTriangle className="h-12 w-12 text-destructive" />
              </div>
             <CardTitle>Something went wrong!</CardTitle>
             <CardDescription>
                An unexpected error occurred. You can try to reload the page.
             </CardDescription>
           </CardHeader>
           <CardContent className="flex flex-col items-center gap-4">
             <p className="text-sm text-muted-foreground">{error.message}</p>
             <Button
               onClick={
                 // Attempt to recover by trying to re-render the segment
                 () => reset()
               }
             >
               Try again
             </Button>
           </CardContent>
         </Card>
     </main>
  );
}
