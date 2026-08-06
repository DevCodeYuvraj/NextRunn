"use client";

import Avatar from "@/components/common/Avatar";
import { useAvatarContext } from "@/context/AvatarContext";

import styles from "./UserMessageRow.module.css";

export default function UserMessageRow({
  message,
  onClick,
}) {
  const { contacts } =
    useAvatarContext();

  const linkedContact =
    contacts.find(
      (item) =>
        item.name ===
        message.name
    );

  const avatar =
    linkedContact?.image ||
    null;

  return (
    <button
      type="button"
      className={styles.row}
      onClick={onClick}
    >
      <Avatar
        src={avatar}
        alt={message.name}
        size={52}
      />

      <div className={styles.content}>
        <div className={styles.top}>
          <strong>
            {message.name}
          </strong>

          <span>
            {message.time}
          </span>
        </div>

        <div className={styles.bottom}>
          <p>
            {message.preview ||
              "Start a conversation"}
          </p>

          {message.unread >
            0 && (
            <span
              className={
                styles.unread
              }
            >
              {message.unread}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}