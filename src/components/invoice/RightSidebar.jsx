"use client";

import PaymentCard from "./PaymentCard";
import RecentRecipients from "./RecentRecipients";
import SendInvoiceForm from "./SendInvoiceForm";

import styles from "./RightSidebar.module.scss";

export default function RightSidebar({
  invoices,
  onCreateInvoice,
}) {
  return (
    <div className={styles.sidebar}>
      <PaymentCard />

      <RecentRecipients />

      <SendInvoiceForm
        invoices={invoices}
        onCreateInvoice={
          onCreateInvoice
        }
      />
    </div>
  );
}