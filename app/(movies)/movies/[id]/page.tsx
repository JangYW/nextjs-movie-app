import MovieInfo from "@/components/movie-info";
import MovieVideos from "@/components/movie-videos";
import { Suspense } from "react";

// import { API_URL } from "@/lib/constants";
// async function getMovies(){
// 	// await new Promise((resolve => setTimeout(resolve, 1000)))
// 	const response = await fetch (API_URL);
// 	const json = await response.json();
// 	return json;
// }

export default async function MovieDetail({
	params: { id },
}: {
	params: { id: string };
}) {
	// const movie = await getMovies(); // ✅ 이거 하나만 있어도 됨!
	return (
	<div>
		<Suspense fallback = {<h1>Loading movie Info</h1>} >
			<MovieInfo id = {id}></MovieInfo>
		</Suspense>
		<Suspense fallback = {<h1>Loading movie Video</h1>} >
			<MovieVideos id = {id} ></MovieVideos>		
		</Suspense>			
	</div>
	);
} 