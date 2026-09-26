"use client";

import {
  MdAdd,
  MdInbox,
  MdSend,
  MdStar,
  MdDrafts,
  MdDelete,
  MdKeyboardArrowDown,
  MdAddCircleOutline,
  MdMoreHoriz,
  MdBookmark,
  MdClose,
} from "react-icons/md";

import styles from "./MailSidebar.module.scss";

const folders = [
  {
    id: "inbox",
    title: "Inbox",
    icon: MdInbox,
    count: 17,
  },
  {
    id: "sent",
    title: "Sent Emails",
    icon: MdSend,
  },
  {
    id: "favourite",
    title: "Favourite",
    icon: MdStar,
  },
  {
    id: "draft",
    title: "Draft",
    icon: MdDrafts,
  },
  {
    id: "deleted",
    title: "Deleted",
    icon: MdDelete,
  },
  {
    id: "more",
    title: "More",
    icon: MdKeyboardArrowDown,
  },
];

const labels = [
  {
    id: "work",
    title: "Work in Progress",
    className: "pink",
  },
  {
    id: "read",
    title: "Read Later",
    className: "cyan",
  },
  {
    id: "important",
    title: "Importants",
    className: "blue",
  },
  {
    id: "offers",
    title: "Offers",
    className: "purple",
  },
];

export default function MailSidebar({
  onCompose,
  activeFolder,
  activeLabel,
  onFolderChange,
  onLabelChange,
  isOpen = false,
  onClose,
}) {
  const handleFolderClick = (id) => {
    onFolderChange(id);
    if (onClose) onClose();
  };

  const handleLabelClick = (id) => {
    onLabelChange(id);
    if (onClose) onClose();
  };

  const handleComposeClick = () => {
    onCompose();
    if (onClose) onClose();
  };

  return (
    <aside
      className={`${styles.mailSidebar} ${
        isOpen ? styles.open : ""
      }`}
      aria-label="Mailbox Folders"
    >
      <div className={styles.mobileHeader}>
        <h3>Mailboxes</h3>
        {onClose && (
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close mailboxes"
          >
            <MdClose size={20} />
          </button>
        )}
      </div>

      <button
        type="button"
        className={styles.newMessageButton}
        onClick={handleComposeClick}
      >
        <MdAdd size={20} />
        <span>New Message</span>
      </button>

      <nav className={styles.folderNavigation}>
        {folders.map((folder) => {
          const Icon = folder.icon;

          return (
            <button
              key={folder.id}
              type="button"
              onClick={() => handleFolderClick(folder.id)}
              className={`${styles.folderItem} ${
                activeFolder === folder.id
                  ? styles.activeFolder
                  : ""
              }`}
            >
              <span className={styles.folderInfo}>
                <Icon size={18} />
                <span>{folder.title}</span>
              </span>

              {folder.count && (
                <span className={styles.folderCount}>
                  {folder.count}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <div className={styles.labelsSection}>
        <div className={styles.labelsHeader}>
          <span>Labels</span>

          <button
            type="button"
            className={styles.moreButton}
            aria-label="More label options"
          >
            <MdMoreHoriz size={18} />
          </button>
        </div>

        <div className={styles.labelsList}>
          {labels.map((label) => (
            <button
              key={label.id}
              type="button"
              onClick={() => handleLabelClick(label.id)}
              className={`${styles.labelItem} ${
                activeLabel === label.id
                  ? styles.activeLabel
                  : ""
              }`}
            >
              <MdBookmark
                size={17}
                className={styles[label.className]}
              />

              <span>{label.title}</span>
            </button>
          ))}

          <button
            type="button"
            className={styles.addLabelButton}
          >
            <MdAddCircleOutline size={18} />
            <span>Add label</span>
          </button>
        </div>
      </div>
    </aside>
  );
}