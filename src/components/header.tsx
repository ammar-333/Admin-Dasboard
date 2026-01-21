import { Bell, Menu, Search, Settings } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export default function Header({
  setCollapsed,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setCollapsed: any;
}) {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-6 py-4.5 ">
      <div className="flex items-center justify-between ">
        {/* left section */}
        <div className="flex items-center space-x-4 ">
          <button className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 hover:dark:bg-slate-800 ">
            <Menu
              className="w-7 h-7"
              onClick={() => setCollapsed((c: boolean) => !c)}
            />
          </button>

          <div className="hidden md:block">
            <h1 className="text-2xl font-black text-slate-800 dark:text-slate-300">
              Dashboard
            </h1>
            <p>Welcome back, Ammar! here what's happening today</p>
          </div>
        </div>

        {/* center */}
        <div className="flex-1 max-w-md mx-8 ">
          <div className="relative ">
            <Search className="absolute top-1/4 left-2 w-5 h-5" />
            <input
              type="text"
              placeholder="Search anything"
              className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-500 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 "
            />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center space-x-3">
          <ModeToggle />

          <button className="relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300">
            <Bell />
            <span className="absolute top-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center ">
              4
            </span>
          </button>

          <button className="rounded-s text-slate-600 dark:text-slate-300 relative right-1">
            <Settings className="w-5.5 h-5.5" />
          </button>

          <div className="flex items-center space-x-3 pl-3 border-l border-slate-200">
            <img
              src="/man.jpg"
              alt="user"
              className="w-8 h-8 rounded-full ring-2 ring-blue-500"
            />
            <div className="hidden md:block">
              <p className="text-sm text-slate-500 font-medium dark:text-slate-400">
                Ammar Shaban
              </p>
              <p className="text-xs text-slate-500">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
