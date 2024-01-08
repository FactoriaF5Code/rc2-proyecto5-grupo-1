import "./MovieLists.css";
import { Movie } from "./Movie.jsx";
import { useEffect, useState } from "react";

export const TerrorList = () => {
    const [terrorMovies, setTerrorMovies] = useState([]);

    useEffect(() => {
        const apiKey = "ca058e3f495796073a20627d0140ccc3";
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27&language=es-ES`;
        
    fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setTerrorMovies(data.results);
        })
        .catch((error) => {
            console.error("Error al obtener datos de la API:", error);
        });
    }, []);

    return (
        <>
            <main className="galleryMovies">
                <div className="listTitle">
                    <img className="iconTitle" src="public/imgs/terror.svg" alt="icono terror" />
                    <h2 className="listTitleH2">Esta noche vigila bien tus ventanas</h2>
                    <div className="moreHover">
                        <button>VER MÁS
                            <svg id="arrowRight" width="12" height="8">
                                <path className="st0" d="M11.8,0.3c-0.4-0.4-1-0.5-1.4-0.1L5.9,4.1L1.7,0.3c-0.4-0.4-1-0.3-1.4,0.1c-0.4,0.4-0.3,1,0.1,1.4l4.9,4.4
                                c0.2,0.2,0.4,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.2l5.1-4.4C12.1,1.4,12.1,0.8,11.8,0.3z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="movieList">
                        {terrorMovies.map((movie, index) => (
                        <Movie key={index} film={movie} />
                        ))}
                </div>
            </main>
            
        </>
    );
};
