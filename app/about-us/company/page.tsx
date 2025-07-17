import type { Metadata } from "next"; // 👈 이 줄 추가

export const metadata: Metadata = {
  title: "Company"
};

export default function Company() {
	return <h1>Company</h1>
}