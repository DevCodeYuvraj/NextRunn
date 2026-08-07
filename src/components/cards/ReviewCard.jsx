"use client";

import Avatar from "@/components/common/Avatar";
import { getAvatar } from "@/data/avatarData";

import styles from "./ReviewCard.module.css";

export default function ReviewCard({
  name,
  review,
  index,
}) {
  return (
    <article className={styles.card}>
      <Avatar
        src={getAvatar(index)}
        alt={name}
        size={54}
      />

      <h4 className={styles.name}>
        {name}
      </h4>

      <p className={styles.review}>
        {review}
      </p>
    </article>
  );
}