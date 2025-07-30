"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Navigation from "./navigation";

export default function NavigationWrapper() {
  const path = usePathname();
  const theme = path.startsWith("/swiper") ? "light" : "dark";

  useEffect(() => {
    document.body.className = `antialiased ${theme}`;
  }, [theme]);

  return <Navigation theme={theme} />;
}