import Navigation from "@/components/navigation"
import type { Metadata } from "next"; // ✅ 추가
export const metadata: Metadata = {
  title: "Not Found"
};

export default function NotFound() {
	return (
		<div>
			<h1>Not Found</h1>
		</div>
	);
}