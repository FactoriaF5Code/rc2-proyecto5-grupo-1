import { useState } from "react";
import "./Gallery.css";
import "../App.css";
import { TerrorList } from './TerrorList.jsx';
import { ComedyList } from "./ComedyList.jsx";
import { ThrillerList } from "./ThrillerList.jsx";

export const Gallery = ({ currentLanguage }) => {

return (
    <main className = "mainGallery">
        <TerrorList currentLanguage={currentLanguage} />

        <ComedyList currentLanguage={currentLanguage} />

        <ThrillerList currentLanguage={currentLanguage} />
    </main>
    );
};