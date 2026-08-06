"use client";

import { useState } from "react";

import { MdClose, MdSend } from "react-icons/md";

import styles from "./ComposeModal.module.css";

export default function ComposeModal({
  open,
  onClose,
  onSend,
}) {
  const [receiver, setReceiver] =
    useState("");

  const [subject, setSubject] =
    useState("");

  const [message, setMessage] =
    useState("");

  if (!open) return null;

  function resetForm() {
    setReceiver("");
    setSubject("");
    setMessage("");
  }

  function handleSend() {
    if (
      !receiver.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      return;
    }

    onSend({
      receiver,
      subject,
      message,
    });

    resetForm();
  }

  function handleClose() {
    resetForm();
    onClose();
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3>New Message</h3>

          <button
            type="button"
            onClick={handleClose}
          >
            <MdClose />
          </button>
        </div>

        <input
          type="email"
          placeholder="To"
          value={receiver}
          onChange={(e) =>
            setReceiver(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) =>
            setSubject(e.target.value)
          }
        />

        <textarea
          placeholder="Write your message..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
        />

        <div className={styles.footer}>
          <button
            type="button"
            className={styles.cancel}
            onClick={handleClose}
          >
            Cancel
          </button>

          <button
            type="button"
            className={styles.send}
            onClick={handleSend}
          >
            <MdSend />

            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  );
}