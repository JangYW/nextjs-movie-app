import potato from "@/styles/movie-info.module.css";
import { API_URL } from "@/lib/constants";

export async function getMovie(id:string) {
	// console.log(`Fetching movies : ${Date.now()}`);
	// await new Promise((resolve => setTimeout(resolve, 3000)))	
	const response = await fetch(`${API_URL}/${id}`);
	return response.json();
}

export default async function MovieInfo({id} : {id:string}){
	const movie = await getMovie(id);
	return (
		<div className={potato.container}>
			<img className={potato.poster} alt={movie.title} src={movie.poster_path}></img>
			<div className={potato.info}>
				<h1 className={potato.title}>{movie.title}</h1>
				<h3>★ {movie.vote_average.toFixed(1)}</h3>		
				<p>{movie.overview}</p>
				<a href={movie.homePage} target={"_blank"}>Hompage &rarr;</a>
			</div>
		</div>
	)
}