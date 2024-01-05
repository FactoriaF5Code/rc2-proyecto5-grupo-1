import "./Gallery.css";
import "../App.css";
import { TerrorList } from './TerrorList.jsx';
import { ComedyList } from "./ComedyList.jsx";
import { ThrillerList } from "./ThrillerList.jsx";


export const Gallery = () => {

//EL HTML QUE QUEREMOS QUE NOS MUESTRE
return (
    <main>
        <TerrorList />

        <ComedyList />

        <ThrillerList />

    </main>
    );
};