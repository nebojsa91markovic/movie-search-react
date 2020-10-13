import React, { useState, useEffect } from "react";
import "./styled.css";
import { v4 as uuidv4 } from "uuid";
import Modal from "react-modal";

import DEFAULT_IMAGE from "../../images/noposter.jpg";
import Stars from "../Stars";

const customStyles = {
  content: {
    borderRadius: "20px",
    backgroundColor: "rgba(111, 34, 50, 0.9)",
  },
};

const DEFAULT_IMAGE1 =
  "https://image.tmdb.org/t/p/original/eiVQORVyVuNNZHPAELuWtlXoQsD.jpg";

const MovieComponent = ({ movieInfo }) => {
  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  const [ModalInfo, setModalInfo] = useState({});

  const openModal = (movie) => {
    setModalInfo(movie);
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    subtitle.style.color = "white";
  };

  useEffect(() => {
    Modal.setAppElement("#allMovies");
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };
  // console.log(movieInfo);
  const moviePoster =
    movieInfo.poster_path === null
      ? DEFAULT_IMAGE
      : "https://image.tmdb.org/t/p/original" + movieInfo.poster_path;
  return (
    <div className="allMovies" id="allMovies">
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className="modal-close">
          close
        </button>
        <p>
          <h2
            ref={(_subtitle) => (subtitle = _subtitle)}
            className="modal-title"
          >
            Hello {ModalInfo.original_title}{" "}
          </h2>
        </p>

        <div className="stars">
          <Stars>{ModalInfo.vote_average}</Stars>
        </div>
        <div className="modal-body">{ModalInfo.overview}</div>
        <div className="modal-posters">
          <img
            src={`https://image.tmdb.org/t/p/original${ModalInfo.poster_path}`}
          />
          <img
            src={`https://image.tmdb.org/t/p/original${ModalInfo.backdrop_path}`}
          />
        </div>
      </Modal>

      {movieInfo.map((movie, index) => (
        <div
          className="movie-component"
          key={uuidv4()}
          onClick={() => openModal(movie)}
        >
          <span>{movie.original_title} </span>
          <img
            src={
              movie.poster_path === null
                ? DEFAULT_IMAGE
                : "https://image.tmdb.org/t/p/original" + movie.poster_path
            }
          />
          <span>{movie.release_date}</span>
        </div>
      ))}
    </div>
  );
};

export default MovieComponent;
