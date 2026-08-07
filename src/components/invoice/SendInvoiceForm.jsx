"use client";

import { useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";

import {
  recipients,
  currencies,
} from "@/data/invoiceData";

import styles from "./SendInvoiceForm.module.css";

export default function SendInvoiceForm({
  invoices,
  onCreateInvoice,
}) {
  const [recipient, setRecipient] =
    useState(recipients[0].name);

  const [currency, setCurrency] =
    useState(currencies[0]);

  const [amount, setAmount] =
    useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!amount.trim()) return;

    const person = recipients.find(
      (item) =>
        item.name === recipient
    );

    const nextNumber = String(
      invoices.length + 1
    ).padStart(4, "0");

    const today = new Date();

    const newInvoice = {
      id: Date.now(),

      invoice: `#INV-${nextNumber}`,

      customer: recipient,

      avatar: person.avatar,

      date: today.toLocaleDateString(
        "en-US",
        {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }
      ),

      status: "Pending",

      currency,

      amount,
    };

    onCreateInvoice(newInvoice);

    setAmount("");
  };  return (
    <section className={styles.card}>
      <h3>Send Invoice</h3>

      <form onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="invoice-recipient">
            Recipient
          </label>

          <div className={styles.selectWrapper}>
            <select
              id="invoice-recipient"
              value={recipient}
              onChange={(e) =>
                setRecipient(e.target.value)
              }
            >
              {recipients.map((person) => (
                <option
                  key={person.id}
                  value={person.name}
                >
                  {person.name}
                </option>
              ))}
            </select>

            <MdKeyboardArrowDown />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.field}>
            <label htmlFor="invoice-currency">
              Currency
            </label>

            <div className={styles.selectWrapper}>
              <select
                id="invoice-currency"
                value={currency}
                onChange={(e) =>
                  setCurrency(e.target.value)
                }
              >
                {currencies.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>

              <MdKeyboardArrowDown />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="invoice-amount">
              Amount
            </label>

            <input
              id="invoice-amount"
              type="number"
              min="0"
              step="0.01"
              placeholder="0.00"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value)
              }
            />
          </div>
        </div>

        <button
          type="submit"
          className={styles.sendButton}
        >
          Send Invoice
        </button>
      </form>
    </section>
  );
}