"use client";

import Avatar from "@/components/common/Avatar";

import StatusBadge from "./StatusBadge";
import ActionMenu from "./ActionMenu";

import styles from "./InvoiceRow.module.css";

export default function InvoiceRow({
  invoice,
  selected,
  onSelect,
  onView,
  onEdit,
  onPrint,
  onDelete,
}) {
  return (
    <tr className={styles.row}>
      <td className={styles.checkboxCell}>
        <input
          type="checkbox"
          checked={selected}
          onChange={() => onSelect(invoice.id)}
          aria-label={`Select ${invoice.invoice}`}
        />
      </td>

      <td>
        <span className={styles.invoiceId}>
          {invoice.invoice}
        </span>
      </td>

      <td>
        <div className={styles.customer}>
          <Avatar
            src={invoice.avatar}
            alt={invoice.customer}
            size={42}
          />

          <div className={styles.customerInfo}>
            <strong>
              {invoice.customer}
            </strong>

            <span>
              Customer
            </span>
          </div>
        </div>
      </td>

      <td className={styles.date}>
        {invoice.date}
      </td>

      <td>
        <StatusBadge
          status={invoice.status}
        />
      </td>

      <td className={styles.actionCell}>
        <ActionMenu
          invoice={invoice}
          onView={onView}
          onEdit={onEdit}
          onPrint={onPrint}
          onDelete={onDelete}
        />
      </td>
    </tr>
  );
}