"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  MdLocationOn,
  MdPhone,
  MdEmail,
  MdMoreHoriz,
  MdContentCopy,
  MdPersonOutline,
} from "react-icons/md";

import Avatar from "@/components/common/Avatar";
import useLocalStorage from "@/hooks/useLocalStorage";

import {
  userProfile,
} from "@/data/userData";

import styles from "./UserProfileCard.module.scss";

export default function UserProfileCard() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const menuRef = useRef(null);

  const [currentUser] =
    useLocalStorage(
      "current-user",
      userProfile
    );

  const profile = {
    ...userProfile,
    ...(currentUser || {}),
  };

  useEffect(() => {
    function handleOutsideClick(
      event
    ) {
      if (
        menuRef.current &&
        !menuRef.current.contains(
          event.target
        )
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(
        profile.email
      );
    } catch {}

    setMenuOpen(false);
  }

  return (
    <section className={styles.card}>
      <div
        className={styles.avatarFrame}
      >
        <Avatar
          src={profile.avatar}
          alt={profile.name}
          size={140}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.identity}>
          <h2>{profile.name}</h2>

          <p>{profile.role}</p>
        </div>

        <div className={styles.details}>
          <div
            className={styles.detail}
          >
            <span
              className={`${styles.detailIcon} ${styles.location}`}
            >
              <MdLocationOn />
            </span>

            <span>
              {profile.location}
            </span>
          </div>

          <a
            className={styles.detail}
            href={`tel:${(
              profile.phone || ""
            ).replace(/\s/g, "")}`}
          >
            <span
              className={`${styles.detailIcon} ${styles.phone}`}
            >
              <MdPhone />
            </span>

            <span>
              {profile.phone}
            </span>
          </a>

          <a
            className={styles.detail}
            href={`mailto:${profile.email}`}
          >
            <span
              className={`${styles.detailIcon} ${styles.email}`}
            >
              <MdEmail />
            </span>

            <span>
              {profile.email}
            </span>
          </a>
        </div>
      </div>

      <div
        className={styles.menuWrapper}
        ref={menuRef}
      >
        <button
          type="button"
          className={styles.moreButton}
          aria-label="Profile options"
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen(
              (prev) => !prev
            )
          }
        >
          <MdMoreHoriz />
        </button>

        {menuOpen && (
          <div
            className={styles.menu}
          >
            <button
              type="button"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              <MdPersonOutline />
              <span>
                View Profile
              </span>
            </button>

            <button
              type="button"
              onClick={copyEmail}
            >
              <MdContentCopy />
              <span>
                Copy Email
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}