import user01 from "@/assets/avatars/user01.jpg";
import user02 from "@/assets/avatars/user02.jpg";
import user03 from "@/assets/avatars/user03.jpg";
import user04 from "@/assets/avatars/user04.jpg";
import user05 from "@/assets/avatars/user05.jpg";
import user06 from "@/assets/avatars/user06.jpg";

export const invoiceStats = [
  {
    id: 1,
    title: "Invoice Sent",
    value: "42",
    change: "12.5%",
    trend: "up",
    type: "sent",
  },
  {
    id: 2,
    title: "Pending Invoice",
    value: "15",
    change: "4.2%",
    trend: "down",
    type: "pending",
  },
  {
    id: 3,
    title: "Paid Invoice",
    value: "28",
    change: "8.4%",
    trend: "up",
    type: "paid",
  },
  {
    id: 4,
    title: "Unpaid Invoice",
    value: "08",
    change: "2.1%",
    trend: "down",
    type: "unpaid",
  },
];

export const invoices = [
  {
    id: 1,
    invoice: "#INV-0001",
    customer: "Jordan Smith",
    avatar: user01,
    date: "May 12, 2026",
    status: "Paid",
  },
  {
    id: 2,
    invoice: "#INV-0002",
    customer: "Tony Stark",
    avatar: user02,
    date: "May 10, 2026",
    status: "Pending",
  },
  {
    id: 3,
    invoice: "#INV-0003",
    customer: "Karen White",
    avatar: user03,
    date: "May 08, 2026",
    status: "Paid",
  },
  {
    id: 4,
    invoice: "#INV-0004",
    customer: "Alex Morgan",
    avatar: user04,
    date: "May 06, 2026",
    status: "Unpaid",
  },
  {
    id: 5,
    invoice: "#INV-0005",
    customer: "Sarah Miller",
    avatar: user05,
    date: "May 04, 2026",
    status: "Pending",
  },
  {
    id: 6,
    invoice: "#INV-0006",
    customer: "David Wilson",
    avatar: user06,
    date: "May 02, 2026",
    status: "Paid",
  },
];

export const recentRecipients = [
  {
    id: 1,
    name: "Jordan Smith",
    avatar: user01,
  },
  {
    id: 2,
    name: "Tony Stark",
    avatar: user02,
  },
  {
    id: 3,
    name: "Karen White",
    avatar: user03,
  },
  {
    id: 4,
    name: "Alex Morgan",
    avatar: user04,
  },
];

export const recipients = [
  {
    id: 1,
    name: "Jordan Smith",
    avatar: user01,
  },
  {
    id: 2,
    name: "Tony Stark",
    avatar: user02,
  },
  {
    id: 3,
    name: "Karen White",
    avatar: user03,
  },
  {
    id: 4,
    name: "Alex Morgan",
    avatar: user04,
  },
  {
    id: 5,
    name: "Sarah Miller",
    avatar: user05,
  },
  {
    id: 6,
    name: "David Wilson",
    avatar: user06,
  },
];

export const currencies = [
  "USD ($)",
  "EUR (€)",
  "GBP (£)",
  "INR (₹)",
];