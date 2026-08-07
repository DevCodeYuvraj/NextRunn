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

export const avatarList = [
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
];

export const getAvatar = (index = 0) =>
  avatarList[index % avatarList.length];

export const getRandomAvatar = () =>
  avatarList[
    Math.floor(Math.random() * avatarList.length)
  ];