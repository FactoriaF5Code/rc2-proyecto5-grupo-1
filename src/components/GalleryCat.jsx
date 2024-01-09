import "./Gallery.css";
import "../App.css";
import { TerrorListCat } from './TerrorListCat.jsx';
import { ComedyListCat } from "./ComedyListCat.jsx";
import { ThrillerListCat } from "./ThrillerListCat.jsx";



export const GalleryCat = () => {

//EL HTML QUE QUEREMOS QUE NOS MUESTRE
return (
    <main className = "mainGallery">
        <TerrorListCat />

        <ComedyListCat />

        <ThrillerListCat />
    </main>
    );
};