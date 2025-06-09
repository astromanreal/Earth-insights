
'use client';

// import type { Metadata } from 'next'; // Metadata cannot be exported from client components
import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Leaf,
  Zap,
  Droplets,
  Trees,
  ShieldCheck,
  Edit3,
  CheckCircle,
  Settings,
  Moon,
  Sun,
  BookOpen,
  Lightbulb,
  UserCircle2,
  ExternalLink,
  Info,
  Share2,
  Award,
} from 'lucide-react';
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast";

// Since metadata cannot be in client components, it should be in a layout or page.tsx if this becomes a route group.
// For a standalone page, this is a limitation. We can add a <title> tag directly in head if needed for client components.

const defaultPledge = "I am committed to reducing my carbon footprint, conserving resources, and supporting sustainable practices for a healthier planet. I will strive to make conscious choices in my daily life and inspire others to join this vital journey.";

const initialEcoActions = [
  { id: 'reusableBags', label: 'Use reusable shopping bags regularly', points: 10, defaultChecked: false },
  { id: 'meatlessDay', label: 'Incorporate at least one meatless day per week', points: 15, defaultChecked: false },
  { id: 'shorterShowers', label: 'Take shorter showers (e.g., under 5 minutes)', points: 5, defaultChecked: true },
  { id: 'ecoTransport', label: 'Opt for walking, cycling, or public transport when possible', points: 20, defaultChecked: false },
  { id: 'unplugDevices', label: 'Unplug unused electronics to save energy', points: 5, defaultChecked: false },
  { id: 'localProduce', label: 'Buy local and seasonal produce to reduce food miles', points: 10, defaultChecked: false },
  { id: 'reduceSingleUsePlastic', label: 'Actively reduce single-use plastic consumption', points: 15, defaultChecked: true },
  { id: 'learnAndShare', label: 'Learn about climate issues and share knowledge with others', points: 10, defaultChecked: false },
];

const ecoTips = [
  { id: 1, title: "Water Wise", content: "Fixing a leaky faucet can save hundreds of gallons of water per month. Every drop counts!", icon: Droplets },
  { id: 2, title: "Energy Saver", content: "Switching to LED bulbs uses up to 75% less energy and lasts much longer than incandescent bulbs.", icon: Lightbulb },
  { id: 3, title: "Food for Thought", content: "Reducing food waste is a powerful climate action. Plan meals, store food properly, and compost scraps.", icon: Zap },
];

const DARK_MODE_STORAGE_KEY_PROFILE = 'app-dark-mode';
const PLEDGE_STORAGE_KEY = 'user-climate-pledge';
const ACTIONS_STORAGE_KEY = 'user-eco-actions';


export default function ProfilePage() {
  const { toast } = useToast();
  const [isMounted, setIsMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [pledge, setPledge] = useState(defaultPledge);
  const [ecoActions, setEcoActions] = useState(() => {
    return initialEcoActions.map(action => ({ ...action, checked: action.defaultChecked }));
  });

  const completedActionsCount = ecoActions.filter(action => action.checked).length;
  const totalActions = ecoActions.length;
  const progressPercentage = totalActions > 0 ? (completedActionsCount / totalActions) * 100 : 0;

  const updateRootClasses = useCallback(() => {
    if (!isMounted) return;
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode, isMounted]);

  useEffect(() => {
    // For client components, manage title directly if needed
    document.title = "Your Eco Profile | Earth Insights";

    const storedDarkMode = localStorage.getItem(DARK_MODE_STORAGE_KEY_PROFILE);
    setIsDarkMode(storedDarkMode === 'true');

    const storedPledge = localStorage.getItem(PLEDGE_STORAGE_KEY);
    if (storedPledge) setPledge(storedPledge);

    const storedActions = localStorage.getItem(ACTIONS_STORAGE_KEY);
    if (storedActions) {
      const parsedActions: { id: string, checked: boolean }[] = JSON.parse(storedActions);
      setEcoActions(initialEcoActions.map(initAction => {
        const storedAction = parsedActions.find(sa => sa.id === initAction.id);
        return { ...initAction, checked: storedAction ? storedAction.checked : initAction.defaultChecked };
      }));
    } else {
      setEcoActions(initialEcoActions.map(action => ({ ...action, checked: action.defaultChecked })));
    }
    
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    localStorage.setItem(DARK_MODE_STORAGE_KEY_PROFILE, String(isDarkMode));
    updateRootClasses();
  }, [isDarkMode, isMounted, updateRootClasses]);
  
  useEffect(() => {
    if (isMounted) { 
      localStorage.setItem(PLEDGE_STORAGE_KEY, pledge);
    }
  }, [pledge, isMounted]);

  useEffect(() => {
    if (isMounted) {
      const actionsToStore = ecoActions.map(({ id, checked }) => ({ id, checked }));
      localStorage.setItem(ACTIONS_STORAGE_KEY, JSON.stringify(actionsToStore));
    }
  }, [ecoActions, isMounted]);
  

  const handlePledgeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPledge(event.target.value);
  };

  const handleSavePledge = () => {
    // localStorage.setItem(PLEDGE_STORAGE_KEY, pledge); // Already saved on change by useEffect
    toast({ title: "Pledge Updated", description: "Your climate pledge has been saved locally." });
  };

  const handleActionToggle = (actionId: string) => {
    setEcoActions(prevActions =>
      prevActions.map(action =>
        action.id === actionId ? { ...action, checked: !action.checked } : action
      )
    );
  };

  if (!isMounted) {
    return (
        <main className="flex flex-1 flex-col items-center justify-center p-4">
            <Leaf className="h-12 w-12 text-primary animate-pulse" />
            <p className="text-muted-foreground mt-2">Loading Your Eco Profile...</p>
        </main>
    );
  }

  return (
    <main className="flex flex-1 flex-col gap-6 p-4 md:gap-8 md:p-8 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <Card className="overflow-hidden shadow-xl">
        <CardHeader className="bg-gradient-to-r from-primary/80 via-primary/70 to-accent/70 p-8 text-primary-foreground">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
              <AvatarImage src="https://i.pinimg.com/736x/65/1a/6e/651a6ea828945b4a4d804914ce499f26.jpg" alt="User profile picture showing a person in nature" data-ai-hint="person nature" />
              <AvatarFallback><UserCircle2 className="h-12 w-12" /></AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Hello, Earth Ally!</h1>
              <p className="text-lg opacity-90">Your journey to a greener planet starts here.</p>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl"><Award className="text-accent h-6 w-6" /><h2>Your Impact Snapshot (Illustrative)</h2></CardTitle>
          <CardDescription>Small changes, big impact. See your potential contributions!</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Zap, label: 'CO₂ Saved This Week', value: '12 kg (Est.)', color: 'text-green-500' },
            { icon: Droplets, label: 'Water Conserved', value: '50 L (Est.)', color: 'text-blue-500' },
            { icon: Trees, label: 'Trees Nurtured (Equivalent)', value: '0.5 (Est.)', color: 'text-yellow-600' },
          ].map(item => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex flex-col items-center p-4 border rounded-lg bg-muted/30 text-center">
                <Icon className={`h-10 w-10 mb-2 ${item.color}`} />
                <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                <p className="text-lg font-semibold text-foreground">{item.value}</p>
              </div>
            );
          })}
        </CardContent>
         <CardFooter>
            <p className="text-xs text-muted-foreground italic">These are illustrative examples to inspire real-world actions. Actual impact tracking would require more complex integration.</p>
         </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl"><ShieldCheck className="text-primary h-6 w-6" /><h3>Your Climate Pledge</h3></CardTitle>
          <CardDescription>Define your commitment to a sustainable future. Your pledge is saved locally in your browser.</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            value={pledge}
            onChange={handlePledgeChange}
            placeholder="Write your personal climate pledge..."
            rows={4}
            className="mb-4"
            aria-label="Your Climate Pledge Text Area"
          />
          <Button onClick={handleSavePledge}>
            <Edit3 className="mr-2 h-4 w-4" /> Save Pledge
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl"><CheckCircle className="text-green-600 h-6 w-6" /><h3>Eco-Actions & Goals</h3></CardTitle>
          <CardDescription>Track your progress on simple, impactful actions. Your progress is saved locally.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 mb-4">
            {ecoActions.map(action => (
              <div key={action.id} className="flex items-center justify-between p-3 border rounded-md bg-muted/20 hover:bg-muted/40 transition-colors">
                <Label htmlFor={action.id} className="flex-1 cursor-pointer text-sm">{action.label}</Label>
                <Checkbox
                  id={action.id}
                  checked={action.checked}
                  onCheckedChange={() => handleActionToggle(action.id)}
                  aria-label={action.label}
                />
              </div>
            ))}
          </div>
          <div className="space-y-1">
            <Label htmlFor="eco-action-progress">Your Progress: {completedActionsCount} of {totalActions} actions</Label>
            <Progress id="eco-action-progress" value={progressPercentage} aria-label={`${Math.round(progressPercentage)}% actions completed`} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl"><Settings className="text-secondary h-6 w-6" /><h3>Quick Settings</h3></CardTitle>
          <CardDescription>Customize your Earth Insights experience.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/30">
            <div className="flex items-center gap-2">
                {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                <Label htmlFor="profile-dark-mode-toggle">Dark Mode</Label>
            </div>
            <Switch
              id="profile-dark-mode-toggle"
              checked={isDarkMode}
              onCheckedChange={setIsDarkMode}
              aria-label="Toggle dark mode"
            />
          </div>
          <Button variant="outline" asChild className="h-auto p-4 text-left">
            <Link href="/settings" className="flex items-center justify-between w-full">
                <div>
                    <p className="font-medium">Full Settings Panel</p>
                    <p className="text-xs text-muted-foreground">Themes, fonts, layout & more.</p>
                </div>
                <Settings className="h-5 w-5 text-primary" />
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl"><BookOpen className="text-blue-500 h-6 w-6" /><h3>Earth Wellness Feed</h3></CardTitle>
          <CardDescription>Stay informed with tips and facts for a healthier planet.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ecoTips.map(tip => {
            const Icon = tip.icon;
            return (
              <Card key={tip.id} className="bg-muted/40 p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                    <Icon className="h-8 w-8 text-accent mt-1 shrink-0" />
                    <div>
                        <h4 className="font-semibold text-foreground mb-1">{tip.title}</h4>
                        <p className="text-xs text-muted-foreground">{tip.content}</p>
                    </div>
                </div>
              </Card>
            );
          })}
        </CardContent>
        <CardFooter>
            <p className="text-xs text-muted-foreground italic">Feed content is illustrative and would update periodically in a full version of the application.</p>
        </CardFooter>
      </Card>
    </main>
  );
}
