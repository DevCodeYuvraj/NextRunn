export const avatars = {
  admin: "/avatars/admin.jpg",
  user01: "/avatars/user01.jpg",
  user02: "/avatars/user02.jpg",
  user03: "/avatars/user03.jpg",
  user04: "/avatars/user04.jpg",
  user05: "/avatars/user05.jpg",
  user06: "/avatars/user06.jpg",
  user07: "/avatars/user07.jpg",
  user08: "/avatars/user08.jpg",
  user09: "/avatars/user09.jpg",
  user10: "/avatars/user10.jpg",
  user11: "/avatars/user11.jpg",
  user12: "/avatars/user12.jpg",
  user13: "/avatars/user13.jpg",
  user14: "/avatars/user14.jpg",
  user15: "/avatars/user15.jpg",
  user16: "/avatars/user16.jpg",
  user17: "/avatars/user17.jpg",
  user18: "/avatars/user18.jpg",
};

export const defaultAvatars = Object.entries(avatars).map(
  ([id, image]) => ({
    id,
    image,
  })
);

export const getAvatarById = (id) =>
  defaultAvatars.find((avatar) => avatar.id === id);

export const getAvatar = (index = 0) =>
  defaultAvatars[index % defaultAvatars.length];

export const getRandomAvatar = () =>
  defaultAvatars[
    Math.floor(Math.random() * defaultAvatars.length)
  ];