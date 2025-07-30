// app/(home)/page.tsx
'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

type SwiperMeta = {
  id: string;
  title: string;
  basePath: string;
  thumbnail: string;
};

export default function HomePage() {
  const [list, setList] = useState<SwiperMeta[]>([]);

  useEffect(() => {
    fetch("/api/swiper")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  return (
    <main style={{ display: "flex", gap: "20px", flexWrap: "wrap", padding: "20px" }}>
      {list.map((item) => (
        <Link key={item.id} href={`/swiper/${item.id}`} style={{ textAlign: "center", width: "300px" }}>
          <img
            src={item.basePath + item.thumbnail}
            alt={`${item.title} 썸네일`}
            style={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              marginBottom: "8px",
            }}
          />
          <div style={{ fontWeight: "bold", fontSize: "16px" }}>{item.title}</div>
        </Link>
      ))}
    </main>
  );
}