"use client";

import Avatar from "@/components/common/Avatar";
import { useAvatarContext } from "@/context/AvatarContext";
import {
  MdMoreHoriz,
  MdVideocam,
} from "react-icons/md";

import styles from "./ConversationHeader.module.scss";

export default function ConversationHeader({
  chat,
}) {
  const { getByEmail } =
    useAvatarContext();

  const contact =
    chat.type === "chat"
      ? getByEmail(chat.email)
      : null;

  const avatar =
    contact?.image ||
    chat.avatar;
  return (
    <header className={styles.header}>
      <div className={styles.person}>
        <Avatar
          src={avatar}
          alt={chat.name}
          size={52}
          online={chat.online}
        />

        <div>
          <h3>
            {chat.name}

            {chat.type === "group" &&
              chat.count &&
              ` (${chat.count})`}
          </h3>

          <p>
            {chat.online
              ? "Online"
              : "Offline"}
          </p>
        </div>
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          aria-label="Video call"
          onClick={() => { }}
        >
          <MdVideocam />
        </button>

        <button
          type="button"
          aria-label="More options"
          onClick={() => { }}
        >
          <MdMoreHoriz />
        </button>
      </div>
    </header>
  );
}