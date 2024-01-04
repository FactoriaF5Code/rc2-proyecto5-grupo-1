import "./Gallery.css";
import "../App.css";
import { TerrorList } from './TerrorList.jsx';
import { ComedyList } from './ComedyList.jsx';
import { ThrillerList } from './ThrillerList.jsx';
import { useEffect, useState } from "react";

export const Gallery = () => {
//IMPORTACIÓN DE LA API DE TMDB
    //Estas constantes se llaman como yo quiera:
    //movies es cada elemento que muestro, setMovies lo que quiero que pase en ese elemento
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        //clave personal de la API de TMDb
        const apiKey = "ca058e3f495796073a20627d0140ccc3";
        //aquí se están mostrando las pelis que escojas, en este caso "popular"
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES`;
        
        //este código es estándar para obtener datos de una API
    fetch(url)
            .then((response) => response.json())
            .then((data) => {
            //esta constante setMovies la definimos antes
            setMovies(data.results);
        })
        //este catch es para asegurarnos de que la api funciona
        //si no funciona muestrar este error en la consola
        .catch((error) => {
            console.error("Error al obtener datos de la API:", error);
        });
    }, []);

//EL HTML QUE QUEREMOS QUE NOS MUESTRE
return (
    <main>
    <TerrorList />

    <ComedyList />

    <ThrillerList />
</main>
    );
};