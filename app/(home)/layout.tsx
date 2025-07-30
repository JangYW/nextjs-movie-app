import Navigation from "@/components/navigation";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation theme="dark" />
      {children}
    </>
  );
}