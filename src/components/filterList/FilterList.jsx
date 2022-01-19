import React, { useEffect, useState } from "react";
import tmdbApi, { movieType } from "../../api/tmdbApi";

import "./filterList.scss";

import Card from "../card/Card";
import { OutlineButton } from "../button/Button";
import Genres from "../genres/Genres";

const FilterList = (props) => {
  const [items, setItems] = useState([]);
  const [genres, setGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const getList = async () => {
      const params = {};
      const response = await tmdbApi.getMoviesList(movieType.popular, {
        params,
      });
      setItems(response.results);
      setTotalPage(response.total_pages);
      setGenres(response.results);
    };
    getList();
  }, []);

  const loadmore = async () => {
    const params = {
      page: page + 1,
    };
    const response = await tmdbApi.getMoviesList(movieType.popular, {
      params,
    });
    setItems([...items, ...response.results]);
    setGenres([...genres, ...response.results]);
    setPage(page + 1);
  };

  const filter = (genre) => {
    const filterData = genres.filter((item) => item.genre_ids.includes(genre));
    const activeGenre = document.querySelector(`.genres-item${genre}`);
    const genreItem = document.querySelectorAll(".item");
    genreItem.forEach((item) => {
      if (item === activeGenre) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
    setItems(filterData);
  };

  return (
    <div className="genres-movie">
      <Genres filter={filter} />
      <div className="grid">
        {items.map((item, index) => (
          <Card key={index} category={props.category} item={item} />
        ))}
      </div>
      {page < totalPage ? (
        <div className="grid-loadmore">
          <OutlineButton className="loadmore-button" onClick={loadmore}>
            Show more result
          </OutlineButton>
        </div>
      ) : null}
    </div>
  );
};

export default FilterList;
