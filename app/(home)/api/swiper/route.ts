// app/api/swiper/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const data = [
    {
      id: "art01",
      title: "Happincs",
      basePath: "https://image.thehyundai.com/hdmall/images/event/2025/0715_art/",
      thumbnail: "art01-1.png",
    },
    {
      id: "art02",
      title: "KINKI",
      basePath: "https://image.thehyundai.com/hdmall/images/event/2025/0703_kinki/",
      thumbnail: "swipe 1-1.png",
    },
  ];

  return NextResponse.json(data);
}