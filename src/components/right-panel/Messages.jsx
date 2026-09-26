"use client";

import { useState } from "react";

import Avatar from "@/components/common/Avatar";
import { getAvatar } from "@/data/avatarData";
import { messages } from "@/data/messages";

import styles from "./Messages.module.scss";

const INITIAL_MESSAGES = 3;

export default function Messages() {
  const [showAll, setShowAll] = useState(false);

  const visibleMessages = showAll
    ? messages
    : messages.slice(0, INITIAL_MESSAGES);

  function handleViewMore() {
    setShowAll(
      (previousState) => !previousState
    );
  }

  return (
    <section className={styles.messages}>
      <h3 className={styles.title}>
        Messages
      </h3>

      <div className={styles.messageList}>
        {visibleMessages.map(
          (message, index) => {
            const avatar = getAvatar(index);

            return (
              <article
                key={message.id}
                className={styles.messageItem}
              >
                <Avatar
                  src={avatar?.image || null}
                  alt={message.name}
                  size={46}
                />

                <div
                  className={
                    styles.messageContent
                  }
                >
                  <h4
                    className={styles.name}
                  >
                    {message.name}
                  </h4>

                  <p
                    className={
                      styles.message
                    }
                  >
                    {message.message}
                  </p>

                  <span
                    className={styles.time}
                  >
                    {message.time}
                  </span>
                </div>
              </article>
            );
          }
        )}
      </div>

      {messages.length >
        INITIAL_MESSAGES && (
        <button
          type="button"
          className={
            styles.viewMoreButton
          }
          onClick={handleViewMore}
          aria-expanded={showAll}
        >
          {showAll
            ? "Show Less"
            : "View More"}
        </button>
      )}
    </section>
  );
}