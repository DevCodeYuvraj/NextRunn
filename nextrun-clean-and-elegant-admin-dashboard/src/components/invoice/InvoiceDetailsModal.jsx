"use client";

import {
  MdClose,
  MdPrint,
} from "react-icons/md";

import StatusBadge from "./StatusBadge";

import styles from "./InvoiceDetailsModal.module.css";

export default function InvoiceDetailsModal({
  open,
  invoice,
  onClose,
}) {
  if (!open || !invoice) return null;

  const handlePrint = () => {
    const printWindow = window.open(
      "",
      "_blank",
      "width=900,height=900"
    );

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${invoice.invoice}</title>

        <style>
          *{
            margin:0;
            padding:0;
            box-sizing:border-box;
            font-family:Arial,sans-serif;
          }

          body{
            padding:40px;
            background:#ffffff;
            color:#202224;
          }

          .invoice{
            max-width:800px;
            margin:auto;
            border:1px solid #e5e7eb;
            border-radius:12px;
            padding:40px;
          }

          .top{
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:40px;
          }

          .logo{
            font-size:34px;
            font-weight:700;
          }

          .logo span{
            color:#4880FF;
          }

          .title{
            text-align:right;
          }

          .title h1{
            font-size:30px;
            margin-bottom:6px;
          }

          .section{
            display:flex;
            justify-content:space-between;
            margin-bottom:35px;
          }

          .section h3{
            margin-bottom:10px;
            color:#777;
            font-size:14px;
          }

          .section p{
            line-height:28px;
          }

          table{
            width:100%;
            border-collapse:collapse;
            margin:30px 0;
          }

          th{
            background:#f5f7fb;
            text-align:left;
            padding:14px;
          }

          td{
            padding:14px;
            border-bottom:1px solid #ececec;
          }

          .total{
            margin-top:25px;
            display:flex;
            justify-content:flex-end;
          }

          .total h2{
            font-size:24px;
          }

          .footer{
            margin-top:60px;
            text-align:center;
            color:#888;
            font-size:14px;
          }
        </style>

      </head>

      <body>

        <div class="invoice">

          <div class="top">

            <div class="logo">
              Next<span>run.</span>
            </div>

            <div class="title">
              <h1>INVOICE</h1>
              <p>${invoice.invoice}</p>
            </div>

          </div>

          <div class="section">

            <div>
              <h3>Billed To</h3>

              <p>
                ${invoice.customer}<br>
                customer@email.com<br>
                +91 9876543210
              </p>

            </div>

            <div>

              <h3>Invoice Details</h3>

              <p>
                Date : ${invoice.date}<br>
                Status : ${invoice.status}
              </p>

            </div>

          </div>

          <table>

            <thead>

              <tr>

                <th>Description</th>

                <th>Currency</th>

                <th>Amount</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>Invoice Payment</td>

                <td>${invoice.currency || "USD ($)"}</td>

                <td>${
                  invoice.amount
                    ? "$" + invoice.amount
                    : "$0.00"
                }</td>

              </tr>

            </tbody>

          </table>

          <div class="total">

            <h2>

              Total :
              ${
                invoice.amount
                  ? "$" + invoice.amount
                  : "$0.00"
              }

            </h2>

          </div>

          <div class="footer">

            Thank you for your business.

          </div>

        </div>

        <script>
          window.onload=function(){
            window.print();
            window.onafterprint=function(){
              window.close();
            }
          }
        </script>

      </body>

      </html>
    `);

    printWindow.document.close();
  };

  return (
    <div
      className={styles.overlay}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={styles.modal}>
        <div className={styles.header}>
          <div>
            <span className={styles.label}>
              Invoice Details
            </span>

            <h2>{invoice.invoice}</h2>
          </div>

          <button
            className={styles.close}
            onClick={onClose}
          >
            <MdClose />
          </button>
        </div>

        <div className={styles.customer}>
          <div className={styles.avatar}>
            {invoice.customer
              .split(" ")
              .map((w) => w[0])
              .join("")}
          </div>

          <div>
            <span>Customer</span>
            <strong>{invoice.customer}</strong>
          </div>
        </div>

        <div className={styles.details}>
          <div>
            <span>Invoice ID</span>
            <strong>{invoice.invoice}</strong>
          </div>

          <div>
            <span>Date</span>
            <strong>{invoice.date}</strong>
          </div>

          <div>
            <span>Status</span>
            <StatusBadge status={invoice.status} />
          </div>
        </div>

        <div className={styles.actions}>
          <button
            className={styles.cancel}
            onClick={onClose}
          >
            Close
          </button>

          <button
            className={styles.print}
            onClick={handlePrint}
          >
            <MdPrint />
            Print Invoice
          </button>
        </div>
      </div>
    </div>
  );
}