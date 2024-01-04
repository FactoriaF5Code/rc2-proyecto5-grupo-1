import "./Movie.css";
import "../index.css";
import PropTypes from "prop-types";

export const Movie = ({ film }) => {
  return (
    <article className="moviePoster">
      <img
        src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
        alt={film.title}
      />
    </article>
  );
};

Movie.propTypes = {
    film: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
