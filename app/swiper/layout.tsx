import Navigation from "@/components/navigation";

export default function SwiperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation theme="light" />
      {children}
    </>
  );
}