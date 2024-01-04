import "./Gallery.css";
import "../index.css";
import { Movie } from './Movie';
import dataMovies from '../data/data.json';


export const Gallery = () => {
    return (
        <main className="catalogue">
            {dataMovies.results.map((movie, index) => (
            <Movie key={index} film={movie} />
            ))}
        </main>
    );
};
