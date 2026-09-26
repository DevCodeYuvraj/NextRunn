"use client";

import Image from "next/image";

import defaultAvatar from "@/assets/avatars/default.jpg";
import { resolveAvatarSrc } from "@/data/avatarRegistry";

import styles from "./Avatar.module.scss";

export default function Avatar({
  src,
  alt = "Avatar",
  size = 44,
  online = false,
  className = "",
}) {
  let imageSrc = defaultAvatar;
  if (typeof src === "string") {
    const trimmed = src.trim();
    if (trimmed) {
      imageSrc = resolveAvatarSrc(trimmed, defaultAvatar);
    }
  } else if (src) {
    imageSrc = src;
  }

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
        unoptimized
      />

      {online && (
        <span className={styles.online}></span>
      )}
    </div>
  );
}