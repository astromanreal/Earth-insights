
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Twitter, Instagram, Github, Link as LinkIcon, Users, Target } from 'lucide-react';
import Link from 'next/link';

const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: "Contact Earth Insights | Get In Touch, Collaborate, or Share Feedback",
  description: "Reach out to the Earth Insights team for inquiries, collaborations, partnership opportunities, or feedback on our environmental platform. Connect via email, phone, or social media.",
  keywords: ["contact earth insights", "environmental platform contact", "climate change collaboration", "sustainability feedback", "green tech inquiries", "earth science team"],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: "Contact Earth Insights | Get In Touch With Our Team",
    description: "Reach out to the Earth Insights team for inquiries, collaborations, or feedback. Connect via email, phone, or social media. Learn about our mission.",
    url: `${siteURL}/contact`,
    type: 'profile', // Using 'profile' as it's a contact page for an organization
    images: [
      {
        url: `${siteURL}/og-contact.png`, // Specific OG image
        width: 1200,
        height: 630,
        alt: 'Contact Earth Insights Team - Communication Icons',
        'data-ai-hint': 'communication contact icons',
      },
    ],
  },
  twitter: {
    title: "Contact Earth Insights | Get In Touch With Our Team",
    description: "Reach out to the Earth Insights team for inquiries, collaborations, or feedback. Connect via email, phone, or social media.",
    images: [{
        url: `${siteURL}/twitter-contact.png`, // Specific Twitter card image
        alt: 'Earth Insights Contact Page Banner',
        'data-ai-hint': 'contact social banner',
    }],
  },
};

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col gap-6 p-4 md:gap-8 md:p-8">
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Users className="h-8 w-8 text-primary" />
          <div>
            <CardTitle><h1>About Earth Insights</h1></CardTitle>
            <CardDescription>
              Understanding our mission, the team behind the platform, and our collaborators.
            </CardDescription>
          </div>
        </CardHeader>
         <CardContent>
            <p className="text-muted-foreground">
              We are a dedicated team of scientists, data analysts, developers, and communicators passionate about making environmental data accessible and understandable to everyone. Our goal is to empower individuals and communities with the knowledge to make informed decisions for a sustainable future. If you share our passion or have inquiries, we'd love to connect.
            </p>
         </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Target className="h-8 w-8 text-accent" />
           <div>
             <CardTitle><h2>Our Mission</h2></CardTitle>
             <CardDescription>Empowering action through knowledge.</CardDescription>
           </div>
        </CardHeader>
        <CardContent>
           <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
             "To provide clear, accurate, and engaging information about the state of our planet, fostering awareness and inspiring collective action towards a sustainable future."
           </blockquote>
           <p className="text-sm text-muted-foreground mt-4">
            Your feedback, questions, and collaboration ideas are crucial in helping us achieve this mission.
           </p>
         </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle><h3>Direct Contact Information</h3></CardTitle>
          <CardDescription>For direct inquiries, partnership proposals, or media requests, please use the email or phone details below.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-4 border rounded-lg shadow-sm bg-card">
              <Mail className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold text-card-foreground mb-1">Email Us</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Send your questions or feedback to:
                </p>
                <Link href="mailto:astroman6569@gmail.com" className="text-sm text-primary hover:underline block break-all">
                  astroman6569@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 border rounded-lg shadow-sm bg-card">
              <Phone className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold text-card-foreground mb-1">Call Us</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Reach us by phone at:
                </p>
                <Link href="tel:+918102116569" className="text-sm text-primary hover:underline block">
                  +91 8102116569
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

       <Card>
         <CardHeader className="flex flex-row items-center gap-4">
            <LinkIcon className="h-8 w-8 text-secondary"/>
            <div>
                 <CardTitle><h3>Connect with Us Online</h3></CardTitle>
                 <CardDescription>Follow Earth Insights and engage with our community on social media platforms for the latest updates, discussions, and insights.</CardDescription>
            </div>
         </CardHeader>
         <CardContent>
           <div className="flex flex-wrap gap-4">
               <Button variant="outline" asChild>
                  <Link href="https://twitter.com/Sathyamsarthak" target="_blank" rel="noopener noreferrer" aria-label="Follow Earth Insights on Twitter @Sathyamsarthak">
                      <Twitter className="mr-2 h-5 w-5" /> Twitter / X (@Sathyamsarthak)
                  </Link>
              </Button>
               <Button variant="outline" asChild>
                  <Link href="https://www.instagram.com/srishikharji/" target="_blank" rel="noopener noreferrer" aria-label="Follow Earth Insights on Instagram @srishikharji">
                       <Instagram className="mr-2 h-5 w-5" /> Instagram (@srishikharji)
                   </Link>
              </Button>
               <Button variant="outline" asChild>
                  <Link href="https://github.com/astromanreal" target="_blank" rel="noopener noreferrer" aria-label="Check out Earth Insights on GitHub astromanreal">
                      <Github className="mr-2 h-5 w-5" /> GitHub (astromanreal)
                  </Link>
              </Button>
           </div>
         </CardContent>
       </Card>
    </main>
  );
}
