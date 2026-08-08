"use client";

import Image from "next/image";

import defaultAvatar from "@/assets/avatars/default.jpg";

import styles from "./Avatar.module.css";

export default function Avatar({
  src,
  alt = "Avatar",
  size = 44,
  online = false,
  className = "",
}) {
  /*
   * Next/Image can receive:
   * - a string path
   * - a static imported image object
   *
   * If src is empty, null, undefined, or invalid,
   * use the default avatar.
   */
  const imageSrc =
    typeof src === "string"
      ? src.trim() || defaultAvatar
      : src || defaultAvatar;

  return (
    <div
      className={`${styles.avatar} ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      <Image
        src={imageSrc}
        alt={alt}
        width={size}
        height={size}
        className={styles.image}
        draggable={false}
      />

      {online && (
        <span className={styles.online}></span>
      )}
    </div>
  );
}