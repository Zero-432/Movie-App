import React, { useState, useEffect, useRef } from "react";

import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

import SwiperCore, { Thumbs, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Button, { OutlineButton } from "../button/Button";
import Modal, { ModalContent } from "../modal/Modal";

import "./hero-slide.scss";
import { useNavigate } from "react-router-dom";

const HeroSlide = () => {
  SwiperCore.use([Thumbs, FreeMode]);

  const [moveItems, setMoveItems] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    // function random page
    const randomPage = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const getMovies = async () => {
      const params = { page: randomPage(1, 5) };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMoveItems(response.results.slice(0, 6));
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);

  return (
    <div className="hero-slide">
      <Swiper
        className="mySwiper2"
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs]}
        spaceBetween={0}
        loop={true}
        // autoplay={{ delay: 3000 }}
      >
        {moveItems.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className="mySwiper"
        modules={[Thumbs, FreeMode]}
        watchSlidesProgress={true}
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        freeMode={true}
      >
        <h2 className="mySwiper-title">Hot Movies</h2>
        {moveItems.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={apiConfig.w500Image(item.poster_path)} alt={item.title} />
            <h5 className="swiper-slide__title">{item.title}</h5>
          </SwiperSlide>
        ))}
      </Swiper>
      {moveItems.map((item, index) => (
        <TrailerModal key={index} item={item} />
      ))}
    </div>
  );
};

const HeroSlideItem = (props) => {
  let navigate = useNavigate();
  const item = props.item;
  const bg = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);
    const videos = await tmdbApi.getVideos(category.movie, item.id);

    if (videos.results.length > 0) {
      const videoSrc = "https://www.youtube.com/embed/" + videos.results[0].key;
      modal
        .querySelector(".modal__content > iframe")
        .setAttribute("src", videoSrc);
    } else {
      modal.querySelector(".modal__content").innerHTML = "No Trailer";
    }
    modal.classList.toggle("active");
  };

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <SmartText text={item.overview} />
          <div className="buttons">
            <Button onClick={() => navigate("/movie/" + item.id)}>
              Watch Now
            </Button>
            <OutlineButton onClick={setModalActive}>
              Watch Trailer
            </OutlineButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const SmartText = ({ text, length = 250 }) => {
  const [showLess, setShowLess] = React.useState(true);

  if (text.length < length) {
    return <div className="overview">{text}</div>;
  }

  return (
    <div className="overview">
      {showLess ? `${text.slice(0, length)}...` : text}
      <a
        className="show-more"
        onClick={() => setShowLess(!showLess)}
      >
        Read {showLess ? "More" : "Less"}
      </a>
    </div>
  );
};

const TrailerModal = (props) => {
  const item = props.item;
  const iframeRef = useRef(null);

  const onClose = () => iframeRef.current.setAttribute("src", "");

  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent onClose={onClose}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="500px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  );
};

export default HeroSlide;
