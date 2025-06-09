
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, FileText, Info } from 'lucide-react';
import Link from 'next/link'; // Added Link import

const siteURL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: "Legal Information: Privacy Policy, Terms of Service & Disclaimers | Earth Insights",
  description: "Read the official Privacy Policy, Terms of Service, and Disclaimers for the Earth Insights platform. Understand how we handle data, our terms of use, and the educational nature of our content.",
  keywords: ["privacy policy earth insights", "terms of service environmental platform", "legal information climate data", "disclaimer educational content", "copyright policy earth insights", "data protection user agreement", "platform guidelines sustainability"],
  alternates: {
    canonical: '/legal',
  },
  openGraph: {
    title: "Legal Information: Privacy, Terms & Disclaimers | Earth Insights",
    description: "Read the Privacy Policy, Terms of Service, and Disclaimers for the Earth Insights platform. Understand data handling, terms of use, and content nature.",
    url: `${siteURL}/legal`,
    type: 'article', // Suitable for text-heavy legal content
    publishedTime: '2023-11-01T00:00:00.000Z', // Example publish date
    modifiedTime: new Date().toISOString(), // Current date for last modified
    authors: [`${siteURL}/contact`], // Link to contact/about as author
    images: [
      {
        url: `${siteURL}/og-legal.png`, // Specific OG image
        width: 1200,
        height: 630,
        alt: 'Legal Documents Icon - Gavel and Scroll for Earth Insights',
        'data-ai-hint': 'legal document gavel',
      },
    ],
  },
  twitter: {
    title: "Legal Information: Privacy, Terms & Disclaimers | Earth Insights",
    description: "Understand Earth Insights' Privacy Policy, Terms of Service, and Disclaimers. Learn about data handling and content usage.",
    images: [{
        url: `${siteURL}/twitter-legal.png`, // Specific Twitter card image
        alt: 'Earth Insights Legal Information Page Banner',
        'data-ai-hint': 'legal banner document',
    }],
  },
};

export default function LegalPage() {
  const lastUpdatedDate = "November 2023"; // Match with OpenGraph if static
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Info className="h-8 w-8 text-accent" />
          <div>
            <CardTitle><h1>Important Information & Disclaimers</h1></CardTitle>
            <CardDescription>
              Please read these important notices regarding the Earth Insights platform.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p className="font-semibold">Last Updated: {lastUpdatedDate}</p>
          <p>
            <strong className="text-foreground">Educational Purpose:</strong> The Earth Insights platform and all content provided herein, including articles, data visualizations, and other materials, are intended for informational and educational purposes only. While we strive for accuracy and relevance, the information presented may not always be complete, up-to-date, or applicable to specific circumstances.
          </p>
          <p>
            <strong className="text-foreground">Copyright of Referenced Materials:</strong> Content sourced from third-party organizations, datasets, or individuals is used for illustrative and educational context. Copyright for any externally referenced materials, data, or images belongs to their respective original owners and licensors. Earth Insights does not claim ownership over such third-party content. Where possible, attribution to original sources is provided.
          </p>
          <p>
            <strong className="text-foreground">Demonstration Project:</strong> Please note that this version of Earth Insights is a demonstration project. Features, data, and functionalities may be incomplete or serve as illustrative examples.
          </p>
          <p>
            Users should exercise their own judgment when interpreting and applying any information found on this platform. For critical decisions or professional advice, please consult with qualified experts.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Shield className="h-8 w-8 text-primary" />
          <div>
            <CardTitle id="privacy-policy"><h2>Privacy Policy</h2></CardTitle>
            <CardDescription>
              Our commitment to your privacy.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <h3 className="font-semibold text-foreground pt-2 text-lg">1. Introduction</h3>
          <p>This Privacy Policy outlines how Earth Insights ("we," "us," or "our") handles information collected through our website and services (the "Platform"). As a demonstration platform focused on education, our data collection practices are minimal.</p>

          <h3 className="font-semibold text-foreground pt-2 text-lg">2. Information We Collect</h3>
          <p>
            This application does not actively collect extensive personal user data beyond standard web server logs (e.g., IP addresses for security and analytics) and any information you voluntarily provide (e.g., through a contact form, if implemented).
          </p>
          <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
            <li><strong>Automatically Collected Data:</strong> Standard server logs for operational purposes. If analytics are used (e.g., Vercel Analytics), they collect anonymized or pseudonymized usage data to help us understand platform engagement.</li>
             <li><strong>User-Provided Information:</strong> If you contact us via email or a form, we will collect the information you provide, such as your name and email address, to respond to your inquiry.</li>
             <li><strong>Settings Preferences:</strong> If you use the settings panel, your preferences (like theme, font size) are stored locally in your browser's localStorage and are not transmitted to our servers.</li>
          </ul>

          <h3 className="font-semibold text-foreground pt-2 text-lg">3. How We Use Your Information</h3>
           <p>
             Any data collected is used to:
           </p>
           <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
              <li>Provide, maintain, and improve the Platform and user experience.</li>
              <li>Ensure security, prevent abuse, and analyze platform usage to enhance our educational offerings.</li>
              <li>Respond to your inquiries or feedback if you contact us.</li>
           </ul>

          <h3 className="font-semibold text-foreground pt-2 text-lg">4. Data Sharing and Disclosure</h3>
           <p>
              We do not sell your personal information. Information may be shared with:
           </p>
            <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
              <li>Service providers essential for platform operation (e.g., hosting services like Vercel). These providers have their own privacy policies and are contractually obligated to protect your data.</li>
              <li>Legal authorities if required by law, to respond to legal process, or to protect the rights, property, or safety of Earth Insights, our users, or the public.</li>
           </ul>

           <h3 className="font-semibold text-foreground pt-2 text-lg">5. Data Security</h3>
           <p>We implement reasonable administrative, technical, and physical measures to protect data from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. For example, data in transit is protected by HTTPS. However, no online service is completely secure, and we cannot guarantee absolute security.</p>

           <h3 className="font-semibold text-foreground pt-2 text-lg">6. Your Data Rights</h3>
           <p>
             Depending on your jurisdiction, you may have rights regarding access, correction, or deletion of personal data. As we collect minimal personal data directly that can identify you (unless you provide it voluntarily), these rights primarily apply to any information we might hold through direct contact. You can manage locally stored settings by clearing your browser's localStorage for this site.
           </p>

           <h3 className="font-semibold text-foreground pt-2 text-lg">7. Cookies and Tracking Technologies</h3>
            <p>
               The Platform may use essential cookies for basic site functionality (e.g., session management, theme preferences stored in localStorage). Third-party services integrated (like analytics or embedded content, if any) may also use cookies as per their own privacy policies. You can control cookie settings through your browser.
            </p>

           <h3 className="font-semibold text-foreground pt-2 text-lg">8. Third-Party Services & Links</h3>
            <p>We may link to other third-party websites or services. We are not responsible for their privacy practices or content. We encourage you to review the privacy policies of any third-party sites you visit.</p>


           <h3 className="font-semibold text-foreground pt-2 text-lg">9. Children's Privacy</h3>
           <p>This Platform is not intended for children under the age of 13 (or a higher age threshold if stipulated by local law, such as 16 in the EEA/UK). We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a child, we will take steps to delete it.</p>

           <h3 className="font-semibold text-foreground pt-2 text-lg">10. Changes to This Privacy Policy</h3>
           <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>

           <h3 className="font-semibold text-foreground pt-2 text-lg">11. Contact Us</h3>
           <p>
             For questions about this Privacy Policy, please refer to our <Link href="/contact" className="underline hover:text-primary">Contact Page</Link>.
           </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <FileText className="h-8 w-8 text-primary" />
          <div>
            <CardTitle id="terms-of-service"><h2>Terms of Service</h2></CardTitle>
            <CardDescription>
              Rules for using the Earth Insights platform.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            Welcome to Earth Insights! These Terms of Service ("Terms") govern your use of our website and services (the "Platform"). By accessing or using Earth Insights, you agree to be bound by these Terms and our Privacy Policy.
          </p>
          <h3 className="font-semibold text-foreground pt-2 text-lg">1. Acceptance of Terms</h3>
          <p>
            By using the Platform, you confirm that you have read, understood, and agree to these Terms. If you do not agree with any part of these Terms, you must not use the Platform.
          </p>
          <h3 className="font-semibold text-foreground pt-2 text-lg">2. Use of the Service</h3>
          <p>
            Earth Insights grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Platform for personal, non-commercial, informational, and educational purposes only, in accordance with these Terms.
          </p>
          <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
            <li>You agree not to misuse the service, engage in unlawful activities, or attempt unauthorized access to the Platform or its related systems.</li>
            <li>You agree not to use the Platform in any manner that could damage, disable, overburden, or impair it.</li>
          </ul>

          <h3 className="font-semibold text-foreground pt-2 text-lg">3. Content and Intellectual Property</h3>
           <p>
             The content provided on Earth Insights, including text, graphics, images, data, logos, and other materials ("Content"), is for informational and educational purposes.
           </p>
           <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
              <li><strong className="text-foreground">Accuracy of Information:</strong> While we strive for accuracy, we make no guarantees regarding the completeness, reliability, or timeliness of the Content. Information may be subject to change without notice.</li>
              <li><strong className="text-foreground">Ownership:</strong> The Platform and its original Content (excluding third-party data and user-generated content, if any) are the property of Earth Insights or its licensors and are protected by copyright, trademark, and other intellectual property laws.</li>
              <li><strong className="text-foreground">Third-Party Content:</strong> Copyright for externally referenced materials, datasets, or images belongs to their respective original owners. Use of such content is for educational and illustrative purposes and does not imply endorsement.</li>
           </ul>

           <h3 className="font-semibold text-foreground pt-2 text-lg">4. User Conduct</h3>
           <p>You agree not to use the Platform to: post or transmit any material that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable; distribute malware or other harmful computer code; harass, threaten, or intimidate other users; infringe on the intellectual property rights of others; or scrape, collect, or store data from the Platform in a disruptive or unauthorized manner.</p>

           <h3 className="font-semibold text-foreground pt-2 text-lg">5. Disclaimers and Limitation of Liability</h3>
            <p>
               THE PLATFORM AND ITS CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>
            <p className="mt-2">
                TO THE FULLEST EXTENT PERMITTED BY LAW, EARTH INSIGHTS AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, AND LICENSORS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF OR INABILITY TO USE THE SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>

           <h3 className="font-semibold text-foreground pt-2 text-lg">6. Indemnification</h3>
           <p>You agree to indemnify, defend, and hold harmless Earth Insights, its affiliates, officers, directors, employees, consultants, agents, and licensors from any and all third-party claims, liability, damages, and/or costs (including, but not limited to, attorneys' fees) arising from your violation of these Terms, your infringement of any intellectual property or other right of any person or entity, or your misuse of the Platform.</p>

           <h3 className="font-semibold text-foreground pt-2 text-lg">7. Modifications to Terms</h3>
           <p>
             We reserve the right to modify these Terms at any time. We will indicate changes by updating the "Last Updated" date at the top of this page. Your continued use of the Platform after such changes constitutes your acceptance of the new Terms. It is your responsibility to review these Terms periodically.
           </p>

           <h3 className="font-semibold text-foreground pt-2 text-lg">8. Termination</h3>
           <p>We may terminate or suspend your access to the Platform immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use the Platform will immediately cease.</p>

           <h3 className="font-semibold text-foreground pt-2 text-lg">9. Governing Law and Dispute Resolution</h3>
            <p>
               These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the Platform operator is based (e.g., "State of California, USA" or similar, specify if applicable), without regard to its conflict of law provisions. Any disputes arising out of or relating to these Terms or the Platform shall be resolved through amicable negotiation or, if necessary, in the competent courts of that jurisdiction.
            </p>

            <h3 className="font-semibold text-foreground pt-2 text-lg">10. Contact Information</h3>
            <p>For any questions regarding these Terms of Service, please contact us via the methods provided on our <Link href="/contact" className="underline hover:text-primary">Contact Page</Link>.</p>
        </CardContent>
      </Card>
    </main>
  );
}
