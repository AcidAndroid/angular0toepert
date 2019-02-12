interface Pelicula {
	id:number,
	title: string,
	popularity: number,
	backdrop_path?:string,
	poster_path?: string,
	original_language: string,
	original_title?: string,
	overview: string,
	release_date: Date,
}
