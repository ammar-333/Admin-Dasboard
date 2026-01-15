import {
  ArrowRight,
  DollarSign,
  ShoppingCart,
  Users,
  View,
} from "lucide-react";
import React from "react";

const stats = [
  {
    title: "Total revenue",
    value: "$124,563",
    change: "+12.5%",
    icon: DollarSign,
    color: "text-emerald-500",
  },
  {
    title: "Active users",
    value: "8,563",
    change: "+8.9%",
    icon: Users,
    color: "text-inigo-500",
  },
  {
    title: "Total orders",
    value: "2,571",
    change: "+15.5%",
    icon: ShoppingCart,
    color: "text-purple-500",
  },
  {
    title: "Page Views",
    value: "45,213",
    change: "+2.5%",
    color: "text-orange-500",
    icon: View,
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white/80 dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200/50 dark:border-slate-500/50 "
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-4">
                {item.title}
              </p>
              <p className="text-3xl font-bold text-slate-800 dark:text-slate-50 mb-4">
                {item.value}
              </p>
              <div className="flex items-center space-x-2">
                <ArrowRight className="size-4" />
                <span className="text-sm text-emerald-500">{item.change}</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  vs last month
                </span>
              </div>
            </div>
            <div className={`p-3 rounded-xl ${item.color}`}>
              {<item.icon />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
