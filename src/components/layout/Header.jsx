"use client";

import { MdMenu } from "react-icons/md";

import HeaderSearch from "./HeaderSearch";
import NotificationDropdown from "./NotificationDropdown";
import SettingsDropdown from "./SettingsDropdown";
import ProfileDropdown from "./ProfileDropdown";

import styles from "./Header.module.scss";

export default function Header({
  title,
  onToggleSidebar,
  sidebarOpen,
}) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button
          type="button"
          className={styles.menuToggle}
          onClick={onToggleSidebar}
          aria-label={sidebarOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={sidebarOpen}
        >
          <MdMenu size={22} />
        </button>

        <h1 className={styles.title}>
          {title}
        </h1>
      </div>

      <div className={styles.actions}>
        <HeaderSearch />

        <NotificationDropdown />

        <SettingsDropdown />

        <ProfileDropdown />
      </div>
    </header>
  );
}