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
  return (
    <div
      className={`${styles.avatar} ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      <Image
        src={src || defaultAvatar}
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