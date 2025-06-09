
'use client';

import { useState, useEffect } from 'react';
import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from '@/components/ui/sidebar';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  Home,
  ThermometerSun,
  Sprout,
  BookOpen,
  Globe,
  Leaf,
  AlertTriangle,
  Lightbulb,
  Gavel,
  Mail,
  PanelLeft,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/', label: 'Dashboard', icon: Home, a11yLabel: "Dashboard Home" },
  { href: '/climate-change', label: 'Climate Change', icon: ThermometerSun, a11yLabel: "Climate Change Data" },
  { href: '/ecosystems', label: 'Ecosystems', icon: Sprout, a11yLabel: "Explore Ecosystems" },
  { href: '/challenges', label: 'Challenges', icon: AlertTriangle, a11yLabel: "Environmental Challenges" },
  { href: '/sustainability', label: 'Sustainability', icon: Leaf, a11yLabel: "Sustainable Practices" },
  { href: '/green-tech', label: 'Green Tech', icon: Lightbulb, a11yLabel: "Green Technology Solutions" },
  { href: '/global-efforts', label: 'Global Efforts', icon: Globe, a11yLabel: "Global Environmental Efforts" },
  { href: '/resources', label: 'Resources', icon: BookOpen, a11yLabel: "Learning Resources" },
];

const utilityNavItems = [
    { href: '/contact', label: 'Contact', icon: Mail, a11yLabel: "Contact Us" },
    { href: '/legal', label: 'Legal', icon: Gavel, a11yLabel: "Legal Information" },
];


export default function SidebarNav() {
  const pathname = usePathname();
  const { toggleSidebar, state, isMobile, setOpenMobile } = useSidebar();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const handleLinkClick = () => {
    if (isMounted && isMobile && state === 'expanded') {
      setOpenMobile(false);
    }
  };


  return (
    <>
      <SidebarHeader className="flex items-center justify-between p-4">
         <Link href="/" className="flex items-center gap-2 font-semibold text-primary" aria-label="Earth Insights Home">
           <Leaf className="h-6 w-6" />
           <span className="group-data-[collapsible=icon]:hidden">Earth Insights</span>
         </Link>
        {isMounted && isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 md:hidden"
            onClick={toggleSidebar}
            aria-label="Close navigation menu"
          >
            <PanelLeft />
            <span className="sr-only">Close navigation menu</span>
          </Button>
        )}
      </SidebarHeader>

      <ScrollArea className="flex-1 mb-4">
         <SidebarContent>
           <SidebarMenu>
             {navItems.map((item) => (
               <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                     as={Link}
                     href={item.href}
                     isActive={pathname === item.href}
                     tooltip={item.label}
                     aria-label={item.a11yLabel || item.label}
                     onClick={handleLinkClick}
                   >
                     <span className="flex items-center gap-2">
                       <item.icon className="h-5 w-5" />
                       <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
                     </span>
                   </SidebarMenuButton>
               </SidebarMenuItem>
             ))}
           </SidebarMenu>
            <SidebarSeparator className="my-4"/>
            <SidebarMenu>
               {utilityNavItems.map((item) => (
                  <SidebarMenuItem key={item.href}>
                     <SidebarMenuButton
                        as={Link}
                        href={item.href}
                        variant="ghost"
                        size="sm"
                        isActive={pathname === item.href}
                        tooltip={item.label}
                        aria-label={item.a11yLabel || item.label}
                        onClick={handleLinkClick}
                      >
                        <span className="flex items-center gap-2">
                          <item.icon className="h-4 w-4" />
                          <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
                        </span>
                      </SidebarMenuButton>
                  </SidebarMenuItem>
               ))}
            </SidebarMenu>
         </SidebarContent>
         <ScrollBar orientation="vertical" />
      </ScrollArea>
    </>
  );
}
