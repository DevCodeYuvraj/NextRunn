"use client";

import Image from "next/image";

import styles from "./AvatarItem.module.scss";

export default function AvatarItem({
  avatar,
  selected,
  onSelect,
}) {
  return (
    <button
      type="button"
      className={`${styles.item} ${
        selected ? styles.selected : ""
      }`}
      onClick={() => onSelect(avatar)}
    >
      <Image
        src={avatar.image}
        alt={avatar.id}
        width={64}
        height={64}
        className={styles.image}
        unoptimized
      />

      {selected && (
        <span className={styles.check}>
          ✓
        </span>
      )}
    </button>
  );
}