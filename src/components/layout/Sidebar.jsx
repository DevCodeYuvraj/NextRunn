"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdClose } from "react-icons/md";

import { sidebarItems } from "@/data/sidebar";

import styles from "./Sidebar.module.scss";

export default function Sidebar({ isOpen = false, onClose }) {
  const pathname = usePathname();

  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}
      aria-label="Main Navigation"
    >
      <div className={styles.topBar}>
        <Link
          href="/dashboard"
          className={styles.logo}
          onClick={handleLinkClick}
        >
          Next<span>run.</span>
        </Link>

        {onClose && (
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <MdClose size={20} />
          </button>
        )}
      </div>

      <nav className={styles.navigation}>
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.path;

          return (
            <Link
              key={item.id}
              href={item.path}
              className={`${styles.navItem} ${
                active ? styles.active : ""
              }`}
              onClick={handleLinkClick}
            >
              <Icon className={styles.navIcon} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <div className={styles.footer}>
        <div className={styles.footerTitle}>
          Nextrun Clean Elegant Admin Dashboard
        </div>

        <div className={styles.footerMade}>
          Made with <span>❤</span> by Indixpert
        </div>
      </div>
    </aside>
  );
}