import useGengres from "../hooks/useGenres";


const GenreList = () => {
  const { data } = useGengres();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
