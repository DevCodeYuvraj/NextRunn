"use client";

import { useEffect, useRef, useState } from "react";
import { getAvatarById } from "@/data/avatarRegistry";

const avatar = getAvatarById(contact.image);

import Image from "next/image";

import {
  MoreHorizontal,
  Eye,
  Pencil,
  Trash2,
  Star,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import styles from "./ContactCard.module.css";

export default function ContactCard({
  contact,
  onView,
  onEdit,
  onDelete,
  onFavourite,
}) {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClick(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(
          event.target
        )
      ) {
        setMenuOpen(false);
      }
    }

    window.addEventListener(
      "mousedown",
      handleClick
    );

    return () =>
      window.removeEventListener(
        "mousedown",
        handleClick
      );
  }, []);
  return (
    <article className={styles.card}>
      <div className={styles.menuBox}>
        <button
          className={styles.menu}
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          <MoreHorizontal size={18} />
        </button>

        {menuOpen && (
          <div className={styles.dropdown}>
            <button
              onClick={() => {
                setMenuOpen(false);
                onView(contact);
              }}
            >
              <Eye size={15} />
              View
            </button>

            <button
              onClick={() => {
                setMenuOpen(false);
                onEdit(contact);
              }}
            >
              <Pencil size={15} />
              Edit
            </button>

            <button
              onClick={() =>
                onFavourite(contact.id)
              }
            >
              <Star
                size={15}
                fill={
                  contact.favourite
                    ? "#FDBA12"
                    : "none"
                }
              />
              Favourite
            </button>

            <button
              className={styles.delete}
              onClick={() => {
                setMenuOpen(false);
                onDelete(contact);
              }}
            >
              <Trash2 size={15} />
              Delete
            </button>
          </div>
        )}
      </div>

      <div className={styles.avatarWrapper}>
        {contact.image ? (

          <Image
            src={avatar?.image}
            alt={contact.name}
            width={108}
            height={108}
            className={styles.avatar}
          />
        ) : (
          <div className={styles.placeholder}>
            {contact.name
              .split(" ")
              .map(
                (item) => item[0]
              )
              .join("")
              .slice(0, 2)}
          </div>
        )}
      </div>

      <h3 className={styles.name}>
        {contact.name}
      </h3>

      <p className={styles.designation}>
        {contact.position} at
      </p>

      <h5 className={styles.company}>
        {contact.company}
      </h5>

      <div className={styles.contactRow}>
        <div className={styles.iconBox}>
          <Phone size={20} />
        </div>

        <span>
          {contact.phone}
        </span>
      </div>

      <div className={styles.contactRow}>
        <div className={styles.iconBox}>
          <Mail size={20} />
        </div>

        <span>
          {contact.email}
        </span>
      </div>
    </article>
  );
}