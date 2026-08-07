export function loadData(key, fallback) {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const saved = localStorage.getItem(key);

    if (!saved) {
      return fallback;
    }

    return JSON.parse(saved);
  } catch {
    return fallback;
  }
}

export function saveData(key, value) {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(
    key,
    JSON.stringify(value)
  );
}

export function removeData(key) {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem(key);
}

export function clearStorage() {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.clear();
}