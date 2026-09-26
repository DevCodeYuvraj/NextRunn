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
  if (!id) return null;
  if (
    typeof id === "string" &&
    (id.startsWith("/") ||
      id.startsWith("data:") ||
      id.startsWith("http://") ||
      id.startsWith("https://"))
  ) {
    return { id, image: id };
  }

  return (
    getAvatars().find(
      (avatar) => avatar.id === id || avatar.image === id
    ) || null
  );
}

export function resolveAvatarSrc(imageRef, fallback = "/avatars/admin.jpg") {
  if (!imageRef) return fallback;
  if (
    typeof imageRef === "string" &&
    (imageRef.startsWith("/") ||
      imageRef.startsWith("data:") ||
      imageRef.startsWith("http://") ||
      imageRef.startsWith("https://"))
  ) {
    return imageRef;
  }
  const avatar = getAvatarById(imageRef);
  return avatar?.image || fallback;
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