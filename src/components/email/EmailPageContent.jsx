"use client";

import { useState } from "react";
const admin = "/avatars/admin.jpg";

import ComposeModal from "./ComposeModal";
import MailSidebar from "./MailSidebar";
import MailContent from "./MailContent";
import PreviewPanel from "./PreviewPanel";

import { initialMails } from "@/data/mailData";

import styles from "@/app/(dashboard)/email/page.module.scss";

export default function EmailPageContent() {
  const [mails, setMails] = useState(initialMails);
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [activeFolder, setActiveFolder] = useState("inbox");
  const [activeLabel, setActiveLabel] = useState(null);
  const [selectedMailId, setSelectedMailId] = useState(
    initialMails[0]?.id ?? null
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showMobilePreview, setShowMobilePreview] = useState(false);

  const selectedMail =
    mails.find((mail) => mail.id === selectedMailId) ?? null;

  function handleOpenCompose() {
    setIsComposeOpen(true);
  }

  function handleCloseCompose() {
    setIsComposeOpen(false);
  }

  function handleFolderChange(folderId) {
    setActiveFolder(folderId);
    setActiveLabel(null);
    setShowMobilePreview(false);

    const folderMails =
      folderId === "favourite"
        ? mails.filter((mail) => mail.starred)
        : mails.filter((mail) => mail.folder === folderId);

    setSelectedMailId(folderMails[0]?.id ?? null);
  }

  function handleLabelChange(labelId) {
    setActiveLabel(labelId);
    setActiveFolder(null);
    setShowMobilePreview(false);

    const labelMails = mails.filter(
      (mail) => mail.label === labelId
    );

    setSelectedMailId(labelMails[0]?.id ?? null);
  }

  function handleSelectMail(mailId) {
    setSelectedMailId(mailId);
    setShowMobilePreview(true);
  }

  function handleBackToList() {
    setShowMobilePreview(false);
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

  function handleSendMail({ receiver, subject, message }) {
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
      date: now.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    };

    setMails((previous) => [newMail, ...previous]);
    setActiveFolder("sent");
    setActiveLabel(null);
    setSelectedMailId(newMail.id);
    setIsComposeOpen(false);
  }

  return (
    <>
      <div className={styles.emailPage}>
        {/* Mobile backdrop for MailSidebar drawer */}
        <div
          className={`${styles.backdrop} ${
            isSidebarOpen ? styles.backdropActive : ""
          }`}
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden={!isSidebarOpen}
        />

        <MailSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onCompose={handleOpenCompose}
          activeFolder={activeFolder}
          activeLabel={activeLabel}
          onFolderChange={handleFolderChange}
          onLabelChange={handleLabelChange}
        />

        <MailContent
          mails={mails}
          activeFolder={activeFolder}
          activeLabel={activeLabel}
          selectedMailId={selectedMailId}
          onSelectMail={handleSelectMail}
          onStarClick={handleStarClick}
          onOpenFolders={() => setIsSidebarOpen(true)}
          isMobilePreviewActive={showMobilePreview}
        />

        <PreviewPanel
          mail={selectedMail}
          onBack={handleBackToList}
          isMobileActive={showMobilePreview}
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