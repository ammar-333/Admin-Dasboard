import {
  BarChart3,
  Calendar,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  Users,
  Zap,
} from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
  },
  {
    id: "user",
    icon: Users,
    label: "Users",
    count: "2.4k",
  },
  {
    id: "inventory",
    icon: Package,
    label: "Inventory",
    count: "536",
  },
  {
    id: "messages",
    icon: MessageSquare,
    label: "Messages",
  },
  {
    id: "calender",
    icon: Calendar,
    label: "Calender",
  },
  {
    id: "settings",
    icon: Settings,
    label: "Settings",
  },
];

export default function Sidebar({ collapsed }: { collapsed: boolean }) {
  const [ChosenBtn, setChosenBtn] = useState("dashboard");
  const navigate = useNavigate();

  function handleClick(clickedBtn: string) {
    setChosenBtn(clickedBtn);
    navigate(`${clickedBtn === "dashboard" ? "/" : clickedBtn}`);
  }

  return (
    <div
      className={`${collapsed ? "w-20" : "w-72"} bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10`}
    >
      {/* logo */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50 ">
        <div className="flex items-center space-x-3">
          {/* icon */}
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg ">
            <Zap />
          </div>
          {/* conditional rendering */}
          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold text-slate-800 dark:text-white dark:text-white">
                Ammar
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 ">
                Admin panel
              </p>
            </div>
          )}
        </div>
      </div>

      {/* navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.id}>
            <button
              className={`w-full flex items-center gap-x-3 p-3 rounded-xl hover:bg-slate-200/80 dark:hover:bg-slate-400/80 cursor-pointer ${item.id === ChosenBtn && `bg-slate-200/80 dark:bg-slate-400/80`}`}
              onClick={() => handleClick(item.id)}
            >
              <item.icon className="w-5 h-5" />
              {!collapsed && (
                <span className="flex items-center gap-x-3">
                  <span className="">{item.label}</span>
                  <span>
                    {item.count && (
                      <span className="bg-slate-300 dark:bg-slate-600 rounded-lg p-1.5 text-xs text-slate-900 dark:text-slate-200">
                        {item.count}
                      </span>
                    )}
                  </span>
                </span>
              )}
            </button>
          </div>
        ))}
      </nav>
    </div>
  );
}
