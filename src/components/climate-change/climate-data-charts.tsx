
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { AreaChart, LineChart, CartesianGrid, XAxis, YAxis, Area, Line } from 'recharts';
import type { ChartConfig } from '@/components/ui/chart';
import { Thermometer, BarChart3, Waves } from 'lucide-react'; // Removed CloudRainWind

// Re-using placeholder data from dashboard example, adjust as needed
const temperatureData = [
  { year: '2014', anomaly: 0.74 },
  { year: '2015', anomaly: 0.90 },
  { year: '2016', anomaly: 1.01 },
  { year: '2017', anomaly: 0.92 },
  { year: '2018', anomaly: 0.85 },
  { year: '2019', anomaly: 0.98 },
  { year: '2020', anomaly: 1.01 },
  { year: '2021', anomaly: 0.84 },
  { year: '2022', anomaly: 0.89 },
  { year: '2023', anomaly: 1.18 },
];

const co2Data = [
  { year: '2014', ppm: 398.6 },
  { year: '2015', ppm: 400.9 },
  { year: '2016', ppm: 404.2 },
  { year: '2017', ppm: 406.6 },
  { year: '2018', ppm: 408.5 },
  { year: '2019', ppm: 411.4 },
  { year: '2020', ppm: 413.2 },
  { year: '2021', ppm: 416.4 },
  { year: '2022', ppm: 418.6 },
  { year: '2023', ppm: 421.1 },
];

const seaLevelData = [
  { year: '2014', change: 66 },
  { year: '2015', change: 73 },
  { year: '2016', change: 77 },
  { year: '2017', change: 79 },
  { year: '2018', change: 83 },
  { year: '2019', change: 88 },
  { year: '2020', change: 91 },
  { year: '2021', change: 97 },
  { year: '2022', change: 99 },
  { year: '2023', change: 105 },
];

const tempChartConfig = {
  anomaly: {
    label: "Temperature Anomaly (°C)",
    color: "hsl(var(--accent))", // Terracotta
    icon: Thermometer,
  },
} satisfies ChartConfig;

const co2ChartConfig = {
  ppm: {
    label: "CO₂ Levels (ppm)",
    color: "hsl(var(--muted))", // Warm Brown
    icon: BarChart3,
  },
} satisfies ChartConfig;

const seaLevelChartConfig = {
  change: {
    label: "Sea Level Change (mm)",
    color: "hsl(var(--secondary))", // Sky Blue
    icon: Waves,
  },
} satisfies ChartConfig;


export default function ClimateDataCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
      {/* Temperature Chart + Explanation */}
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Thermometer className="h-5 w-5 text-accent" />
            Global Temperature Trend
          </CardTitle>
          <CardDescription>Annual temperature anomaly (°C) relative to 1951-1980 average.</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <ChartContainer config={tempChartConfig} className="h-[200px] w-full">
            <AreaChart data={temperatureData} margin={{ left: -20, right: 10, top: 5, bottom: 0 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="year" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} fontSize={12} domain={['auto', 'auto']} unit="°C" />
              <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" hideLabel />} />
              <defs>
                  <linearGradient id="fillTemp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0.1}/>
                  </linearGradient>
              </defs>
              <Area dataKey="anomaly" type="natural" fill="url(#fillTemp)" stroke="hsl(var(--accent))" stackId="a" name="Anomaly" />
              <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
          </ChartContainer>
        </CardContent>
        <Accordion type="single" collapsible className="w-full px-6 pb-4">
          <AccordionItem value="explanation-temp">
            <AccordionTrigger className="text-sm pt-2">Explanation</AccordionTrigger>
            <AccordionContent className="text-xs space-y-2">
               <p><strong>Simple:</strong> This chart shows how much warmer or cooler the average global temperature was each year compared to the average temperature between 1951 and 1980. Positive numbers mean it was warmer than average.</p>
               <p><strong>Expert:</strong> The graph displays the global mean surface temperature anomaly, calculated relative to the 1951-1980 baseline period. Data is aggregated from land and ocean measurements. The upward trend indicates significant global warming, largely attributed to anthropogenic greenhouse gas emissions.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>

      {/* CO2 Chart + Explanation */}
       <Card className="flex flex-col">
        <CardHeader>
           <CardTitle className="flex items-center gap-2">
             <BarChart3 className="h-5 w-5 text-muted-foreground" />
             Atmospheric CO₂ Levels
           </CardTitle>
          <CardDescription>Global average atmospheric carbon dioxide concentration (ppm).</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <ChartContainer config={co2ChartConfig} className="h-[200px] w-full">
             <LineChart data={co2Data} margin={{ left: -20, right: 10, top: 5, bottom: 0 }}>
               <CartesianGrid vertical={false} strokeDasharray="3 3"/>
               <XAxis dataKey="year" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
               <YAxis tickLine={false} axisLine={false} tickMargin={8} fontSize={12} domain={['auto', 'auto']} unit=" ppm" />
               <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" hideLabel />} />
               <Line type="monotone" dataKey="ppm" stroke="hsl(var(--muted))" strokeWidth={2} dot={false} name="CO₂ Levels" />
                <ChartLegend content={<ChartLegendContent />} />
             </LineChart>
          </ChartContainer>
        </CardContent>
         <Accordion type="single" collapsible className="w-full px-6 pb-4">
           <AccordionItem value="explanation-co2">
             <AccordionTrigger className="text-sm pt-2">Explanation</AccordionTrigger>
             <AccordionContent className="text-xs space-y-2">
               <p><strong>Simple:</strong> This chart shows the amount of carbon dioxide (CO₂) gas in the air, measured in parts per million (ppm). CO₂ traps heat, and higher levels contribute to global warming. The levels have been rising steadily.</p>
               <p><strong>Expert:</strong> The data represents the globally averaged mole fraction of atmospheric carbon dioxide. Measurements typically originate from baseline observatories like Mauna Loa. The consistent increase reflects the accumulation of anthropogenic CO₂ emissions, primarily from fossil fuel combustion and land-use change, exceeding natural sinks.</p>
             </AccordionContent>
           </AccordionItem>
         </Accordion>
      </Card>

       {/* Sea Level Chart + Explanation */}
        <Card className="lg:col-span-full flex flex-col"> {/* Allow this to span full width if it's the last in a 2-col grid */}
         <CardHeader>
           <CardTitle className="flex items-center gap-2">
             <Waves className="h-5 w-5 text-secondary" />
             Global Mean Sea Level
           </CardTitle>
           <CardDescription>Change in global average sea level (mm) since 1993.</CardDescription>
         </CardHeader>
         <CardContent className="flex-grow">
           <ChartContainer config={seaLevelChartConfig} className="h-[200px] w-full">
              <AreaChart data={seaLevelData} margin={{ left: -20, right: 10, top: 5, bottom: 0 }}>
               <CartesianGrid vertical={false} strokeDasharray="3 3" />
               <XAxis dataKey="year" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
               <YAxis tickLine={false} axisLine={false} tickMargin={8} fontSize={12} domain={['auto', 'auto']} unit=" mm" />
               <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" hideLabel />} />
               <defs>
                    <linearGradient id="fillSea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--secondary))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--secondary))" stopOpacity={0.1}/>
                    </linearGradient>
                </defs>
               <Area dataKey="change" type="natural" fill="url(#fillSea)" stroke="hsl(var(--secondary))" stackId="a" name="Change" />
               <ChartLegend content={<ChartLegendContent />} />
             </AreaChart>
           </ChartContainer>
         </CardContent>
         <Accordion type="single" collapsible className="w-full px-6 pb-4">
           <AccordionItem value="explanation-sea">
             <AccordionTrigger className="text-sm pt-2">Explanation</AccordionTrigger>
             <AccordionContent className="text-xs space-y-2">
                <p><strong>Simple:</strong> This chart shows how much the average sea level across the world has risen since 1993, measured in millimeters. Rising sea levels are caused by melting glaciers and ice sheets, and the expansion of seawater as it warms.</p>
                <p><strong>Expert:</strong> The graph illustrates the change in global mean sea level (GMSL) based on satellite altimetry data, referenced to the 1993 baseline. The rise is primarily driven by thermal expansion of ocean water due to warming and the influx of meltwater from glaciers and ice sheets (Antarctica and Greenland). The rate of rise has accelerated in recent decades.</p>
             </AccordionContent>
           </AccordionItem>
         </Accordion>
       </Card>
    </div>
  );
}
