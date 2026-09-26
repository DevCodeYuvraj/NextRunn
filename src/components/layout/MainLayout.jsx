"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import Sidebar from "./Sidebar";
import Header from "./Header";
import RightPanel from "./RightPanel";

import styles from "./MainLayout.module.scss";

const titles = {
  "/dashboard": "Dashboard",
  "/email": "Email",
  "/contacts": "Contacts",
  "/calendar": "Calendar",
  "/chat": "Chat",
  "/kanban": "Kanban",
  "/banking": "Banking",
  "/invoice": "Invoice",
  "/todo-list": "Todo List",
  "/file-manager": "File Manager",
  "/latest-activity": "Latest Activity",
  "/crypto": "Crypto",
  "/ticketing": "Ticketing",
  "/user": "User",
};

export default function MainLayout({
  children,
  showRightPanel = false,
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const title = titles[pathname] || "Dashboard";

  return (
    <div className={styles.layout}>
      {/* Mobile backdrop overlay */}
      <div
        className={`${styles.backdrop} ${
          sidebarOpen ? styles.backdropActive : ""
        }`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden={!sidebarOpen}
      />

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className={styles.main}>
        <Header
          title={title}
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
          sidebarOpen={sidebarOpen}
        />

        <div className={styles.content}>
          <div className={styles.page}>
            {children}
          </div>

          {showRightPanel ? <RightPanel /> : null}
        </div>
      </main>
    </div>
  );
}