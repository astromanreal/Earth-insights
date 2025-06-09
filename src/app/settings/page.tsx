
'use client';

import type { Metadata } from 'next'; // Not used directly but good for reference
import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Settings as SettingsIcon, PaletteIcon, TextIcon, LayoutGridIcon, EyeIcon, Info } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

type Theme = 'default' | 'ocean-blue' | 'solar-warmth' | 'midnight-mode' | 'minimal-grey';
type FontSize = 'small' | 'medium' | 'large';
type LayoutStyle = 'compact' | 'spacious';
type DataDisplay = 'simplified' | 'expert';

const THEME_STORAGE_KEY = 'app-theme';
const DARK_MODE_STORAGE_KEY = 'app-dark-mode';
const FONT_SIZE_STORAGE_KEY = 'app-font-size';
const LAYOUT_STYLE_STORAGE_KEY = 'app-layout-style';
const DATA_DISPLAY_STORAGE_KEY = 'app-data-display';

// Since this is a client component, metadata should be handled by a parent layout or by directly manipulating document.title
// export const metadata: Metadata = { ... } 

export default function SettingsPage() {
  const { toast } = useToast();

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [selectedTheme, setSelectedTheme] = useState<Theme>('default');
  const [fontSize, setFontSize] = useState<FontSize>('medium');
  const [layoutStyle, setLayoutStyle] = useState<LayoutStyle>('compact');
  const [dataDisplay, setDataDisplay] = useState<DataDisplay>('simplified');
  
  const [isMounted, setIsMounted] = useState(false);

  const updateRootClasses = useCallback(() => {
    if (!isMounted) return;
    const root = document.documentElement;
    
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    root.classList.forEach(className => {
      if (className.startsWith('theme-')) {
        root.classList.remove(className);
      }
    });
    if (selectedTheme !== 'default') {
      root.classList.add(`theme-${selectedTheme}`);
    } else {
       root.classList.forEach(className => {
        if (className.startsWith('theme-')) {
          root.classList.remove(className);
        }
      });
    }
  }, [isDarkMode, selectedTheme, isMounted]);

  const updateBodyClassesAndAttributes = useCallback(() => {
    if (!isMounted) return;
    const body = document.body;

    body.classList.remove('font-small', 'font-medium', 'font-large');
    body.classList.add(`font-${fontSize}`);

    body.classList.remove('layout-compact', 'layout-spacious');
    body.classList.add(`layout-${layoutStyle}`);
    
    body.setAttribute('data-display-mode', dataDisplay);

  }, [fontSize, layoutStyle, dataDisplay, isMounted]);

  useEffect(() => {
    document.title = "Application Settings | Earth Insights"; // Set title for client component

    const storedDarkMode = localStorage.getItem(DARK_MODE_STORAGE_KEY);
    setIsDarkMode(storedDarkMode === 'true');

    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    if (storedTheme) setSelectedTheme(storedTheme);
    else setSelectedTheme('default');

    const storedFontSize = localStorage.getItem(FONT_SIZE_STORAGE_KEY) as FontSize | null;
    if (storedFontSize) setFontSize(storedFontSize);
    else setFontSize('medium');

    const storedLayoutStyle = localStorage.getItem(LAYOUT_STYLE_STORAGE_KEY) as LayoutStyle | null;
    if (storedLayoutStyle) setLayoutStyle(storedLayoutStyle);
    else setLayoutStyle('compact');
    
    const storedDataDisplay = localStorage.getItem(DATA_DISPLAY_STORAGE_KEY) as DataDisplay | null;
    if (storedDataDisplay) setDataDisplay(storedDataDisplay);
    else setDataDisplay('simplified');

    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    localStorage.setItem(DARK_MODE_STORAGE_KEY, String(isDarkMode));
    updateRootClasses();
  }, [isDarkMode, isMounted, updateRootClasses]);

  useEffect(() => {
    if (!isMounted) return;
    localStorage.setItem(THEME_STORAGE_KEY, selectedTheme);
    updateRootClasses();
  }, [selectedTheme, isMounted, updateRootClasses]);

  useEffect(() => {
    if (!isMounted) return;
    localStorage.setItem(FONT_SIZE_STORAGE_KEY, fontSize);
    updateBodyClassesAndAttributes();
  }, [fontSize, isMounted, updateBodyClassesAndAttributes]);

  useEffect(() => {
    if (!isMounted) return;
    localStorage.setItem(LAYOUT_STYLE_STORAGE_KEY, layoutStyle);
    updateBodyClassesAndAttributes();
  }, [layoutStyle, isMounted, updateBodyClassesAndAttributes]);
  
  useEffect(() => {
    if (!isMounted) return;
    localStorage.setItem(DATA_DISPLAY_STORAGE_KEY, dataDisplay);
    updateBodyClassesAndAttributes();
  }, [dataDisplay, isMounted, updateBodyClassesAndAttributes]);

   useEffect(() => {
    if (isMounted) {
      updateRootClasses();
      updateBodyClassesAndAttributes();
    }
  }, [isMounted, updateRootClasses, updateBodyClassesAndAttributes]);


  const handleSaveSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Your preferences have been updated and applied across the application.",
      duration: 3000,
    });
  };
  
  const handleResetSettings = () => {
    setIsDarkMode(false);
    setSelectedTheme('default');
    setFontSize('medium');
    setLayoutStyle('compact');
    setDataDisplay('simplified');
    // Explicitly save defaults to localStorage
    localStorage.setItem(DARK_MODE_STORAGE_KEY, 'false');
    localStorage.setItem(THEME_STORAGE_KEY, 'default');
    localStorage.setItem(FONT_SIZE_STORAGE_KEY, 'medium');
    localStorage.setItem(LAYOUT_STYLE_STORAGE_KEY, 'compact');
    localStorage.setItem(DATA_DISPLAY_STORAGE_KEY, 'simplified');

    toast({
      title: "Settings Reset",
      description: "All preferences have been reset to their default values.",
      duration: 3000,
    });
  };


  if (!isMounted) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center gap-4 p-4 md:gap-8 md:p-8">
        <SettingsIcon className="h-12 w-12 text-primary animate-spin" />
        <p className="text-muted-foreground">Loading settings interface...</p>
      </main>
    );
  }

  return (
    <main className="flex flex-1 flex-col gap-6 p-4 md:gap-8 md:p-8">
       <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <Card>
        <CardHeader className="flex flex-row items-center gap-3">
          <SettingsIcon className="h-8 w-8 text-primary" />
          <div>
            <CardTitle className="text-2xl"><h1>Application Settings</h1></CardTitle>
            <CardDescription>Customize your experience with Earth Insights. Changes are saved locally in your browser.</CardDescription>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center gap-3">
          <PaletteIcon className="h-6 w-6 text-accent" />
          <CardTitle><h2>Appearance</h2></CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between space-x-2 p-4 border rounded-lg shadow-sm">
            <div className="flex items-center gap-2">
              {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              <Label htmlFor="dark-mode-toggle" className="text-base font-medium">Dark Mode</Label>
            </div>
            <Switch
              id="dark-mode-toggle"
              checked={isDarkMode}
              onCheckedChange={setIsDarkMode}
              aria-label="Toggle dark mode"
            />
          </div>

          <div className="space-y-2 p-4 border rounded-lg shadow-sm">
            <Label htmlFor="theme-selector" className="text-base font-medium block mb-2">Color Theme</Label>
            <Select value={selectedTheme} onValueChange={(value: string) => setSelectedTheme(value as Theme)}>
              <SelectTrigger id="theme-selector" className="w-full">
                <SelectValue placeholder="Select a theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Earth Tones (Default)</SelectItem>
                <SelectItem value="ocean-blue">Ocean Blue</SelectItem>
                <SelectItem value="solar-warmth">Solar Warmth</SelectItem>
                <SelectItem value="midnight-mode">Midnight Mode</SelectItem>
                <SelectItem value="minimal-grey">Minimal Grey</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center gap-3">
            <TextIcon className="h-6 w-6 text-accent" />
            <CardTitle><h2>Accessibility & Layout</h2></CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2 p-4 border rounded-lg shadow-sm">
            <Label className="text-base font-medium block mb-2">Font Size</Label>
            <RadioGroup value={fontSize} onValueChange={(value: string) => setFontSize(value as FontSize)} className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
              {(['small', 'medium', 'large'] as FontSize[]).map((size) => (
                <div key={size} className="flex items-center">
                  <RadioGroupItem value={size} id={`font-${size}`} />
                  <Label htmlFor={`font-${size}`} className="ml-2 capitalize cursor-pointer">{size}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-2 p-4 border rounded-lg shadow-sm">
            <Label className="text-base font-medium block mb-2">Page Layout Style</Label>
            <RadioGroup value={layoutStyle} onValueChange={(value: string) => setLayoutStyle(value as LayoutStyle)} className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
              {(['compact', 'spacious'] as LayoutStyle[]).map(style => (
                <div key={style} className="flex items-center">
                  <RadioGroupItem value={style} id={`layout-${style}`} />
                  <Label htmlFor={`layout-${style}`} className="ml-2 capitalize cursor-pointer">{style}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

       <Card>
        <CardHeader className="flex flex-row items-center gap-3">
            <EyeIcon className="h-6 w-6 text-accent" />
            <CardTitle><h2>Data Presentation</h2></CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2 p-4 border rounded-lg shadow-sm">
            <Label className="text-base font-medium block mb-2">Data Display Preference</Label>
            <RadioGroup value={dataDisplay} onValueChange={(value: string) => setDataDisplay(value as DataDisplay)} className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
               {(['simplified', 'expert'] as DataDisplay[]).map(display => (
                <div key={display} className="flex items-center">
                  <RadioGroupItem value={display} id={`data-${display}`} />
                  <Label htmlFor={`data-${display}`} className="ml-2 capitalize cursor-pointer">{display}</Label>
                </div>
              ))}
            </RadioGroup>
            <p className="text-xs text-muted-foreground pt-1">This preference (e.g., for climate dashboards) is conceptual and primarily stored. Specific components would need to implement logic to use this setting for toggling between simplified summaries and detailed expert views.</p>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 flex flex-col sm:flex-row justify-end gap-3">
        <Button onClick={handleResetSettings} variant="outline" size="lg">Reset to Defaults</Button>
        <Button onClick={handleSaveSettings} size="lg">Save Preferences</Button>
      </div>

      <Card className="mt-4 bg-muted/50">
         <CardHeader className="flex flex-row items-center gap-2">
            <Info className="h-5 w-5 text-muted-foreground"/>
            <CardTitle className="text-md">About Your Settings</CardTitle>
         </CardHeader>
         <CardContent>
            <p className="text-sm text-muted-foreground">
                Your preferences are saved locally in your web browser using localStorage. They are not stored on our servers. Clearing your browser's cache or site data may remove these settings. This ensures your privacy while providing a personalized experience.
            </p>
         </CardContent>
      </Card>
    </main>
  );
}
