"use client";

import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import AvatarPicker from "@/components/common/AvatarPicker";
import styles from "./ContactFormModal.module.scss";

const emptyContact = {
  image: "",
  name: "",
  email: "",
  phone: "",
  company: "",
  position: "",
  department: "",
  website: "",
  address: "",
  city: "",
  country: "",
  notes: "",
  favourite: false,
};

export default function ContactFormModal({
  open,
  contact,
  onClose,
  onSave,
}) {
  const [form, setForm] = useState(emptyContact);

  useEffect(() => {
    if (contact) {
      setForm({
        ...emptyContact,
        ...contact,
        image: contact.image ?? "",
        name: contact.name ?? "",
        email: contact.email ?? "",
        phone: contact.phone ?? "",
        company: contact.company ?? "",
        position: contact.position ?? "",
        department: contact.department ?? "",
        website: contact.website ?? "",
        address: contact.address ?? "",
        city: contact.city ?? "",
        country: contact.country ?? "",
        notes: contact.notes ?? "",
      });
    } else {
      setForm(emptyContact);
    }
  }, [contact]);

  if (!open) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name || !form.email) return;
    onSave(form);
  };

  return (
    <div
      className={styles.overlay}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>{contact ? "Edit Contact" : "Add Contact"}</h2>
          <button type="button" onClick={onClose} aria-label="Close modal">
            <MdClose />
          </button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.avatarSection}>
            <AvatarPicker
              value={form.image ?? ""}
              onChange={(avatar) =>
                setForm((prev) => ({
                  ...prev,
                  image:
                    avatar?.type === "uploaded"
                      ? avatar.image
                      : avatar?.id || "",
                }))
              }
            />
          </div>

          <div className={styles.grid}>
            <div className={styles.field}>
              <label htmlFor="contact-name">Full Name *</label>
              <input
                id="contact-name"
                name="name"
                value={form.name ?? ""}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-email">Email *</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={form.email ?? ""}
                onChange={handleChange}
                placeholder="e.g. john@example.com"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-phone">Phone</label>
              <input
                id="contact-phone"
                name="phone"
                value={form.phone ?? ""}
                onChange={handleChange}
                placeholder="e.g. +1 (555) 000-0000"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-company">Company</label>
              <input
                id="contact-company"
                name="company"
                value={form.company ?? ""}
                onChange={handleChange}
                placeholder="e.g. Acme Corp"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-position">Position</label>
              <input
                id="contact-position"
                name="position"
                value={form.position ?? ""}
                onChange={handleChange}
                placeholder="e.g. Senior Designer"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-department">Department</label>
              <input
                id="contact-department"
                name="department"
                value={form.department ?? ""}
                onChange={handleChange}
                placeholder="e.g. Design"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-website">Website</label>
              <input
                id="contact-website"
                name="website"
                value={form.website ?? ""}
                onChange={handleChange}
                placeholder="e.g. https://example.com"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-address">Address</label>
              <input
                id="contact-address"
                name="address"
                value={form.address ?? ""}
                onChange={handleChange}
                placeholder="e.g. 123 Main St"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-city">City</label>
              <input
                id="contact-city"
                name="city"
                value={form.city ?? ""}
                onChange={handleChange}
                placeholder="e.g. San Francisco"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contact-country">Country</label>
              <input
                id="contact-country"
                name="country"
                value={form.country ?? ""}
                onChange={handleChange}
                placeholder="e.g. United States"
              />
            </div>

            <div className={`${styles.field} ${styles.full}`}>
              <label htmlFor="contact-notes">Notes</label>
              <textarea
                id="contact-notes"
                rows={4}
                name="notes"
                value={form.notes ?? ""}
                onChange={handleChange}
                placeholder="Add any extra notes or details about this contact..."
              />
            </div>
          </div>

          <div className={styles.footer}>
            <button
              type="button"
              className={styles.cancel}
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className={styles.save}>
              {contact ? "Update Contact" : "Add Contact"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}