import React from "react";
import StatsGrid from "./statsGrid";
import ChartSecttion from "./chartSecttion";
import UsersTable from "./Users/UsersTable";

export default function Dashboard({ page }: { page: string }) {
  return (
    <div className="space-y-6">
      <StatsGrid />
      <ChartSecttion />
      <UsersTable />
      <p>{page}</p>
    </div>
  );
}
