import { resolve } from "path";
import Link from "next/link";
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
		<div>
			{movies.map(movie =>
				<li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>
			)} 
		</div>
	);
}