import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider/Slider";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";

function App()  {
  
  const [currentLanguage, setCurrentLanguage] = useState("es");

  return (
    <>
      <Header currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />

      <Slider currentLanguage={currentLanguage} />

      <Gallery currentLanguage={currentLanguage} />

      <Footer currentLanguage={currentLanguage}  />

    </>
  );
}

export default App;