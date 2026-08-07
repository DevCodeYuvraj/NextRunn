"use client";

import { useRef } from "react";

import {
  MdCloudUpload,
  MdDelete,
} from "react-icons/md";

import {
  resizeImage,
} from "@/lib/imageUtils";

import styles from "./AvatarUpload.module.css";

export default function AvatarUpload({
  image,
  onChange,
}) {
  const inputRef = useRef(null);

  const handleFile = async (file) => {
    if (!file) return;

    const base64 =
      await resizeImage(file);

    onChange(base64);
  };

  const handleDrop = async (event) => {
    event.preventDefault();

    const file =
      event.dataTransfer.files[0];

    handleFile(file);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.dropzone}
        onDragOver={(e) =>
          e.preventDefault()
        }
        onDrop={handleDrop}
        onClick={() =>
          inputRef.current.click()
        }
      >
        {image ? (
          <img
            src={image}
            alt="Preview"
            className={styles.preview}
          />
        ) : (
          <>
            <MdCloudUpload
              size={48}
            />

            <h4>
              Upload Avatar
            </h4>

            <p>
              Click or Drag image
            </p>
          </>
        )}

        <input
          ref={inputRef}
          hidden
          type="file"
          accept="image/*"
          onChange={(e) =>
            handleFile(
              e.target.files[0]
            )
          }
        />
      </div>

      {image && (
        <button
          className={styles.remove}
          type="button"
          onClick={() =>
            onChange("")
          }
        >
          <MdDelete />

          Remove
        </button>
      )}
    </div>
  );
}