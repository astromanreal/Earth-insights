
'use client';

import { useState, useEffect } from 'react';
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Leaf, MoreVertical, Moon, Sun, Mail, PanelLeft, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Header() {
  const { toggleSidebar } = useSidebar();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to check initial dark mode preference and apply class
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    const initialDarkMode = storedTheme === 'dark' || (!storedTheme && prefersDark);
    setIsDarkMode(initialDarkMode);
    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 md:px-8 py-4">
      {/* Left Group: Sidebar Trigger (Desktop) and Logo */}
      <div className="flex items-center gap-2">
        <SidebarTrigger className="hidden md:flex" aria-label="Toggle main navigation sidebar" />
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg text-primary" aria-label="Earth Insights Home">
          <Leaf className="h-6 w-6" />
          <span className="hidden sm:inline">Earth Insights</span>
        </Link>
      </div>

      {/* Right Group: New Icons, Dark Mode Toggle (Desktop), Mobile Specific Dropdown */}
      <div className="flex items-center gap-1">
        {/* New Icon Menu - visible on sm screens and up */}
        <div className="hidden sm:flex items-center gap-1">
          <Link href="/settings" passHref>
            <Button variant="ghost" size="icon" aria-label="Settings">
              <Settings className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button variant="ghost" size="icon" aria-label="Contact">
              <Mail className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/profile" passHref>
            <Button variant="ghost" size="icon" aria-label="Profile">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Dark Mode Toggle for md screens and up */}
        <div className="hidden md:flex items-center ml-1"> {/* Adjusted margin slightly */}
          <Button variant="ghost" size="icon" onClick={toggleDarkMode} aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Dropdown Menu - for screens smaller than sm */}
        <div className="sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open site menu">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={toggleSidebar}>
                <PanelLeft className="mr-2 h-4 w-4" />
                <span>Open Navigation</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                 <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Contact</span>
                  </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={toggleDarkMode}>
                {isDarkMode ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
                <span>{isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
