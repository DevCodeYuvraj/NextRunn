import { defaultAvatars } from "@/data/avatarRegistry";

const STORAGE_KEY = "nextrun_avatars";

export function getAvatars() {
  if (typeof window === "undefined") {
    return defaultAvatars;
  }

  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return defaultAvatars;
  }

  try {
    return [
      ...defaultAvatars,
      ...JSON.parse(saved),
    ];
  } catch {
    return defaultAvatars;
  }
}

export function saveUploadedAvatar(image) {
  const uploaded = {
    id: `avatar_${Date.now()}`,
    image,
    type: "uploaded",
  };

  const uploadedAvatars = getAvatars().filter(
    (avatar) => avatar.type === "uploaded"
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([
      ...uploadedAvatars,
      uploaded,
    ])
  );

  return uploaded.id;
}

export function getAvatarById(id) {
  return (
    getAvatars().find(
      (avatar) => avatar.id === id
    ) || null
  );
}

export function removeUploadedAvatar(id) {
  const uploadedAvatars = getAvatars()
    .filter(
      (avatar) =>
        avatar.type === "uploaded" &&
        avatar.id !== id
    );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(uploadedAvatars)
  );
}