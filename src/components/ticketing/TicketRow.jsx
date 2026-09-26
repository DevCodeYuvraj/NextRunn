"use client";

import Avatar from "@/components/common/Avatar";
import { useAvatarContext } from "@/context/AvatarContext";

import TicketStatusBadge from "./TicketStatusBadge";

import styles from "./TicketRow.module.scss";

export default function TicketRow({
  ticket,
  selected,
  onSelect,
}) {
  const { getByEmail } =
    useAvatarContext();

  const contact =
    getByEmail(ticket.email);

  return (
    <tr
      className={`${styles.row} ${
        selected
          ? styles.selected
          : ""
      }`}
    >
      <td className={styles.checkboxCell}>
        <input
          type="checkbox"
          checked={selected}
          onChange={() =>
            onSelect(ticket.id)
          }
          aria-label={`Select ${ticket.event}`}
        />
      </td>

      <td>
        <div className={styles.event}>
          <div
            className={styles.eventIcon}
          >
            <span />
            <span />
            <span />
          </div>

          <div className={styles.eventInfo}>
            <strong>
              {ticket.event}
            </strong>

            <span>
              {ticket.ticketId}
            </span>
          </div>
        </div>
      </td>

      <td>
        <div className={styles.contact}>
          <Avatar
            src={contact?.image}
            alt={ticket.contact}
            size={42}
            online={false}
          />

          <div className={styles.contactInfo}>
            <strong>
              {ticket.contact}
            </strong>

            <span>
              {ticket.email}
            </span>
          </div>
        </div>
      </td>

      <td>
        <strong className={styles.price}>
          {ticket.price}
        </strong>
      </td>

      <td>
        <span className={styles.date}>
          {ticket.date}
        </span>
      </td>

      <td>
        <TicketStatusBadge
          status={ticket.status}
        />
      </td>
    </tr>
  );
}