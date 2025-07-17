import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/navigation";

export const metadata: Metadata = {
  title: {
	template : "%s | Next Movies",
	default : "Loading..."
  },
  description: "Best Movies",
};


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
		<body className="antialiased">
			<Navigation></Navigation>
			{children}
      </body>
    </html>
  );
}
