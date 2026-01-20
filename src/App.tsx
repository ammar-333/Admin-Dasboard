import { useState } from "react";
import Dashboard from "./components/dashboard";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [dasboardPage, setDashboardPage] = useState("dashboard");

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all">
        <div className="flex h-screen overflow-hidden">
          <Sidebar collapsed={isCollapsed} setPage={setDashboardPage} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header setCollapsed={setIsCollapsed} />
            <main className="flex-1 overflow-y-auto p-6 space-y-6">
              <Dashboard page={dasboardPage} />
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
