"use client";

import { useState } from "react";

import {
  MdSearch,
  MdInbox,
  MdBusinessCenter,
  MdGroup,
  MdFilterList,
  MdPushPin,
  MdMoreHoriz,
  MdMenu,
} from "react-icons/md";

import MailCard from "./MailCard";

import styles from "./MailContent.module.scss";

const tabs = [
  {
    id: "primary",
    title: "Primary",
    icon: MdInbox,
  },
  {
    id: "socials",
    title: "Socials",
    icon: MdGroup,
  },
  {
    id: "promotion",
    title: "Promotion",
    icon: MdBusinessCenter,
  },
];

export default function MailContent({
  mails,
  activeFolder,
  activeLabel,
  selectedMailId,
  onSelectMail,
  onStarClick,
  onOpenFolders,
  isMobilePreviewActive = false,
}) {
  const [activeTab, setActiveTab] = useState("primary");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMails = mails.filter((mail) => {
    let matchesNavigation = true;

    if (activeLabel) {
      matchesNavigation = mail.label === activeLabel;
    } else if (activeFolder === "favourite") {
      matchesNavigation = mail.starred;
    } else if (activeFolder === "more") {
      matchesNavigation = true;
    } else {
      matchesNavigation =
        activeFolder == null ? true : mail.folder === activeFolder;
    }

    const searchValue = searchTerm.toLowerCase();

    const matchesSearch =
      mail.sender.toLowerCase().includes(searchValue) ||
      mail.subject.toLowerCase().includes(searchValue) ||
      mail.message.toLowerCase().includes(searchValue);

    return matchesNavigation && matchesSearch;
  });

  return (
    <main
      className={`${styles.mailContent} ${
        isMobilePreviewActive ? styles.hiddenOnMobile : ""
      }`}
    >
      <div className={styles.contentHeader}>
        <div className={styles.titleArea}>
          {onOpenFolders && (
            <button
              type="button"
              className={styles.foldersBtn}
              onClick={onOpenFolders}
              aria-label="Open mailboxes drawer"
            >
              <MdMenu size={20} />
              <span>Folders</span>
            </button>
          )}

          <h1 className={styles.title}>Email</h1>
        </div>

        <div className={styles.searchBox}>
          <MdSearch size={18} />

          <input
            type="text"
            placeholder="Search here..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />
        </div>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.tabs}>
          {tabs.map((tab) => {
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`${styles.tabButton} ${
                  activeTab === tab.id ? styles.activeTab : ""
                }`}
              >
                <Icon size={15} />
                <span>{tab.title}</span>
              </button>
            );
          })}
        </div>

        <div className={styles.actions}>
          <button type="button" aria-label="Filter emails">
            <MdFilterList size={17} />
          </button>

          <button type="button" aria-label="Pin emails">
            <MdPushPin size={17} />
          </button>

          <button type="button" aria-label="More options">
            <MdMoreHoriz size={17} />
          </button>
        </div>
      </div>

      <div className={styles.mailList}>
        {filteredMails.length > 0 ? (
          filteredMails.map((mail) => (
            <MailCard
              key={mail.id}
              mail={mail}
              selected={selectedMailId === mail.id}
              onSelectMail={onSelectMail}
              onStarClick={onStarClick}
            />
          ))
        ) : (
          <div className={styles.emptyList}>
            <p>No emails found</p>
          </div>
        )}
      </div>
    </main>
  );
}