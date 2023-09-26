// import { useState } from "react";
import styles from "./header.module.css";

export default function header() {
  return (
    <header className={styles.header}>
      <div className={styles.branding}>
        <p>Alex</p>
      </div>
      <nav className={styles.headerNav}>
        <button className={styles.navButton}>☰</button>
      </nav>
    </header>
  );
}
