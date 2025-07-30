"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation({ theme = "dark" }: { theme: "dark" | "light" }) {
  const path = usePathname();
  return (
    <nav className={`${styles.nav} ${styles[theme]}`}>
      <ul className={styles.list}>
        <li><Link href="/">Home</Link> {path === "/" && "😍"}</li>
        <li><Link href="/about-us/company">company</Link></li>
      </ul>
    </nav>
  );
}