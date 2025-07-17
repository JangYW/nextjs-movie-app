import MovieInfo from "@/components/movie-info";
import MovieVideos from "@/components/movie-videos";
import { Suspense } from "react";

// ✅ 타입을 먼저 선언
interface MovieDetailPageProps {
  params: {
    id: string;
  };
}

// ✅ props 타입을 명확하게 전달
export default function MovieDetail({ params }: MovieDetailPageProps) {
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