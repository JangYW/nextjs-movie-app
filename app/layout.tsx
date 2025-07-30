import "@/styles/global.css";
import NavigationWrapper from "@/components/navigation-wrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <NavigationWrapper />
        {children}
      </body>
    </html>
  );
}