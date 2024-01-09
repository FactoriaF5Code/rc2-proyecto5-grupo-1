import { HeaderCat } from "./HeaderCat.jsx";
import { SliderCat } from "./Slider/SliderCat.jsx";
import { GalleryCat } from "./GalleryCat.jsx";
import { FooterCat } from "./FooterCat.jsx";
import '../App.css'

export const HomeCat = () => {

  return (
    <>
      <HeaderCat />

      <SliderCat />

      <GalleryCat />

      <FooterCat />
    </>
  );
};

