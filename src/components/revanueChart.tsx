import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer } from "@/components/ui/chart";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart";

const chartData = [
  { month: "January", revanue: 166376 },
  { month: "February", revanue: 122174 },
  { month: "March", revanue: 85361 },
  { month: "April", revanue: 196216 },
  { month: "May", revanue: 96176 },
  { month: "June", revanue: 130376 },
];

import { type ChartConfig } from "@/components/ui/chart";

const chartConfig = {
  revanue: {
    label: "Revanue",
    color: "#2563eb",
  },
} satisfies ChartConfig;

export default function RevanueChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[200px] h-full max-h-[500px] mt-1 rounded-xl border py-6 shadow-sm"
    >
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />

        <Bar dataKey="revanue" fill="var(--color-revanue)" radius={4} />
        {/* <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} /> */}
      </BarChart>
    </ChartContainer>
  );
}
