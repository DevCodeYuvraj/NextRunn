"use client";

import Avatar from "@/components/common/Avatar";

import { recentRecipients } from "@/data/invoiceData";

import styles from "./RecipientList.module.css";

export default function RecipientList() {
  return (
    <div className={styles.card}>
      <h3>Recent Recipient</h3>

      <div className={styles.row}>
        {recentRecipients.map((person) => (
          <div
            key={person.id}
            className={styles.person}
          >
            <Avatar
              src={person.avatar}
              alt={person.name}
              size={48}
            />

            <span>{person.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}