class Movie {
  constructor(
    id,
    title,
    releaseYear,
    runtime,
    director,
    actors,
    plot,
    categoryId,
    imageUrl
  ) {
    this.id = id;
    this.title = title;
    this.releaseYear = releaseYear;
    this.runtime = runtime;
    this.director = director;
    this.actors = actors;
    this.plot = plot;
    this.categoryId = categoryId;
    this.imageUrl = imageUrl;
  }
}

export default Movie;
