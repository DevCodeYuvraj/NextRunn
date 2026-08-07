"use client";

import { useEffect } from "react";

import useLocalStorage from "@/hooks/useLocalStorage";

import UserProfileCard from "./UserProfileCard";
import UserContacts from "./UserContacts";
import UserMessages from "./UserMessages";
import UserPlanCard from "./UserPlanCard";
import UserActivity from "./UserActivity";

import {
  initialUserContacts,
  initialUserMessages,
} from "@/data/userData";

import styles from "./UserPageContent.module.css";

export default function UserPageContent() {
  const [contacts, setContacts] =
    useLocalStorage(
      "user-contacts",
      initialUserContacts
    );

  const [messages, setMessages] =
    useLocalStorage(
      "user-messages",
      initialUserMessages
    );

  const [
    selectedMessageId,
    setSelectedMessageId,
  ] = useLocalStorage(
    "selected-user-message",
    null
  );

  useEffect(() => {
    window.dispatchEvent(
      new Event("contacts-updated")
    );
  }, [contacts]);

  function handleAddContact(contact) {
    const newContact = {
      id: Date.now(),
      avatar: null,
      ...contact,
    };

    setContacts((prev) => [
      ...prev,
      newContact,
    ]);
  }

  function handleOpenConversation(
    contact
  ) {
    let conversation =
      messages.find(
        (item) =>
          item.contactId === contact.id
      );

    if (!conversation) {
      conversation = {
        id: Date.now(),
        contactId: contact.id,
        name: contact.name,
        preview: "",
        time: "",
        unread: 0,
        messages: [],
      };

      setMessages((prev) => [
        ...prev,
        conversation,
      ]);
    } else {
      setMessages((prev) =>
        prev.map((item) =>
          item.id === conversation.id
            ? {
                ...item,
                unread: 0,
              }
            : item
        )
      );
    }

    setSelectedMessageId(
      conversation.id
    );
  }

  function handleReadMessage(id) {
    setMessages((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              unread: 0,
            }
          : item
      )
    );

    setSelectedMessageId(id);
  }

  function handleSendMessage(
    conversationId,
    text
  ) {
    const value = text.trim();

    if (!value) return;

    const now =
      new Date().toLocaleTimeString(
        "en-US",
        {
          hour: "numeric",
          minute: "2-digit",
        }
      );

    setMessages((prev) =>
      prev.map((conversation) =>
        conversation.id ===
        conversationId
          ? {
              ...conversation,
              preview: value,
              time: now,
              unread: 0,
              messages: [
                ...conversation.messages,
                {
                  id: Date.now(),
                  sender: "me",
                  text: value,
                  time: now,
                },
              ],
            }
          : conversation
      )
    );
  }

  const selectedMessage =
    messages.find(
      (item) =>
        item.id ===
        selectedMessageId
    ) || null;

  return (
    <div className={styles.page}>
      <div className={styles.mainColumn}>
        <UserProfileCard />

        <div className={styles.lowerGrid}>
          <UserContacts
            contacts={contacts}
            onAddContact={
              handleAddContact
            }
            onMessage={
              handleOpenConversation
            }
          />

          <UserMessages
            contacts={contacts}
            messages={messages}
            selectedMessage={
              selectedMessage
            }
            onOpenMessage={
              handleReadMessage
            }
            onSendMessage={
              handleSendMessage
            }
            onStartConversation={
              handleOpenConversation
            }
          />
        </div>
      </div>

      <aside className={styles.rightColumn}>
        <UserPlanCard />

        <UserActivity />
      </aside>
    </div>
  );
}