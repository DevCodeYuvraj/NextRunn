"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import Image from "next/image";
import Avatar from "@/components/common/Avatar";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";

import {
  MdAccountCircle,
  MdHelpOutline,
  MdKeyboardArrowDown,
  MdLogout,
  MdManageAccounts,
} from "react-icons/md";

const admin = "/avatars/admin.jpg";
const DEFAULT_USER = {
  name: "John Doe",
  role: "Administrator",
  email: "john.doe@nextrun.com",
  avatar: "/avatars/admin.jpg",
};

import styles from "./ProfileDropdown.module.css";

export default function ProfileDropdown() {
  const router = useRouter();
  const wrapperRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [user] =
    useLocalStorage(
      "current-user",
      DEFAULT_USER
    );
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

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

  const handleNavigation = (href) => {
    setOpen(false);
    router.push(href);
  };

const handleLogout = () => {
  setOpen(false);

  sessionStorage.removeItem("isLoggedIn");
  localStorage.removeItem("isLoggedIn");

  router.replace("/login");
};
  return (
    <div
      className={styles.wrapper}
      ref={wrapperRef}
    >
      <button
        type="button"
        className={`${styles.profile} ${open ? styles.profileActive : ""
          }`}
        onClick={() =>
          setOpen((previous) => !previous)
        }
      >
        <Avatar
          src={user.avatar}
          alt={user.name}
          size={46}
        />

        <div className={styles.userInfo}>
          <h4>{user.name}</h4>

          <span>{user.role}</span>
        </div>

        <MdKeyboardArrowDown
          className={`${styles.arrow} ${open ? styles.arrowOpen : ""
            }`}
          size={22}
        />
      </button>

      {open && (
        <div
          className={styles.dropdown}
          role="menu"
        >
          <div className={styles.profileHeader}>
            <Avatar
              src={user.avatar}
              alt={user.name}
              size={70}
            />

            <div className={styles.profileDetails}>
              <h3>{user.name}</h3>

              <span>{user.role}</span>

              <p>{user.email}</p>
            </div>
          </div>

          <div className={styles.menu}>
            <button
              type="button"
              onClick={() =>
                handleNavigation("/user")
              }
            >
              <span className={styles.menuIcon}>
                <MdAccountCircle />
              </span>

              <span className={styles.menuText}>
                <strong>My Profile</strong>

                <small>
                  View and edit your profile
                </small>
              </span>
            </button>

            <button
              type="button"
              onClick={() =>
                handleNavigation("/settings")
              }
            >
              <span className={styles.menuIcon}>
                <MdManageAccounts />
              </span>

              <span className={styles.menuText}>
                <strong>
                  Account Settings
                </strong>

                <small>
                  Manage your account
                </small>
              </span>
            </button>

            <button
              type="button"
              onClick={() =>
                handleNavigation("/help-support")
              }
            >
              <span className={styles.menuIcon}>
                <MdHelpOutline />
              </span>

              <span className={styles.menuText}>
                <strong>
                  Help & Support
                </strong>

                <small>
                  Get help with Nextrun
                </small>
              </span>
            </button>
          </div>

          <div className={styles.footer}>
            <button
              type="button"
              className={styles.logout}
              onClick={handleLogout}
            >
              <span
                className={
                  styles.logoutIcon
                }
              >
                <MdLogout />
              </span>

              <span>
                <strong>Logout</strong>

                <small>
                  Sign out of your account
                </small>
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}