import styles from "@/styles/movie-video.module.css"
import { API_URL } from "@/lib/constants";

async function  getVideos(id:string) {
	console.log(`Fetching videos : ${Date.now()}`);

//	await new Promise((resolve => setTimeout(resolve, 3000)))	
	// throw new Error('Someting broke...')
	const response = await fetch(`${API_URL}/${id}/videos`);
	return response.json();
}

export default async function MovieVideos({id} : {id:string}){
	const videos = await getVideos(id);
	return <div className={styles.container}>
		{videos.map(video =>
			<iframe key={video.id} src={`https://youtube.com/embed/${video.key}`} title={video.title}></iframe>
		)}
	</div>
}