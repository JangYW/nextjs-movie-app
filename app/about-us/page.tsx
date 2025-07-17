import Avatar from "./components/avatar";
import type { Metadata } from "next"; // ✅ 추가

export const metadata: Metadata = {
  title: "About us"
};


export default function AboutUs() {
	return (
		<div>
			<h1>Navigtion</h1>
			<Avatar></Avatar>
		</div>
	);
}