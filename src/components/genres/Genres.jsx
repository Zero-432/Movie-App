import React, { useEffect, useRef, useState } from "react";
import tmdbApi from "../../api/tmdbApi";

import "./genres.scss";

const Genres = ({ filter }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      const response = await tmdbApi.genres("movie");
      setGenres(response.genres);
    };
    getGenres();
  }, []);

  return (
    <div className="genres mb-2">
      {genres.slice(0, 5).map((item, index) => (
        <div
          key={index}
          className={`genres-item${item.id} item`}
          onClick={() => filter(item.id)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Genres;
