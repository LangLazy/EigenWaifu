import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

function Dashboard() {
  return (
    <div>
      <div className={styles.navbar}>
        <ul>
          <li className="navbar--link-item">
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
          <li className="navbar--link-item">
            <Link href="/collection">
              <a>Collection</a>
            </Link>
          </li>
          <li className="navbar--link-item">
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>Dashboard</h2>
      </div>
    </div>
  );
}

export default Dashboard;
