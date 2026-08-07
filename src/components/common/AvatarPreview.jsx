"use client";

import Image from "next/image";

import {
  MdPerson,
  MdEdit,
} from "react-icons/md";

import styles from "./AvatarPreview.module.css";

export default function AvatarPreview({
  avatar,
  onEdit,
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        {avatar ? (
          <Image
            src={avatar}
            alt="Avatar"
            width={170}
            height={170}
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder}>
            <MdPerson />
          </div>
        )}

        <button
          type="button"
          className={styles.edit}
          onClick={onEdit}
        >
          <MdEdit />
        </button>
      </div>

      <h3>Profile Avatar</h3>

      <p>
        Upload or choose an avatar
        from the gallery.
      </p>
    </div>
  );
}