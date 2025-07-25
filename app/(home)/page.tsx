import styles from "@/styles/home.module.css";
import Movie from "@/components/movie"
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export const metadata = {
	title : "Home",

}

import { API_URL } from "@/lib/constants";

async function getMovies(){
	// await new Promise((resolve => setTimeout(resolve, 1000)))
	const response = await fetch (API_URL);
	const json = await response.json();
	return json;
}

export default async function HomePage() {
	const movies = await getMovies();
	return (
		<div className={styles.container}>
			{movies.map(movie =>
				<Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />
			)} 
		</div>
	);
}