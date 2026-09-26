"use client";

import Avatar from "@/components/common/Avatar";
import { getAvatar } from "@/data/avatarData";

import styles from "./ReviewCard.module.scss";

export default function ReviewCard({
  name,
  review,
}) {
  /*
   * Generate a stable avatar from the review name.
   * We don't use Math.random() because that would
   * change the avatar every render.
   */
  const avatarIndex =
    name
      .split("")
      .reduce(
        (total, character) =>
          total + character.charCodeAt(0),
        0
      ) % 18;

  const avatar = getAvatar(avatarIndex);

  return (
    <article className={styles.card}>
      <Avatar
        src={avatar?.image || null}
        alt={name}
        size={56}
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