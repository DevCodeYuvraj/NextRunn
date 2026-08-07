const admin = "/avatars/admin.jpg";

const user01 = "/avatars/user01.jpg";
const user02 = "/avatars/user02.jpg";
const user03 = "/avatars/user03.jpg";
const user04 = "/avatars/user04.jpg";
const user05 = "/avatars/user05.jpg";
const user06 = "/avatars/user06.jpg";
const user07 = "/avatars/user07.jpg";
const user08 = "/avatars/user08.jpg";
const user09 = "/avatars/user09.jpg";
const user10 = "/avatars/user10.jpg";
const user11 = "/avatars/user11.jpg";
const user12 = "/avatars/user12.jpg";
const user13 = "/avatars/user13.jpg";
const user14 = "/avatars/user14.jpg";
const user15 = "/avatars/user15.jpg";
const user16 = "/avatars/user16.jpg";
const user17 = "/avatars/user17.jpg";
const user18 = "/avatars/user18.jpg";
export const initialMails = [
  {
    id: 1,
    sender: "Samantha William",
    email: "samantha@email.com",
    subject: "Weekly Meeting Schedule with Stakeholders",
    message:
      "Architecto consequatur molestias repellat qui. Quia est sed doloremque veniam est rerum.",
    fullMessage:
      "Hi Nella,\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nI wanted to share the latest meeting schedule with all stakeholders. Please review the agenda and let me know if any changes are required before tomorrow.\n\nThanks,\nSamantha",
    time: "2h ago",
    date: "Today, March 30th 2021 | 04:45 PM",
    folder: "inbox",
    category: "primary",
    starred: false,
    unread: true,
    attachment: true,
    notification: null,
    badge: null,
    badgeColor: null,
    label: null,
    avatar: user01,
  },

  {
    id: 2,
    sender: "Tony Soap",
    email: "tony@email.com",
    subject: "Project Progress Update",
    message:
      "Architecto consequatur molestias repellat qui. Quia est sed doloremque veniam est rerum.",
    fullMessage:
      "Hi Nella,\n\nHere is the latest update regarding our project. Development is progressing according to schedule and all pending tasks from the previous sprint have now been completed.\n\nRegards,\nTony",
    time: "18 min ago",
    date: "Today, March 30th 2021 | 03:28 PM",
    folder: "inbox",
    category: "primary",
    starred: true,
    unread: true,
    attachment: false,
    notification: 2,
    badge: "Important",
    badgeColor: "important",
    label: "important",
    avatar: user02,
  },

  {
    id: 3,
    sender: "Jordan Nico",
    email: "jordan@email.com",
    subject: "Social Media Campaign",
    message:
      "The new social media campaign is now ready for review.",
    fullMessage:
      "Hello,\n\nThe social media campaign is now complete. Please review all creatives before publishing.\n\nRegards,\nJordan",
    time: "18 min ago",
    date: "Today, March 30th 2021 | 03:11 PM",
    folder: "inbox",
    category: "socials",
    starred: true,
    unread: false,
    attachment: false,
    notification: 1,
    badge: null,
    badgeColor: null,
    label: "read",
    avatar: user03,
  },

  {
    id: 4,
    sender: "Karen Hope",
    email: "karen@email.com",
    subject: "Website Design Update",
    message:
      "Latest website design screens are ready.",
    fullMessage:
      "Hi Nella,\n\nI have finished the latest website screens and uploaded all the design assets. Please review everything before tomorrow's client presentation.\n\nRegards,\nKaren",
    time: "18 min ago",
    date: "Today, March 30th 2021 | 02:56 PM",
    folder: "inbox",
    category: "promotion",
    starred: false,
    unread: false,
    attachment: true,
    notification: null,
    badge: "Work in Progress",
    badgeColor: "work",
    label: "work",
    avatar: user04,
  },

  {
    id: 5,
    sender: "You",
    email: "me@nextrun.com",
    subject: "Dashboard Analytics Report",
    message:
      "Latest dashboard analytics attached.",
    fullMessage:
      "Hello Team,\n\nPlease find attached the latest dashboard analytics report.\n\nRegards,\nNella",
    time: "Yesterday",
    date: "Yesterday | 02:30 PM",
    folder: "sent",
    category: "primary",
    starred: false,
    unread: false,
    attachment: true,
    notification: null,
    badge: null,
    badgeColor: null,
    label: null,
    avatar: admin,
  },

  {
    id: 6,
    sender: "You",
    email: "me@nextrun.com",
    subject: "Client Proposal",
    message:
      "Proposal sent successfully.",
    fullMessage:
      "Hello,\n\nPlease find attached the client proposal.\n\nRegards,\nNella",
    time: "Yesterday",
    date: "Yesterday | 11:15 AM",
    folder: "sent",
    category: "primary",
    starred: true,
    unread: false,
    attachment: true,
    notification: null,
    badge: "Important",
    badgeColor: "important",
    label: "important",
    avatar: admin,
  },

  {
    id: 7,
    sender: "Draft",
    email: "",
    subject: "Upcoming Project Discussion",
    message: "Draft message...",
    fullMessage:
      "This email is still in draft.",
    time: "1 day ago",
    date: "March 29th 2021 | 05:20 PM",
    folder: "draft",
    category: "primary",
    starred: false,
    unread: false,
    attachment: false,
    notification: null,
    badge: "Work in Progress",
    badgeColor: "work",
    label: "work",
    avatar: user05,
  },

  {
    id: 8,
    sender: "Alex Morgan",
    email: "alex@email.com",
    subject: "Meeting Notes",
    message:
      "Previous meeting notes.",
    fullMessage:
      "Attached are the notes from our previous meeting.",
    time: "3 days ago",
    date: "March 27th 2021 | 09:00 AM",
    folder: "deleted",
    category: "primary",
    starred: false,
    unread: false,
    attachment: false,
    notification: null,
    badge: null,
    badgeColor: null,
    label: null,
    avatar: user06,
  },

  {
    id: 9,
    sender: "Nextrun Team",
    email: "offers@nextrun.com",
    subject: "Special Offer",
    message:
      "Latest premium dashboard offer.",
    fullMessage:
      "Upgrade to Premium and unlock additional dashboard features.",
    time: "4 days ago",
    date: "March 26th 2021 | 10:00 AM",
    folder: "inbox",
    category: "promotion",
    starred: false,
    unread: false,
    attachment: false,
    notification: null,
    badge: null,
    badgeColor: null,
    label: "offers",
    avatar: user07,
  },
];