"use client";

import styles from "./NewMessageModal.module.css";

export default function NewMessageModal({
  open,
  contacts,
  onClose,
  onSelect,
}) {
  if (!open) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <div
        className={styles.modal}
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <h2>New Message</h2>

        <p>Select a contact</p>

        <div className={styles.list}>
          {contacts.map((contact) => (
            <button
              key={contact.id}
              className={styles.contact}
              onClick={() =>
                onSelect(contact)
              }
            >
              <div
                className={
                  styles.avatar
                }
              >
                {contact.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </div>

              <div>
                <strong>
                  {contact.name}
                </strong>

                <p>
                  {contact.role}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}