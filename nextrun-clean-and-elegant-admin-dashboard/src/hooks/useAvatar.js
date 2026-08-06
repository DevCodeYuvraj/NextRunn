"use client";

import { useAvatarContext } from "@/context/AvatarContext";

export default function useAvatar(
  id
) {
  const avatar =
    useAvatarContext();

  return {
    avatar:
      avatar.getAvatar(id),

    contact:
      avatar.getContact(id),

    refresh:
      avatar.refresh,
  };
}