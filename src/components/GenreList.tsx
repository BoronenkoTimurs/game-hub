import React from "react";
import useGengres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGengres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
