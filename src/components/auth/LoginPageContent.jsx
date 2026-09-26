"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import {
  MdVisibility,
  MdVisibilityOff,
  MdLock,
  MdPerson,
} from "react-icons/md";

import styles from "./LoginPageContent.module.scss";

export default function LoginPageContent() {
  const router = useRouter();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [remember, setRemember] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [error, setError] =
    useState("");

  useEffect(() => {
    const loggedIn =
      localStorage.getItem("isLoggedIn");

    if (loggedIn === "true") {
      router.replace("/dashboard");
    }
  }, [router]);

  function handleSubmit(event) {
    event.preventDefault();

    setError("");

    if (
      username === "admin" &&
      password === "admin123"
    ) {
      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      if (remember) {
        localStorage.setItem(
          "rememberLogin",
          "true"
        );
      }

      router.push("/dashboard");

      return;
    }

    setError(
      "Invalid Username or Password"
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <h1>
            Next<span>run.</span>
          </h1>

          <p>
            Welcome back! Please login
            to continue.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
        >
          <div
            className={styles.field}
          >
            <MdPerson
              className={styles.icon}
            />

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) =>
                setUsername(
                  e.target.value
                )
              }
            />
          </div>

          <div
            className={styles.field}
          >
            <MdLock
              className={styles.icon}
            />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
            />

            <button
              type="button"
              className={
                styles.eyeButton
              }
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
            >
              {showPassword ? (
                <MdVisibilityOff />
              ) : (
                <MdVisibility />
              )}
            </button>
          </div>
                    <div className={styles.options}>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) =>
                  setRemember(
                    e.target.checked
                  )
                }
              />

              <span>Remember Me</span>
            </label>

            <button
              type="button"
              className={styles.forgot}
            >
              Forgot Password?
            </button>
          </div>

          {error && (
            <div className={styles.error}>
              {error}
            </div>
          )}

          <button
            type="submit"
            className={styles.loginButton}
          >
            Login
          </button>

          <div className={styles.demo}>
            <h4>Demo Credentials</h4>

            <p>
              Username:
              <strong> admin</strong>
            </p>

            <p>
              Password:
              <strong> admin123</strong>
            </p>
          </div>
                  </form>
      </div>
    </div>
  );
}