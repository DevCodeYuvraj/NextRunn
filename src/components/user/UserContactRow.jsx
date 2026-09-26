"use client";

import Avatar from "@/components/common/Avatar";
import { useAvatarContext } from "@/context/AvatarContext";

import { MdEmail } from "react-icons/md";

import styles from "./UserContactRow.module.scss";

export default function UserContactRow({
  contact,
  onMessage,
}) {
  const { contacts } =
    useAvatarContext();

  const linkedContact =
    contacts.find(
      (item) =>
        item.name === contact.name
    );

  const avatar =
    linkedContact?.image ||
    contact.avatar;

  return (
    <div className={styles.row}>
      <div className={styles.person}>
        <Avatar
          src={avatar}
          alt={contact.name}
          size={52}
        />

        <div className={styles.info}>
          <strong>
            {contact.name}
          </strong>

          <span>
            {contact.role}
          </span>
        </div>
      </div>

      <button
        type="button"
        className={styles.message}
        onClick={onMessage}
        aria-label={`Message ${contact.name}`}
      >
        <MdEmail />
      </button>
    </div>
  );
}