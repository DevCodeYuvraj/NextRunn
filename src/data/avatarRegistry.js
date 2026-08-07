import { avatars } from "./avatarData";
export function getAvatarById(id) {
  return defaultAvatars.find(
    avatar => avatar.id === id
  );
}
export const defaultAvatars = [
  {
    id: "user01",
    image: avatars.user01,
    type: "default",
  },
  {
    id: "user02",
    image: avatars.user02,
    type: "default",
  },
  {
    id: "user03",
    image: avatars.user03,
    type: "default",
  },
  {
    id: "user04",
    image: avatars.user04,
    type: "default",
  },
  {
    id: "user05",
    image: avatars.user05,
    type: "default",
  },
  {
    id: "user06",
    image: avatars.user06,
    type: "default",
  },
  {
    id: "user07",
    image: avatars.user07,
    type: "default",
  },
  {
    id: "user08",
    image: avatars.user08,
    type: "default",
  },
  {
    id: "user09",
    image: avatars.user09,
    type: "default",
  },
  {
    id: "user10",
    image: avatars.user10,
    type: "default",
  },
  {
    id: "user11",
    image: avatars.user11,
    type: "default",
  },
  {
    id: "user12",
    image: avatars.user12,
    type: "default",
  },
  {
    id: "user13",
    image: avatars.user13,
    type: "default",
  },
  {
    id: "user14",
    image: avatars.user14,
    type: "default",
  },
  {
    id: "user15",
    image: avatars.user15,
    type: "default",
  },
  {
    id: "user16",
    image: avatars.user16,
    type: "default",
  },
  {
    id: "user17",
    image: avatars.user17,
    type: "default",
  },
  {
    id: "user18",
    image: avatars.user18,
    type: "default",
  },
];