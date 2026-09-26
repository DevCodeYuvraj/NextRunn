"use client";

import {
  useEffect,
  useState,
} from "react";

import { MdAdd } from "react-icons/md";

import UserMessageRow from "./UserMessageRow";
import MessagePanel from "./MessagePanel";
import NewMessageModal from "./NewMessageModal";

import styles from "./UserMessages.module.scss";

const INITIAL_VISIBLE = 5;

export default function UserMessages({
  contacts,
  messages,
  selectedMessage,
  onOpenMessage,
  onSendMessage,
  onStartConversation,
}) {
  const [expanded, setExpanded] =
    useState(false);

  const [panelOpen, setPanelOpen] =
    useState(false);

  const [newMessageOpen, setNewMessageOpen] =
    useState(false);

  useEffect(() => {
    if (selectedMessage) {
      setPanelOpen(true);
    }
  }, [selectedMessage]);

  const visibleMessages =
    expanded
      ? messages
      : messages.slice(
          0,
          INITIAL_VISIBLE
        );

  function openConversation(id) {
    onOpenMessage(id);

    setPanelOpen(true);
  }

  function handleSelectContact(
    contact
  ) {
    setNewMessageOpen(false);

    onStartConversation(contact);
  }

  return (
    <>
      <section className={styles.card}>
        <div className={styles.header}>
          <h3>Messages</h3>

          <button
            type="button"
            className={styles.addButton}
            onClick={() =>
              setNewMessageOpen(true)
            }
            aria-label="New Message"
          >
            <MdAdd />
          </button>
        </div>

        <div className={styles.list}>
          {visibleMessages.length >
          0 ? (
            visibleMessages.map(
              (message) => (
                <UserMessageRow
                  key={message.id}
                  message={message}
                  onClick={() =>
                    openConversation(
                      message.id
                    )
                  }
                />
              )
            )
          ) : (
            <div
              className={styles.empty}
            >
              No messages available.
            </div>
          )}
        </div>

        <div className={styles.footer}>
          <button
            type="button"
            className={
              styles.viewButton
            }
            disabled={
              messages.length <=
              INITIAL_VISIBLE
            }
            onClick={() =>
              setExpanded(
                (prev) => !prev
              )
            }
          >
            {expanded
              ? "View Less"
              : "View More"}
          </button>
        </div>
      </section>

      <NewMessageModal
        open={newMessageOpen}
        contacts={contacts}
        onClose={() =>
          setNewMessageOpen(false)
        }
        onSelect={
          handleSelectContact
        }
      />

      <MessagePanel
        open={
          panelOpen &&
          Boolean(selectedMessage)
        }
        conversation={
          selectedMessage
        }
        onClose={() =>
          setPanelOpen(false)
        }
        onSendMessage={
          onSendMessage
        }
      />
    </>
  );
}