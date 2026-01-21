import { useState } from "react";
import Dashboard from "./components//pages/dashboard";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { Route, Routes } from "react-router-dom";
import Analytics from "./components/pages/analytics";
import Users from "./components/pages/users";
import Inventory from "./components/pages/inventory";
import Messages from "./components/pages/messages";
import Calender from "./components/pages/calender";
import Settings from "./components/pages/settings";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all">
        <div className="flex h-screen overflow-hidden">
          <Sidebar collapsed={isCollapsed} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header setCollapsed={setIsCollapsed} />
            <main className="flex-1 overflow-y-auto p-6 space-y-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/user" element={<Users />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/calender" element={<Calender />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<h1>Not Found</h1>} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
