"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const AvatarContext =
  createContext(null);

export function AvatarProvider({
  children,
}) {
  const [contacts, setContacts] =
    useState([]);

  useEffect(() => {
    try {
      const stored =
        localStorage.getItem(
          "contacts"
        );

      if (stored) {
        setContacts(
          JSON.parse(stored)
        );
      }
    } catch {}
  }, []);

  useEffect(() => {
    function sync() {
      try {
        const stored =
          localStorage.getItem(
            "contacts"
          );

        if (stored) {
          setContacts(
            JSON.parse(stored)
          );
        }
      } catch {}
    }

    window.addEventListener(
      "storage",
      sync
    );

    window.addEventListener(
      "contacts-updated",
      sync
    );

    return () => {
      window.removeEventListener(
        "storage",
        sync
      );

      window.removeEventListener(
        "contacts-updated",
        sync
      );
    };
  }, []);

  const value = useMemo(
    () => ({
      contacts,

      getAvatar(id) {
        return (
          contacts.find(
            (c) =>
              c.id === id
          )?.image || ""
        );
      },

      getContact(id) {
        return (
          contacts.find(
            (c) =>
              c.id === id
          ) || null
        );
      },

      getByEmail(email) {
        return (
          contacts.find(
            (c) =>
              c.email ===
              email
          ) || null
        );
      },

      refresh() {
        try {
          const stored =
            localStorage.getItem(
              "contacts"
            );

          if (stored) {
            setContacts(
              JSON.parse(
                stored
              )
            );
          }
        } catch {}
      },
    }),
    [contacts]
  );

  return (
    <AvatarContext.Provider
      value={value}
    >
      {children}
    </AvatarContext.Provider>
  );
}

export function useAvatarContext() {
  return useContext(
    AvatarContext
  );
}