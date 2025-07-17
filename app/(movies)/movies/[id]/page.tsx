import MovieInfo from "@/components/movie-info";
import MovieVideos from "@/components/movie-videos";
import { Suspense } from "react";

// ⛔️ 타입 충돌 방지를 위해 명시적 any로 처리
export default function MovieDetail({ params }: any) {
  const { id } = params;

  return (
    <div>
      <Suspense fallback={<h1>Loading movie Info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie Video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}