"use client";

import { useEffect, useState } from "react";

import {
  defaultAvatars,
} from "@/data/avatarRegistry";

import {
  getAvatars,
  saveUploadedAvatar,
} from "@/lib/avatarStorage";

import AvatarPreview from "./AvatarPreview";
import AvatarUpload from "./AvatarUpload";
import AvatarGallery from "./AvatarGallery";

import styles from "./AvatarPicker.module.css";

export default function AvatarPicker({
  value,
  onChange,
}) {
  const [avatars, setAvatars] =
    useState([]);

  const [selected, setSelected] =
    useState(null);

  useEffect(() => {
    const list = getAvatars();

    setAvatars(list);

    if (!value) {
      setSelected(list[0]);

      onChange?.(list[0]);
    } else {
      const avatar = list.find(
        (item) =>
          item.id === value.id
      );

      if (avatar) {
        setSelected(avatar);
      }
    }
  }, []);

  const handleSelect = (
    avatar
  ) => {
    setSelected(avatar);

    onChange?.(avatar);
  };

  const handleUpload =
    async (image) => {
      if (!image) return;

      const id =
        saveUploadedAvatar(image);

      const avatar = {
        id,
        image,
        type: "uploaded",
      };

      const list = [
        ...avatars,
        avatar,
      ];

      setAvatars(list);

      setSelected(avatar);

      onChange?.(avatar);
    };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <AvatarPreview
          avatar={
            selected?.image
          }
          onEdit={() => {}}
        />

        <AvatarUpload
          image={
            selected?.type ===
            "uploaded"
              ? selected.image
              : ""
          }
          onChange={
            handleUpload
          }
        />
      </div>

      <div className={styles.right}>
        <h3>
          Choose Default Avatar
        </h3>

        <AvatarGallery
          avatars={avatars}
          selectedAvatar={
            selected
          }
          onSelect={
            handleSelect
          }
        />
      </div>
    </div>
  );
}