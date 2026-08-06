"use client";

import { useState } from "react";

import admin from "@/assets/avatars/admin.jpg";

import ComposeModal from "./ComposeModal";
import MailSidebar from "./MailSidebar";
import MailContent from "./MailContent";
import PreviewPanel from "./PreviewPanel";

import { initialMails } from "@/data/mailData";

import styles from "@/app/(dashboard)/email/page.module.css";

export default function EmailPageContent() {
  const [mails, setMails] = useState(initialMails);

  const [isComposeOpen, setIsComposeOpen] =
    useState(false);

  const [activeFolder, setActiveFolder] =
    useState("inbox");

  const [activeLabel, setActiveLabel] =
    useState(null);

  const [selectedMailId, setSelectedMailId] =
    useState(
      initialMails[0]?.id ?? null
    );

  const selectedMail =
    mails.find(
      (mail) =>
        mail.id === selectedMailId
    ) ?? null;

  function handleOpenCompose() {
    setIsComposeOpen(true);
  }

  function handleCloseCompose() {
    setIsComposeOpen(false);
  }

  function handleFolderChange(folderId) {
    setActiveFolder(folderId);
    setActiveLabel(null);

    const folderMails =
      folderId === "favourite"
        ? mails.filter(
            (mail) => mail.starred
          )
        : mails.filter(
            (mail) =>
              mail.folder === folderId
          );

    setSelectedMailId(
      folderMails[0]?.id ?? null
    );
  }

  function handleLabelChange(labelId) {
    setActiveLabel(labelId);
    setActiveFolder(null);

    const labelMails =
      mails.filter(
        (mail) =>
          mail.label === labelId
      );

    setSelectedMailId(
      labelMails[0]?.id ?? null
    );
  }

  function handleSelectMail(mailId) {
    setSelectedMailId(mailId);
  }

  function handleStarClick(mailId) {
    setMails((previous) =>
      previous.map((mail) =>
        mail.id === mailId
          ? {
              ...mail,
              starred: !mail.starred,
            }
          : mail
      )
    );
  }

  function handleSendMail({
    receiver,
    subject,
    message,
  }) {
    const now = new Date();

    const newMail = {
      id: Date.now(),

      sender: "You",

      email: "me@nextrun.com",

      receiver,

      subject,

      message,

      fullMessage: message,

      folder: "sent",

      category: "primary",

      starred: false,

      unread: false,

      attachment: false,

      notification: null,

      badge: null,

      badgeColor: null,

      label: null,

      avatar: admin,

      time: now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),

      date: now.toLocaleDateString(
        "en-US",
        {
          month: "long",
          day: "numeric",
          year: "numeric",
        }
      ),
    };

    setMails((previous) => [
      newMail,
      ...previous,
    ]);

    setActiveFolder("sent");
    setActiveLabel(null);
    setSelectedMailId(newMail.id);
    setIsComposeOpen(false);
  }

  return (
    <>
      <div className={styles.emailPage}>
        <MailSidebar
          onCompose={handleOpenCompose}
          activeFolder={activeFolder}
          activeLabel={activeLabel}
          onFolderChange={
            handleFolderChange
          }
          onLabelChange={
            handleLabelChange
          }
        />

        <MailContent
          mails={mails}
          activeFolder={activeFolder}
          activeLabel={activeLabel}
          selectedMailId={
            selectedMailId
          }
          onSelectMail={
            handleSelectMail
          }
          onStarClick={
            handleStarClick
          }
        />

        <PreviewPanel
          mail={selectedMail}
        />
      </div>

      <ComposeModal
        open={isComposeOpen}
        onClose={handleCloseCompose}
        onSend={handleSendMail}
      />
    </>
  );
}