"use client";

import { useMemo, useState } from "react";
import {
  Search,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import ContactCard from "./ContactCard";
import ContactFormModal from "./ContactFormModal";
import ContactDetailsModal from "./ContactDetailsModal";
import DeleteContactModal from "./DeleteContactModal";

import styles from "./ContactList.module.scss";

const PAGE_SIZE = 12;

export default function ContactList({
  contacts,
  setContacts,
}) {
  const [search, setSearch] =
    useState("");

  const [page, setPage] =
    useState(1);

  const [selectedContact, setSelectedContact] =
    useState(null);

  const [formOpen, setFormOpen] =
    useState(false);

  const [detailsOpen, setDetailsOpen] =
    useState(false);

  const [deleteOpen, setDeleteOpen] =
    useState(false);

  const filteredContacts =
    useMemo(() => {
      const keyword =
        search.toLowerCase().trim();

      if (!keyword)
        return contacts;

      return contacts.filter(
        (contact) =>
          contact.name
            .toLowerCase()
            .includes(keyword) ||
          contact.email
            .toLowerCase()
            .includes(keyword) ||
          contact.company
            .toLowerCase()
            .includes(keyword) ||
          contact.position
            .toLowerCase()
            .includes(keyword)
      );
    }, [contacts, search]);

  const totalPages =
    Math.max(
      1,
      Math.ceil(
        filteredContacts.length /
          PAGE_SIZE
      )
    );

  const visibleContacts =
    filteredContacts.slice(
      (page - 1) *
        PAGE_SIZE,
      page * PAGE_SIZE
    );
    const start =
  filteredContacts.length === 0
    ? 0
    : (page - 1) * PAGE_SIZE + 1;

const end = Math.min(
  page * PAGE_SIZE,
  filteredContacts.length
);

const pageNumbers =
  Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  function handleAdd() {
    setSelectedContact(null);

    setFormOpen(true);
  }

  function handleEdit(
    contact
  ) {
    setSelectedContact(
      contact
    );

    setFormOpen(true);
  }

  function handleView(
    contact
  ) {
    setSelectedContact(
      contact
    );

    setDetailsOpen(true);
  }

  function handleDelete(
    contact
  ) {
    setSelectedContact(
      contact
    );

    setDeleteOpen(true);
  }
function handleFavourite(id) {
  const updatedContacts = contacts.map((item) =>
    item.id === id
      ? {
          ...item,
          favourite: !item.favourite,
        }
      : item
  );

  setContacts(updatedContacts);

  localStorage.setItem(
    "contacts",
    JSON.stringify(updatedContacts)
  );

  window.dispatchEvent(
    new Event("contacts-updated")
  );
}
  function handleSave(
    contact
  ) {
    if (
      selectedContact
    ) {
      setContacts((prev) =>
        prev.map((item) =>
          item.id ===
          contact.id
            ? contact
            : item
        )
      );
    } else {
      setContacts((prev) => [
        {
          ...contact,
          id: Date.now(),
        },
        ...prev,
      ]);
    }

    setFormOpen(false);
  }

  function confirmDelete() {
    setContacts((prev) =>
      prev.filter(
        (item) =>
          item.id !==
          selectedContact.id
      )
    );

    setDeleteOpen(false);
  }

  return (
    <>
      <div
        className={
          styles.toolbar
        }
      >
    <div
  className={
    styles.searchBox
  }

        >
          <Search
            size={18}
          />

          <input
        placeholder="Search contacts..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />
        </div>

        <button
          className={
            styles.addButton
          }
          onClick={
            handleAdd
          }
        >
          <Plus
            size={18}
          />

          Add Contact
        </button>
      </div>

      <section
        className={
          styles.grid
        }
      >
        {visibleContacts.map(
          (contact) => (
            <ContactCard
              key={
                contact.id
              }
              contact={
                contact
              }
              onView={
                handleView
              }
              onEdit={
                handleEdit
              }
              onDelete={
                handleDelete
              }
              onFavourite={
                handleFavourite
              }
            />
          )
        )}
      </section>
<div className={styles.footer}>

  <p className={styles.results}>
    Showing <strong>{start}</strong>–
    <strong>{end}</strong> of{" "}
    <strong>
      {filteredContacts.length}
    </strong>{" "}
    contacts
  </p>

  <div className={styles.pagination}>

    <button
      className={styles.pageButton}
      disabled={page === 1}
      onClick={() =>
        setPage(page - 1)
      }
    >
      <ChevronLeft size={18} />
    </button>

    {pageNumbers.map(
      (number) => (
        <button
          key={number}
          className={`${styles.pageNumber} ${
            page === number
              ? styles.active
              : ""
          }`}
          onClick={() =>
            setPage(number)
          }
        >
          {number}
        </button>
      )
    )}

    <button
      className={styles.pageButton}
      disabled={
        page === totalPages
      }
      onClick={() =>
        setPage(page + 1)
      }
    >
      <ChevronRight
        size={18}
      />
    </button>

  </div>

</div>
      <ContactFormModal
        open={formOpen}
        contact={selectedContact}
        onClose={() =>
          setFormOpen(false)
        }
        onSave={handleSave}
      />

      <ContactDetailsModal
        open={detailsOpen}
        contact={selectedContact}
        onClose={() =>
          setDetailsOpen(false)
        }
        onEdit={() => {
          setDetailsOpen(false);
          setFormOpen(true);
        }}
        onDelete={() => {
          setDetailsOpen(false);
          setDeleteOpen(true);
        }}
      />

      <DeleteContactModal
        open={deleteOpen}
        contact={selectedContact}
        onClose={() =>
          setDeleteOpen(false)
        }
        onConfirm={confirmDelete}
      />
    </>
  );
}