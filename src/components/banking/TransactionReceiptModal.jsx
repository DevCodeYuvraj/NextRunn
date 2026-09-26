"use client";

import { useEffect } from "react";

import Avatar from "@/components/common/Avatar";
import { useAvatarContext } from "@/context/AvatarContext";

import {
  MdClose,
  MdPrint,
} from "react-icons/md";

import styles from "./TransactionReceiptModal.module.scss";

export default function TransactionReceiptModal({
  open,
  transaction,
  onClose,
}) {
  const { getByEmail } =
    useAvatarContext();

  if (!open || !transaction) return null;

  const profile =
    getByEmail(transaction.email);

  function handlePrint() {
    window.print();
  }

  useEffect(() => {
    const esc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener(
      "keydown",
      esc
    );

    return () =>
      document.removeEventListener(
        "keydown",
        esc
      );
  }, [onClose]);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>
            Transaction Receipt
          </h2>

          <button
            type="button"
            onClick={onClose}
          >
            <MdClose />
          </button>
        </div>

        <div className={styles.receipt}>
          <div className={styles.company}>
            <div>
              <h1>Nextrun.</h1>

              <p>
                Banking Receipt
              </p>
            </div>

            <div className={styles.invoice}>
              <span>
                Invoice No.
              </span>

              <strong>
                {transaction.invoice}
              </strong>
            </div>
          </div>

          <div className={styles.customer}>
            <Avatar
              src={profile?.image}
              alt={transaction.company}
              size={72}
            />

            <div>
              <h3>
                {transaction.company}
              </h3>

              <p>
                {transaction.email}
              </p>
            </div>
          </div>

          <div className={styles.infoGrid}>
            <div>
              <span>Date</span>

              <strong>
                {transaction.date}
              </strong>
            </div>

            <div>
              <span>Type</span>

              <strong>
                {transaction.type}
              </strong>
            </div>

            <div>
              <span>Status</span>

              <strong>
                Completed
              </strong>
            </div>
          </div>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Description</th>

                <th>Invoice</th>

                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  Payment to{" "}
                  {
                    transaction.company
                  }
                </td>

                <td>
                  {
                    transaction.invoice
                  }
                </td>

                <td>
                  {
                    transaction.amount
                  }
                </td>
              </tr>
            </tbody>
          </table>
                    <div className={styles.total}>
            <span>Total Amount</span>

            <strong>
              {transaction.amount}
            </strong>
          </div>

          <div className={styles.footer}>
            <p>
              Thank you for banking with
              Nextrun.
            </p>

            <p>
              This receipt is generated
              electronically and does
              not require a signature.
            </p>
          </div>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
          >
            Close
          </button>

          <button
            type="button"
            className={styles.printButton}
            onClick={handlePrint}
          >
            <MdPrint />

            <span>Print Receipt</span>
          </button>
        </div>
      </div>
    </div>
  );
}