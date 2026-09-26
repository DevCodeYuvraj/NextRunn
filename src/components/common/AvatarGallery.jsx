"use client";

import AvatarItem from "./AvatarItem";

import styles from "./AvatarGallery.module.scss";

export default function AvatarGallery({
  avatars,
  selectedAvatar,
  onSelect,
}) {
  return (
    <div className={styles.gallery}>
      {avatars.map((avatar) => (
        <AvatarItem
          key={avatar.id}
          avatar={avatar}
          selected={
            selectedAvatar?.id === avatar.id
          }
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}