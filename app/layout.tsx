import "@/styles/global.css"
import type { Metadata } from "next";
import Navigation from "@/components/navigation";

export const metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Loading...",
  },
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
