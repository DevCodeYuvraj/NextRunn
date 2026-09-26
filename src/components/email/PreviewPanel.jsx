"use client";

import { useState } from "react";

import Avatar from "@/components/common/Avatar";

import {
  MdDelete,
  MdFullscreen,
  MdCancel,
  MdBookmark,
  MdInfo,
  MdStar,
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdFormatSize,
  MdFormatAlignLeft,
  MdFormatAlignCenter,
  MdFormatAlignRight,
  MdAttachFile,
  MdImage,
  MdMoreHoriz,
  MdSend,
  MdArrowBack,
} from "react-icons/md";

import styles from "./PreviewPanel.module.scss";

export default function PreviewPanel({
  mail,
  onBack,
  isMobileActive = false,
}) {
  const [reply, setReply] = useState("");

  if (!mail) {
    return (
      <aside
        className={`${styles.previewPanel} ${
          isMobileActive ? styles.mobileActive : styles.mobileHidden
        }`}
      >
        <div className={styles.previewTop}>
          <div>
            {onBack && (
              <button
                type="button"
                className={styles.backButton}
                onClick={onBack}
              >
                <MdArrowBack size={18} />
                <span>Back to emails</span>
              </button>
            )}

            <h2 className={styles.previewTitle}>
              Preview
            </h2>

            <span className={styles.inboxText}>
              No email selected
            </span>
          </div>
        </div>
      </aside>
    );
  }

  function handleSend() {
    if (!reply.trim()) return;

    console.log("Reply:", reply);
    setReply("");
  }

  return (
    <aside
      className={`${styles.previewPanel} ${
        isMobileActive ? styles.mobileActive : styles.mobileHidden
      }`}
    >
      {/* Mobile Back Navigation */}
      {onBack && (
        <div className={styles.mobileBackRow}>
          <button
            type="button"
            className={styles.backButton}
            onClick={onBack}
          >
            <MdArrowBack size={18} />
            <span>Back to emails</span>
          </button>
        </div>
      )}

      {/* ================= HEADER ================= */}

      <div className={styles.previewTop}>
        <div>
          <h2 className={styles.previewTitle}>
            Preview
          </h2>

          <span className={styles.inboxText}>
            {mail.folder.charAt(0).toUpperCase() +
              mail.folder.slice(1)}
          </span>
        </div>

        <div className={styles.topActions}>
          <button type="button" aria-label="Delete email">
            <MdDelete />
          </button>

          <button type="button" aria-label="Fullscreen">
            <MdFullscreen />
          </button>

          <button
            type="button"
            aria-label="Close"
            onClick={onBack}
          >
            <MdCancel />
          </button>
        </div>
      </div>

      {/* ================= LABEL ================= */}

      <div className={styles.labelRow}>
        {mail.badge ? (
          <div
            className={`${styles.mailLabel} ${
              mail.badgeColor === "work"
                ? styles.workLabel
                : styles.importantLabel
            }`}
          >
            <MdBookmark size={13} />
            <span>{mail.badge}</span>
          </div>
        ) : (
          <div />
        )}

        <div className={styles.labelActions}>
          <button type="button" aria-label="Info">
            <MdInfo />
          </button>

          <button type="button" aria-label="Star">
            <MdStar
              color={mail.starred ? "#FFC107" : "#BFC8D7"}
            />
          </button>
        </div>
      </div>

      {/* ================= SUBJECT ================= */}

      <h3 className={styles.subject}>
        {mail.subject}
      </h3>

      {/* ================= DATE ================= */}

      <p className={styles.date}>
        {mail.date}
      </p>

      {/* ================= SENDER ================= */}

      <div className={styles.sender}>
        <Avatar
          src={mail.avatar}
          alt={mail.sender}
          size={58}
        />

        <div className={styles.senderDetails}>
          <h4>{mail.sender}</h4>
          <p>{mail.email}</p>
        </div>
      </div>

      {/* ================= MESSAGE ================= */}

      <div className={styles.message}>
        {mail.fullMessage
          .split("\n")
          .map((line, index) => (
            <p key={index}>{line}</p>
          ))}
      </div>

      {/* ================= REPLY ================= */}

      <div className={styles.replySection}>
        <div className={styles.editor}>
          <textarea
            placeholder="Write your message here..."
            value={reply}
            onChange={(event) =>
              setReply(event.target.value)
            }
          />

          <div className={styles.formatToolbar}>
            <div className={styles.textTools}>
              <button type="button" aria-label="Bold">
                <MdFormatBold />
              </button>

              <button type="button" aria-label="Italic">
                <MdFormatItalic />
              </button>

              <button type="button" aria-label="Underline">
                <MdFormatUnderlined />
              </button>

              <button type="button" aria-label="Font size">
                <MdFormatSize />
              </button>
            </div>

            <div className={styles.alignTools}>
              <button type="button" aria-label="Align left">
                <MdFormatAlignLeft />
              </button>

              <button type="button" aria-label="Align center">
                <MdFormatAlignCenter />
              </button>

              <button type="button" aria-label="Align right">
                <MdFormatAlignRight />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.sendToolbar}>
          <div className={styles.attachmentTools}>
            <button type="button" aria-label="Attach file">
              <MdAttachFile />
            </button>

            <button type="button" aria-label="Attach image">
              <MdImage />
            </button>

            <button type="button" aria-label="More">
              <MdMoreHoriz />
            </button>
          </div>

          <button
            type="button"
            className={styles.sendButton}
            onClick={handleSend}
          >
            <span>Send</span>
            <MdSend />
          </button>
        </div>
      </div>
    </aside>
  );
}