import React from "react";
import RevanueChart from "./revanueChart";
import ViewsChart from "./viewsChart";

export default function ChartSecttion() {
  return (
    <div className="flex flex-wrap justify-around gap-40 mt-10">
      <div className="">
        <RevanueChart />
      </div>
      <div className="flex-1 ">
        <ViewsChart />
      </div>
    </div>
  );
}
