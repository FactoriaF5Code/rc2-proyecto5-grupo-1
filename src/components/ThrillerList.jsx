import "./MovieLists.css";
import "../index.css";
import { Movie } from "./Movie.jsx";

export const ThrillerList = () => {
    const thrillerMovies = dataMovies.results.filter(movie => movie.genre_ids.includes(53));
    return (
        <>
            <div className="listTitle">
                <h2 className="listTitleH2">Thrillers que te pondrán los pelos de punta</h2>
                <div className="moreHover">
                    <button>VER MÁS
                        <svg id="arrowRight" width="12" height="8">
                            <path className="st0" d="M11.8,0.3c-0.4-0.4-1-0.5-1.4-0.1L5.9,4.1L1.7,0.3c-0.4-0.4-1-0.3-1.4,0.1c-0.4,0.4-0.3,1,0.1,1.4l4.9,4.4
                            c0.2,0.2,0.4,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.2l5.1-4.4C12.1,1.4,12.1,0.8,11.8,0.3z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <section className="scrollMovieList">
                <div className="horizontalScroll">
                    <div className="secondaryMovieList">
                        {thrillerMovies.map((movie, index) => (
                        <Movie key={index} film={movie} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
