import admin from "@/assets/avatars/admin.jpg";

import user01 from "@/assets/avatars/user01.jpg";
import user02 from "@/assets/avatars/user02.jpg";
import user03 from "@/assets/avatars/user03.jpg";
import user04 from "@/assets/avatars/user04.jpg";
import user05 from "@/assets/avatars/user05.jpg";
import user06 from "@/assets/avatars/user06.jpg";
import user07 from "@/assets/avatars/user07.jpg";
import user08 from "@/assets/avatars/user08.jpg";
import user09 from "@/assets/avatars/user09.jpg";
import user10 from "@/assets/avatars/user10.jpg";
import user11 from "@/assets/avatars/user11.jpg";
import user12 from "@/assets/avatars/user12.jpg";
import user13 from "@/assets/avatars/user13.jpg";
import user14 from "@/assets/avatars/user14.jpg";
import user15 from "@/assets/avatars/user15.jpg";
import user16 from "@/assets/avatars/user16.jpg";
import user17 from "@/assets/avatars/user17.jpg";
import user18 from "@/assets/avatars/user18.jpg";

export const avatars = {
  admin,
  user01,
  user02,
  user03,
  user04,
  user05,
  user06,
  user07,
  user08,
  user09,
  user10,
  user11,
  user12,
  user13,
  user14,
  user15,
  user16,
  user17,
  user18,
};

export const defaultAvatars = [
  { id: "admin", image: avatars.admin },
  { id: "user01", image: avatars.user01 },
  { id: "user02", image: avatars.user02 },
  { id: "user03", image: avatars.user03 },
  { id: "user04", image: avatars.user04 },
  { id: "user05", image: avatars.user05 },
  { id: "user06", image: avatars.user06 },
  { id: "user07", image: avatars.user07 },
  { id: "user08", image: avatars.user08 },
  { id: "user09", image: avatars.user09 },
  { id: "user10", image: avatars.user10 },
  { id: "user11", image: avatars.user11 },
  { id: "user12", image: avatars.user12 },
  { id: "user13", image: avatars.user13 },
  { id: "user14", image: avatars.user14 },
  { id: "user15", image: avatars.user15 },
  { id: "user16", image: avatars.user16 },
  { id: "user17", image: avatars.user17 },
  { id: "user18", image: avatars.user18 },
];

export const getAvatarById = (id) =>
  defaultAvatars.find((avatar) => avatar.id === id);

export const getAvatar = (index = 0) =>
  defaultAvatars[index % defaultAvatars.length];

export const getRandomAvatar = () =>
  defaultAvatars[
    Math.floor(Math.random() * defaultAvatars.length)
  ];