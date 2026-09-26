"use client";

import styles from "./MarketOverview.module.scss";
import MarketChart from "./MarketChart";

export default function MarketOverview() {
  return (
    <section className={styles.overview}>
      <MarketChart />
    </section>
  );
}