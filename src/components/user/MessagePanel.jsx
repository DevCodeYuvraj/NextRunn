"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  MdClose,
  MdSend,
} from "react-icons/md";

import Avatar from "@/components/common/Avatar";
import { useAvatarContext } from "@/context/AvatarContext";

import styles from "./MessagePanel.module.scss";

export default function MessagePanel({
  open,
  conversation,
  onClose,
  onSendMessage,
}) {
  const [text, setText] =
    useState("");

  const messagesEndRef =
    useRef(null);

  const { contacts } =
    useAvatarContext();

  const linkedContact =
    contacts.find(
      (item) =>
        item.name ===
        conversation?.name
    );

  const avatar =
    linkedContact?.image ||
    null;

  useEffect(() => {
    setText("");
  }, [conversation?.id]);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [
    open,
    conversation?.messages,
  ]);

  if (!open || !conversation) {
    return null;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!text.trim()) {
      return;
    }

    onSendMessage(
      conversation.id,
      text
    );

    setText("");
  }

  return (
    <div
      className={styles.overlay}
      onMouseDown={(event) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <section className={styles.panel}>
        <header className={styles.header}>
          <div>
            <Avatar
              src={avatar}
              alt={conversation.name}
              size={54}
            />

            <div>
              <h3>
                {conversation.name}
              </h3>

              <span>
                Conversation
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
          >
            <MdClose />
          </button>
        </header>

        <div className={styles.messages}>
          {conversation.messages
            .length > 0 ? (
            conversation.messages.map(
              (message) => (
                <div
                  key={message.id}
                  className={`${styles.message} ${
                    message.sender ===
                    "me"
                      ? styles.mine
                      : styles.theirs
                  }`}
                >
                  <div>
                    {message.text}
                  </div>

                  <span>
                    {message.time}
                  </span>
                </div>
              )
            )
          ) : (
            <div
              className={
                styles.empty
              }
            >
              Start your
              conversation
              with{" "}
              {
                conversation.name
              }
              .
            </div>
          )}

          <div
            ref={messagesEndRef}
          />
        </div>

        <form
          className={
            styles.composer
          }
          onSubmit={
            handleSubmit
          }
        >
          <input
            value={text}
            onChange={(e) =>
              setText(
                e.target.value
              )
            }
            placeholder="Write message..."
          />

          <button
            type="submit"
            disabled={
              !text.trim()
            }
          >
            <MdSend />
          </button>
        </form>
      </section>
    </div>
  );
}