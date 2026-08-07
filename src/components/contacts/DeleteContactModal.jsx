"use client";

import {
  MdClose,
  MdDeleteForever,
} from "react-icons/md";

import styles from "./DeleteContactModal.module.css";

export default function DeleteContactModal({
  open,
  contact,
  onClose,
  onConfirm,
}) {
  if (!open || !contact) return null;

  return (
    <div
      className={styles.overlay}
      onMouseDown={(e) => {
        if (
          e.target === e.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div className={styles.modal}>
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
        >
          <MdClose />
        </button>

        <div className={styles.icon}>
          <MdDeleteForever />
        </div>

        <h2>
          Delete Contact?
        </h2>

        <p>
          Are you sure you want to
          delete
          <strong>
            {" "}
            {contact.name}
          </strong>
          ?
          <br />
          This action cannot be
          undone.
        </p>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.cancel}
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            type="button"
            className={styles.delete}
            onClick={onConfirm}
          >
            <MdDeleteForever />

            Delete Contact
          </button>
        </div>
      </div>
    </div>
  );
}