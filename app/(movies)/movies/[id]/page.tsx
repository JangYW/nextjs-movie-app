import MovieInfo from "@/components/movie-info";
import MovieVideos from "@/components/movie-videos";
import { Suspense } from "react";

// ✅ 타입 강제 없이 함수에서 바로 구조분해
export default function MovieDetail({ params }: { params: { id: string } }) {
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