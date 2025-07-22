import MovieInfo from "@/components/movie-info";
import MovieVideos from "@/components/movie-videos";
import { Suspense } from "react";
import { getMovie } from "@/components/movie-info";

export const dynamic = "force-dynamic"; // 페이지 전체가 동적으로 렌더링됨

interface IParams {
	params: { id: string } 
}

export async function generateMetadata({params} : IParams){
	const movie = await getMovie(params.id)
	return{
		 title: `Movie #${movie.title}`, // 그냥 id만 사용 (가볍고 안전함)
	}
}

export default async function MovieDetail({ params } : IParams) {
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