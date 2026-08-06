"use client";

import Avatar from "@/components/common/Avatar";

import styles from "./ChatContact.module.css";

export default function ChatContact({
  chat,
  active,
  onClick,
}) {
  return (
    <button
      type="button"
      className={`${styles.contact} ${
        active ? styles.active : ""
      }`}
      onClick={onClick}
    >
      <div className={styles.avatarWrapper}>
        <Avatar
          src={chat.avatar}
          alt={chat.name}
          size={52}
          online={chat.online}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.nameRow}>
          <strong>
            {chat.name}

            {chat.type === "group" && chat.count
              ? ` (${chat.count})`
              : ""}
          </strong>

          <time>{chat.time}</time>
        </div>

        <div className={styles.previewRow}>
          <p>{chat.preview}</p>

          {chat.unread > 0 && (
            <span className={styles.unread}>
              {chat.unread}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}