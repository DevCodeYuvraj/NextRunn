"use client";

import { useState } from "react";

import Avatar from "@/components/common/Avatar";
import { useAvatarContext } from "@/context/AvatarContext";

import {
  MdContentCopy,
  MdPrint,
} from "react-icons/md";

import TransactionActionMenu from "./TransactionActionMenu";
import printReceipt from "./printReceipt";

import styles from "./TransactionRow.module.css";

export default function TransactionRow({
  transaction,
}) {
  const { getByEmail } =
    useAvatarContext();

  const profile =
    getByEmail(transaction.email);

  const [copied, setCopied] =
    useState(false);

  async function handleCopyInvoice() {
    try {
      await navigator.clipboard.writeText(
        transaction.invoice
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1200);
    } catch {}
  }

  function handlePrint() {
    printReceipt(
      transaction,
      profile
    );
  }

  return (
    <div className={styles.row}>
      <div className={styles.customer}>
        <Avatar
          src={profile?.image}
          alt={transaction.company}
          size={46}
        />

        <div
          className={styles.customerInfo}
        >
          <span>
            {transaction.email}
          </span>

          <strong>
            {transaction.company}
          </strong>
        </div>
      </div>

      <div
        className={styles.invoiceArea}
      >
        <button
          type="button"
          className={
            styles.invoiceIcon
          }
          onClick={
            handleCopyInvoice
          }
          title={
            copied
              ? "Copied"
              : "Copy Invoice"
          }
        >
          <MdContentCopy />
        </button>

        <div
          className={
            styles.invoiceInfo
          }
        >
          <span>
            {transaction.date}
          </span>

          <strong>
            {transaction.invoice}
          </strong>
        </div>
      </div>

      <strong
        className={`${styles.amount} ${
          transaction.type ===
          "income"
            ? styles.income
            : styles.expense
        }`}
      >
        {transaction.amount}
      </strong>

      <div
        className={styles.actions}
      >
        <button
          type="button"
          className={
            styles.printButton
          }
          onClick={
            handlePrint
          }
        >
          <MdPrint />
        </button>

        <TransactionActionMenu
          transaction={
            transaction
          }
          onCopy={
            handleCopyInvoice
          }
          onPrint={
            handlePrint
          }
        />
      </div>
    </div>
  );
}