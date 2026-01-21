import React from "react";
import StatsGrid from "../statsGrid";
import ChartSecttion from "../chartSecttion";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <StatsGrid />
      <ChartSecttion />
    </div>
  );
}
