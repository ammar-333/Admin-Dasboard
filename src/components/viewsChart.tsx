import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A simple pie chart";

const chartData = [
  { products: "Laptops", number: 275, fill: "var(--color-Laptops)" },
  { products: "Phones", number: 200, fill: "var(--color-Phones)" },
  { products: "Headphones", number: 187, fill: "var(--color-Headphones)" },
  { products: "Wathches", number: 173, fill: "var(--color-Wathches)" },
  { products: "other", number: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  number: {
    label: "number",
  },
  Laptops: {
    label: "Laptops",
    color: "var(--chart-1)",
  },
  Phones: {
    label: "Phones",
    color: "var(--chart-2)",
  },
  Headphones: {
    label: "Headphones",
    color: "var(--chart-3)",
  },
  Wathches: {
    label: "Wathches",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export default function ViewsChart() {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Sales by Category</CardTitle>
        <CardDescription>Product distribition</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={chartData} dataKey="number" nameKey="products" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing salled Products for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
