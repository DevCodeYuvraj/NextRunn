export const defaultAvatars = [
  { id: "admin", image: "/avatars/admin.jpg" },
  { id: "user01", image: "/avatars/user01.jpg" },
  { id: "user02", image: "/avatars/user02.jpg" },
  { id: "user03", image: "/avatars/user03.jpg" },
  { id: "user04", image: "/avatars/user04.jpg" },
  { id: "user05", image: "/avatars/user05.jpg" },
  { id: "user06", image: "/avatars/user06.jpg" },
  { id: "user07", image: "/avatars/user07.jpg" },
  { id: "user08", image: "/avatars/user08.jpg" },
  { id: "user09", image: "/avatars/user09.jpg" },
  { id: "user10", image: "/avatars/user10.jpg" },
  { id: "user11", image: "/avatars/user11.jpg" },
  { id: "user12", image: "/avatars/user12.jpg" },
  { id: "user13", image: "/avatars/user13.jpg" },
  { id: "user14", image: "/avatars/user14.jpg" },
  { id: "user15", image: "/avatars/user15.jpg" },
  { id: "user16", image: "/avatars/user16.jpg" },
  { id: "user17", image: "/avatars/user17.jpg" },
  { id: "user18", image: "/avatars/user18.jpg" },
];

export const getAvatarById = (id) =>
  defaultAvatars.find((avatar) => avatar.id === id);

export const getAvatar = (index = 0) =>
  defaultAvatars[(index % (defaultAvatars.length - 1)) + 1];

export const getRandomAvatar = () =>
  defaultAvatars[
    Math.floor(Math.random() * (defaultAvatars.length - 1)) + 1
  ];