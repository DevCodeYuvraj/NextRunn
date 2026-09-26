"use client";

import Image from "next/image";

import {
  MdClose,
  MdEdit,
  MdDelete,
  MdEmail,
  MdPhone,
  MdBusiness,
  MdLocationOn,
  MdLanguage,
} from "react-icons/md";

import { resolveAvatarSrc } from "@/data/avatarRegistry";
import styles from "./ContactDetailsModal.module.scss";

export default function ContactDetailsModal({
  open,
  contact,
  onClose,
  onEdit,
  onDelete,
}) {
  if (!open || !contact) return null;

  const avatarSrc = resolveAvatarSrc(contact.image, null);

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
        <div className={styles.header}>
          <h2>
            Contact Details
          </h2>

          <button
            type="button"
            onClick={onClose}
          >
            <MdClose />
          </button>
        </div>

        <div className={styles.profile}>
          {avatarSrc ? (
            <Image
              src={avatarSrc}
              alt={contact.name}
              width={120}
              height={120}
              className={styles.avatar}
              unoptimized
            />
          ) : (
            <div
              className={
                styles.placeholder
              }
            >
              {contact.name
                .split(" ")
                .map(
                  (word) =>
                    word[0]
                )
                .slice(0, 2)
                .join("")
                .toUpperCase()}
            </div>
          )}

          <h3>{contact.name}</h3>

          <p>
            {contact.position}
          </p>

          <span>
            {contact.company}
          </span>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.item}>
            <MdEmail />

            <div>
              <label>
                Email
              </label>

              <span>
                {contact.email}
              </span>
            </div>
          </div>

          <div className={styles.item}>
            <MdPhone />

            <div>
              <label>
                Phone
              </label>

              <span>
                {contact.phone}
              </span>
            </div>
          </div>

          <div className={styles.item}>
            <MdBusiness />

            <div>
              <label>
                Department
              </label>

              <span>
                {contact.department ||
                  "-"}
              </span>
            </div>
          </div>

          <div className={styles.item}>
            <MdLanguage />

            <div>
              <label>
                Website
              </label>

              <span>
                {contact.website ||
                  "-"}
              </span>
            </div>
          </div>

          <div className={styles.item}>
            <MdLocationOn />

            <div>
              <label>
                Address
              </label>

              <span>
                {contact.address ||
                  "-"}
              </span>
            </div>
          </div>

          <div className={styles.item}>
            <MdLocationOn />

            <div>
              <label>
                City
              </label>

              <span>
                {contact.city ||
                  "-"}
              </span>
            </div>
          </div>

          <div className={styles.item}>
            <MdLocationOn />

            <div>
              <label>
                Country
              </label>

              <span>
                {contact.country ||
                  "-"}
              </span>
            </div>
          </div>

          <div
            className={`${styles.item} ${styles.full}`}
          >
            <div>
              <label>
                Notes
              </label>

              <p>
                {contact.notes ||
                  "No notes available."}
              </p>
            </div>
          </div>          </div>

          <div className={styles.footer}>
            <button
              type="button"
              className={styles.editButton}
              onClick={() =>
                onEdit(contact)
              }
            >
              <MdEdit />

              Edit Contact
            </button>

            <button
              type="button"
              className={styles.deleteButton}
              onClick={() =>
                onDelete(contact)
              }
            >
              <MdDelete />

              Delete Contact
            </button>
          </div>
        </div>
      </div>);
    }