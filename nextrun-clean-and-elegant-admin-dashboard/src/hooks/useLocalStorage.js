"use client";

import {
  useEffect,
  useState,
} from "react";

export default function useLocalStorage(
  key,
  initialValue
) {
  const [value, setValue] =
    useState(initialValue);

  const [loaded, setLoaded] =
    useState(false);

  useEffect(() => {
    try {
      const item =
        localStorage.getItem(key);

      if (item) {
        setValue(
          JSON.parse(item)
        );
      }
    } catch {}

    setLoaded(true);
  }, [key]);

  useEffect(() => {
    if (!loaded) return;

    try {
      localStorage.setItem(
        key,
        JSON.stringify(value)
      );
    } catch {}
  }, [
    key,
    value,
    loaded,
  ]);

  return [value, setValue, loaded];
}