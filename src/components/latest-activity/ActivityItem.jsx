"use client";

import Avatar from "@/components/common/Avatar";

import ActivityAttachments from "./ActivityAttachments";

import styles from "./ActivityItem.module.scss";

export default function ActivityItem({
  activity,
  last,
}) {
  return (
    <article
      className={`${styles.item} ${
        last ? styles.last : ""
      }`}
    >
      <div className={styles.timelineColumn}>
        <span
          className={`${styles.marker} ${
            styles[activity.color] || styles.blue
          }`}
        />

        {!last && (
          <span className={styles.line} />
        )}
      </div>

      <div className={styles.content}>
        <p className={styles.date}>
          {activity.date}
        </p>

        <div className={styles.descriptionRow}>
          {activity.actor && (
            <Avatar
              src={activity.avatar}
              alt={activity.actor}
              size={42}
            />
          )}

          <div className={styles.descriptionContent}>
            <p className={styles.description}>
              {activity.actor && (
                <>
                  <strong>
                    {activity.actor}
                  </strong>{" "}
                </>
              )}

              {activity.before}

              {activity.highlight && (
                <>
                  {" "}
                  <strong
                    className={styles.highlight}
                  >
                    {activity.highlight}
                  </strong>
                </>
              )}

              {activity.after && (
                <> {activity.after}</>
              )}
            </p>

            {activity.attachments?.length >
              0 && (
              <ActivityAttachments
                attachments={
                  activity.attachments
                }
              />
            )}
          </div>
        </div>
      </div>
    </article>
  );
}