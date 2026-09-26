"use client";

import useLocalStorage from "@/hooks/useLocalStorage";

import ContactList from "./ContactList";

import styles from "./ContactsPageContent.module.scss";

import { initialContacts } from "@/data/contacts";

export default function ContactsPageContent() {
  const [
  contacts,
  setContacts,
  loaded,
] = useLocalStorage(
  "contacts",
  initialContacts
);

if (!loaded) return null;
  return (
    <section className={styles.container}>
      <ContactList
        contacts={contacts}
        setContacts={setContacts}
      />
    </section>
  );
}