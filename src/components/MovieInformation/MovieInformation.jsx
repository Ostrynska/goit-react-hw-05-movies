export const MovieInformation = ({ movie }) => {
  console.log('movie', movie);
  const { title, id, poster_path, release_date, popularity, overview, genres } =
    movie;
  return (
    <>
      <button type="button">Go back</button>
      <div>
        <img
          src={'https://image.tmdb.org/t/p/w500' + poster_path}
          alt={title}
        />
        <h3>
          {title} ({release_date})
        </h3>
        <p>User Score: {popularity}</p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <h4>Genres</h4>
        {genres.map(({ name }) => (
          <p>{name}</p>
        ))}
      </div>
      <div>
        <p>Additional Information</p>
      </div>
    </>
  );
};
