 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../styles/navigation.module.css"

export default function Navigation() {
	const path = usePathname();
	const [count, setCount] = useState(0)
	console.log(path);
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<li>
					<Link href="/">Home</Link> {path === "/" ? "😍" : ""}
				</li>
				<li>
					<Link href="/about-us">About Us</Link> {path === "/about-us" ? "😍" : ""}
				</li>				
				<li>
					<Link href="/about-us/company">company</Link> {path === "/about-us/company" ? "😍" : ""}
				</li>								
				<li>
					<Link href="/about-us/company/jobs/sales">Sales</Link> {path === "/about-us/company/jobs/sales" ? "😍" : ""}
				</li>								
				<li><button onClick = {() => setCount(c => c + 1 )}>{count}</button></li>
			</ul>
		</nav>
	);
}